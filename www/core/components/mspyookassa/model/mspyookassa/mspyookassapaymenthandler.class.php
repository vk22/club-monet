<?php

//ini_set('display_errors', 1);
//ini_set('error_reporting', -1);

if (!class_exists('msPaymentInterface') and file_exists(MODX_CORE_PATH . 'components/minishop2/model/minishop2/mspaymenthandler.class.php')) {
    require_once MODX_CORE_PATH . 'components/minishop2/model/minishop2/mspaymenthandler.class.php';
}
if (!class_exists('msPaymentHandler') and file_exists(MODX_CORE_PATH . 'components/minishop2/handlers/mspaymenthandler.class.php')) {
    require_once MODX_CORE_PATH . 'components/minishop2/handlers/mspaymenthandler.class.php';
}

class mspYooKassaPaymentHandler extends msPaymentHandler implements msPaymentInterface
{
    /** @var modX $modx */
    public $modx;
    /** @var miniShop2 $ms2 */
    public $ms2;
    /** @var mspYooKassa $mspYooKassa */
    public $mspYooKassa;
    /** @var array $config */
    public $config = [];

    /** @var array $params */
    public $params;

    public $vat;
    public $taxSystem;
    public $shopCurrency;

    protected $shopId;
    protected $shopPassword;

    function __construct(xPDOObject $object, $config = [])
    {
        parent::__construct($object, $config);

        $fqn = $this->modx->getOption('mspyookassa_class', null, 'mspyookassa.mspYooKassa', true);
        $path = $this->modx->getOption('mspyookassa_core_path', null, $this->modx->getOption('core_path', null, MODX_CORE_PATH) . 'components/mspyookassa/');
        if (!$this->mspYooKassa = $this->modx->getService($fqn, '', $path . 'model/', ['core_path' => $path])) {
            return;
        }

        $this->shopId = $this->getOption('payment_shop_id', null);
        $this->shopPassword = $this->getOption('payment_shop_password', null);
        $this->shopCurrency = $this->getOption('payment_shop_currency', null, 'RUB', true);
        $this->vat = $this->getOption('payment_vat', null, 1, true);
        $this->taxSystem = $this->getOption('payment_tax_system', null);

        $this->mspYooKassa->setClientConfig(['auth' => [$this->shopId, $this->shopPassword]]);
        $this->mspYooKassa->initialize($this->modx->context->key, array_merge($config, ['showLog' => $this->getOption('payment_show_log', null)]));
    }

    public function __call($n, array $p)
    {

        echo __METHOD__ . ' says: ' . $n;
    }

    public function send(msOrder $order)
    {
        if ($response = $this->createPayment($order)) {
            $link = $response->getConfirmation()->confirmation_url;

            return $this->success('', ['redirect' => $link]);
        }

        return parent::send($order);
    }

    public function getPaymentLink(msOrder $order)
    {
        $link = null;

        if ($response = $this->createPayment($order)) {
            $link = $response->getConfirmation()->confirmation_url;
        }

        return $link;
    }

    public function getShopInfo()
    {
        try {
            return $this->mspYooKassa->getShopInfo();
        } catch (Exception $e) {
            $this->log($e->getMessage(), true);
        }

        return null;

    }

    public function loadParams(msOrder $order, $load = false)
    {
        $order = $this->reloadOrder($order);
        if (!$this->params or $load) {
            if (!$tmp = $order->getMany('Products')) {
                $products = null;
            } else {
                $products = [];
                foreach ($tmp as $item) {
                    /** @var msProduct $item */
                    $product = $item->toArray();
                    if (!empty($product['price']) and !empty($product['count'])) {
                        $products[] = $product;
                    }
                }
            }

            $object = [];
            /** @var mspYooKassaOrderPayment $OrderPayment */
            if ($OrderPayment = $this->modx->getObject('mspYooKassaOrderPayment', $order->get('id'))) {
                $object = $OrderPayment->get('object');
            }

            $this->params = [
                'order' => $order->toArray(),
                'object' => $object,
                'products' => $products,
                'payment' => ($payment = $order->getOne('Payment')) ? $payment->toArray() : null,
                'delivery' => ($delivery = $order->getOne('Delivery')) ? $delivery->toArray() : null,
                'profile' => ($profile = $order->getOne('UserProfile')) ? $profile->toArray() : null,
                'address' => ($address = $order->getOne('Address')) ? $address->toArray() : null,
            ];
        }

        return $this->params;
    }

    public function getProductValue($key = '', array $params = [])
    {
        $value = null;

        // TODO ФФД 1.05
        /*******************************************/
        $response = $this->mspYooKassa->miniShop2->invokeEvent('mspYooKassaOnGetProductValue', [
            'key' => $key,
            'params' => $params,
            'value' => $value,
        ]);
        if (empty($response['success'])) {
            return $value;
        }
        $data = isset($response['data']) ? $response['data'] : [];
        $value = isset($data['value']) ? $data['value'] : null;

        /*******************************************/

        return $value;
    }

    public function getReceipt(msOrder $order, $load = false)
    {
        $id = $order->get('id');
        file_put_contents(__DIR__ . '/log.txt', "/////////////Order//////////////////" . PHP_EOL, FILE_APPEND);
        file_put_contents(__DIR__ . '/log.txt', $id . PHP_EOL, FILE_APPEND);

        $receipt = [];

        $order = $this->reloadOrder($order);
        $this->loadParams($order, $load);

        $order_cart_cost = $this->getParam($order, 'order', 'cart_cost');
        $order_delivery_cost = $this->getParam($order, 'order', 'delivery_cost');

        if (!$products = $this->getParam($order, 'products')) {
            $products = [];
            $products[] = [
                'name' => $this->mspYooKassa->lexicon('order_product'),
                'price' => $order_cart_cost,
                'count' => 1,
                'payment_mode' => $this->getOption('payment_mode', null, '', true),
                'payment_subject' => $this->getOption('payment_subject', null, '', true),
            ];
        }
        if ($order_delivery_cost and $this->modx->getOption('mspyookassa_payment_receipt_with_delivery',null, true)) {
            $products[] = [
                'name' => $this->mspYooKassa->lexicon('order_delivery'),
                'price' => $order_delivery_cost,
                'count' => 1,
                'payment_mode' => $this->getOption('delivery_payment_mode', null, $this->getOption('payment_mode', null, ''), true),
                'payment_subject' => $this->getOption('delivery_payment_subject', null, $this->getOption('payment_subject', null, ''), true),
            ];
        }

        $amount = 0;
        foreach ($products as $product) {
            $price = $this->getNumber($product['price']);
            $quantity = $this->getNumber($product['count']);
            $amount += $price * $quantity;
        }

        $diff = $amount - $order_cart_cost - $order_delivery_cost;
        
        /// check
        $productsSumNew = 0;
        if (abs($diff) >= 0.001) {
            $coff = $diff / $amount;
            foreach ($products as $i => $product) {
                $price = $product['price'];
                $quantity = $product['count'];
                $newPrice =  round($price - $price * $coff, 2);
                $productsSumNew += $newPrice * $quantity;
            }
        }
        $productsSumNew = $productsSumNew - $order_delivery_cost;
        $mainDiff = $order_cart_cost - $productsSumNew;

        file_put_contents(__DIR__ . '/log.txt', "/////////////mainDiff//////////////////" . PHP_EOL, FILE_APPEND);
        file_put_contents(__DIR__ . '/log.txt', $mainDiff . PHP_EOL, FILE_APPEND);

        if ($mainDiff !== 0) {
            if (abs($diff) >= 0.001) {
                $coff = $diff / $amount;
                foreach ($products as $i => $product) {
                    reset($products);
                    if ($i === key($products)) {
                        $products[$i]['price'] = round($product['price'] - $product['price'] * $coff, 2) + $mainDiff;
                    } else {
                        $products[$i]['price'] = round($product['price'] - $product['price'] * $coff, 2);
                    }
                   
                }
            }

        } else {
            if (abs($diff) >= 0.001) {
                $coff = $diff / $amount;
                foreach ($products as $i => $product) {
                    $products[$i]['price'] = round($product['price'] - $product['price'] * $coff, 2);
                }
            }
        }

        $items = [];
        foreach ($products as $product) {
            $name = $this->getString($product['name']);
            $price = $this->getNumber($product['price']);
            $quantity = $this->getNumber($product['count']);

            $item = [
                'description' => $name,
                'quantity' => $quantity,
                'amount' => [
                    'value' => $price,
                    'currency' => $this->shopCurrency,
                ],
                'vat_code' => $this->vat,
                //'payment_mode'    => !empty($product['payment_mode']) ? $product['payment_mode'] : 'full_prepayment',
                //'payment_subject' => !empty($product['payment_subject']) ? $product['payment_subject'] : 'commodity',
                'payment_mode' => !empty($product['payment_mode']) ? $product['payment_mode'] : $this->getOption('payment_mode', null, '', true),
                'payment_subject' => !empty($product['payment_subject']) ? $product['payment_subject'] : $this->getOption('payment_subject', null, '', true),

            ];
            $item = $this->mspYooKassa->prepareReceiptItem($item, $product);

            // TODO ФФД 1.05
            if (false) {
                if ($payment_subject = $this->getProductValue('payment_subject', $product)) {
                    $item['payment_subject'] = $payment_subject;
                }
                if ($payment_mode = $this->getProductValue('payment_mode', $product)) {
                    $item['payment_mode'] = $payment_mode;
                }
            }

            $items[] = $item;
        }
        if (!empty($items)) {
            $receipt['items'] = $items;
        }

        if (!empty($this->taxSystem)) {
            $receipt['tax_system_code'] = $this->taxSystem;
        }

        // customer
        $receipt['customer'] = [];

        $email = '';
        if ($tmp = trim($this->getParam($order, 'profile', 'email')) and preg_match('/^[^@а-яА-Я]+@[^@а-яА-Я]+(?<!\.)\.[^\.а-яА-Я]{2,}$/um', $tmp)) {
            $email = $tmp;
        }
        $phone = '';
        if ($this->getOption('customer_contact', null, 'email', true) === 'phone') {
            if ($tmp = trim($this->getParam($order, 'address', 'phone')) and $tmp = substr(preg_replace('/[^0-9]/iu', '', $tmp), 0, 15)) {
                if ($tmp[0] == '8') {
                    $tmp = substr($tmp, 1);
                    $tmp = '7' . $tmp;
                }
                if ($tmp[0] == '7') {
                    $tmp = '+' . $tmp;
                }
                $phone = $tmp;
            }
        }
        if ($phone) {
            $receipt['customer']['phone'] = $phone;
        } else {
            $receipt['customer']['email'] = $email;
        }

        return $receipt;
    }

    public function createPayment(msOrder $order)
    {
        $order = $this->reloadOrder($order);
        if (!$this->checkOrderStatus($order)) {
            return false;
        }

        $this->loadParams($order, true);
        $id = $this->getParam($order, 'order', 'id');
        $num = $this->getParam($order, 'order', 'num');
        $order_cost = $this->getParam($order, 'order', 'cost');

        // create "data"
        $data = [
            'amount' => [
                'value' => $this->getNumber($order_cost),
                'currency' => $this->shopCurrency,
            ],
            'metadata' => [
                'msorder' => $id,
                'test' => (strpos($this->shopPassword, 'test_') === 0) ? true : false,
            ],
            'description' => $this->mspYooKassa->lexicon('order', ['id' => $id, 'num' => $num]),
        ];

        //add "capture"
        $capture = false;
        if ($tmp = $this->getParam($order, 'payment', 'properties', 'capture')) {
            $capture = filter_var($tmp, FILTER_VALIDATE_BOOLEAN) ? true : false;
        }
        $data['capture'] = $capture;

        // add "payment_method_data"
        $payment_method_data = [];
        if ($tmp = $this->getParam($order, 'payment', 'properties', 'payment_method_data')) {
            if ($tmp and is_array($tmp)) {
                $payment_method_data = array_merge($payment_method_data, $tmp);
            }
        }
        if ($payment_method_data) {
            $data['payment_method_data'] = $payment_method_data;
        }

        // add "confirmation"
        $confirmation = [];
        if ($tmp = $this->getParam($order, 'payment', 'properties', 'confirmation')) {
            if ($tmp and is_array($tmp)) {
                $confirmation = array_merge($confirmation, $tmp);
            }

            $type = isset($tmp['type']) ? $tmp['type'] : 'redirect';
            switch ($type) {
                case 'redirect':
                    if (empty($confirmation['return_url'])) {
                        $confirmation['return_url'] = $this->getReturnUrl(['msorder' => $id]);
                    }
                    break;
            }
        }
        if ($confirmation) {
            $data['confirmation'] = $confirmation;
        }

        $receipt = [];
        if ($this->getOption('payment_receipt', null, false)) {
            $receipt = $this->getReceipt($order);
        }
        if ($receipt) {
            $data['receipt'] = $receipt;
        }

        try {
            return $this->mspYooKassa->createPayment($data);
        } catch (Exception $e) {
            $this->log($e->getMessage(), true);
        }

        return null;
    }

    public function cancelPayment(msOrder $order)
    {
        $order = $this->reloadOrder($order);
        $this->loadParams($order, true);

        //$id = $this->getParam($order, 'order', 'properties', 'mspyookassa', 'payment', 'id');
        $id = $this->getParam($order, 'object', 'id');

        $data = [
            'id' => $id,
        ];

        try {
            return $this->mspYooKassa->cancelPayment($data);
        } catch (Exception $e) {
            $this->log($e->getMessage(), true);
        }

        return null;
    }

    public function refundPayment(msOrder $order)
    {
        $order = $this->reloadOrder($order);
        $this->loadParams($order, true);
        $order_cost = $this->getParam($order, 'order', 'cost');
        $payment_id = $this->getParam($order, 'order', 'properties', 'mspyookassa', 'payment', 'payment_id');
        $data = [
            'payment_id' => $payment_id,
            'amount' => [
                'value' => $this->getNumber($order_cost),
                'currency' => $this->shopCurrency,
            ],
        ];
        try {
            return $this->mspYooKassa->refundPayment($data);
        } catch (Exception $e) {
            $this->log($e->getMessage(), true);
        }

        return null;
    }

    public function confirmPayment(msOrder $order)
    {
        $order = $this->reloadOrder($order);
        $this->loadParams($order, true);

        $order_cost = $this->getParam($order, 'order', 'cost');
        // $id = $this->getParam($order, 'order', 'properties', 'mspyookassa', 'payment', 'id');

        $id = $this->getParam($order, 'object', 'id');
        //object
        $data = [
            'id' => $id,
            'amount' => [
                'value' => $this->getNumber($order_cost),
                'currency' => $this->shopCurrency,
            ],
        ];

        $receipt = [];
        if ($this->getOption('payment_receipt', null, false)) {
            $receipt = $this->getReceipt($order);
        }
        if ($receipt) {
            $data['receipt'] = $receipt;
        }

        try {
            return $this->mspYooKassa->confirmPayment($data);
        } catch (Exception $e) {
            $this->log($e->getMessage(), true);
        }

        return null;
    }

    public function notifyPayment(msOrder $order, mspYooKassaNotification $notification)
    {
        $order = $this->reloadOrder($order);
        if ($payment = $notification->getObject() and $id = $payment->getId() and $payment = $this->mspYooKassa->getPayment(['id' => $id])) {

            $cost = $payment->getAmount()->getValue();
            $metadata = $payment->getMetadata()->toArray();
            $id = isset($metadata['msorder']) ? (int)$metadata['msorder'] : 0;

            // check notify
            $checked = (abs($cost - $order->get('cost')) < 0.001 and $id == $order->get('id'));
            /** @var mspYooKassaOrderPayment $OrderPayment */
            if ($checked and $OrderPayment = $this->modx->getObject('mspYooKassaOrderPayment', $order->get('id'))) {
                $object = $OrderPayment->get('object');
                if (!empty($object) and !empty($object['id']) and $object['id'] != $payment->getId()) {
                    $checked = false;
                }
            }

            if ($checked) {
                switch ($payment->getStatus()) {
                    // платёж ожидает подтверждения
                    case YooKassa\Model\PaymentStatus::WAITING_FOR_CAPTURE:
                        $response = $this->changeOrderStatus($order, $this->getOption('status_hold', null));
                        break;
                    // платёж был отменён
                    // TODO отмена оплаты 02.11.2021
//                    case YooKassa\Model\PaymentStatus::CANCELED:
//                        if ($order->get('status') == 2) {
//                            $response = false;
//                        } else {
//                            if ($order->get('status') == 4) {
//                                $response = true;
//                            } else {
//                                $response = $this->changeOrderStatus($order, 4);
//                            }
//                        }
//                        break;
                    // платёж уже был подтверждён
                    case YooKassa\Model\PaymentStatus::SUCCEEDED:
                        if ($order->get('status') == 4) {
                            $response = false;
                        } else {
                            if ($order->get('status') == 2) {
                                $response = true;
                            } else {
                                $response = $this->changeOrderStatus($order, 2);
                            }
                        }
                        break;
                }

                $this->log($response);
                if ($response === true) {
                    $this->changeOrderPayment($order, $payment);

                    return true;
                }
            } else {
                if ($this->mspYooKassa->getOption('payment_show_log', null)) {
                    $this->log('Incorrect notification ' . print_r($notification->jsonSerialize(), 1), true);
                }
            }
        }

        return null;
    }


    public function checkOrderStatus(msOrder $order)
    {
        return $this->mspYooKassa->checkOrderStatus($order->get('status'));
    }

    public function changeOrderStatus(msOrder $order, $status)
    {
        return $this->mspYooKassa->changeOrderStatus($order->get('id'), $status);
    }

    public function changeOrderPayment(msOrder $order, $payment)
    {
        return $this->mspYooKassa->changeOrderPayment($order->get('id'), $payment);
    }

    /* public function changeOrderTest(msOrder $order, $test)
     {
         return $this->mspYooKassa->changeOrderTest($order->get('id'), $test);
     }*/

    public function getOption($key, $config = [], $default = null, $skipEmpty = false)
    {
        return $this->mspYooKassa->getOption($key, $config, $default, $skipEmpty);
    }

    public function reloadOrder(msOrder $order)
    {
        /** reload order */
        /** @var msOrder $order */
        if ($o = $this->modx->getObject('msOrder', $order->get('id'), false)) {
            $order = $o;
        }

        return $order;
    }

    public function getParam(msOrder $order)
    {
        $args = func_get_args();
        array_shift($args);

        $params = $this->loadParams($order);
        array_unshift($args, $params);

        return call_user_func_array([$this->mspYooKassa, 'getIterableValue'], $args);
    }

    public function getString($string)
    {
        return $this->mspYooKassa->getString($string);
    }

    public function getNumber($string)
    {
        return $this->mspYooKassa->getNumber($string);
    }

    public function getReturnUrl(array $options = [])
    {
        $id = $this->getOption('payment_return_id', null, $this->modx->getOption('site_start'), true);

        return $this->modx->makeUrl($id, '', $options, 'full', ['xhtml_urls' => false]);
    }

    public function log($message, $showLog = false)
    {
        $this->mspYooKassa->log($message, $this->getOption('payment_show_log', null, $showLog, true));
    }

}