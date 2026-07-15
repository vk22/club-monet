<?php

if (!class_exists('msPaymentInterface')) {
    require_once dirname(dirname(dirname(__FILE__))) . '/model/minishop2/mspaymenthandler.class.php';

}

class Sberbank extends msPaymentHandler implements msPaymentInterface
{
    public $config;
    public $modx;

    /* @inheritdoc */
    function __construct(xPDOObject $object, $config = array())
    {
        $this->modx = &$object->xpdo;
        $siteUrl = $this->modx->getOption('site_url');
        $returnHost = $this->modx->getOption('ms2_payment_sbrbnk_return_host', null, $siteUrl, true);
        $assetsUrl = $this->modx->getOption('minishop2.assets_url', $config, $this->modx->getOption('assets_url') . 'components/minishop2/');
        $paymentUrl = $returnHost . ltrim($assetsUrl, '/') . 'payment/sberbank.php';
        $orderStatus = 2;
        $apiDopUrl = 'register.do';
        if ($this->modx->getOption('ms2_payment_sbrbnk_PreAuth') == 1) {
            $orderStatus = 1;
            $apiDopUrl = 'registerPreAuth.do';
        }
        $this->config = array_merge(array(
            'paymentUrl' => $paymentUrl,
            'checkoutUrl' => $this->modx->getOption('ms2_payment_sbrbnk_url', null, 'https://3dsec.sberbank.ru/payment/rest/', true),
            'login' => $this->modx->getOption('ms2_payment_sbrbnk_login'),
            'pass' => $this->modx->getOption('ms2_payment_sbrbnk_pass'),
            'currency' => $this->modx->getOption('ms2_payment_sbrbnk_currency', null, 'RUB', true),
            'culture' => $this->modx->getOption('ms2_payment_sbrbnk_culture', null, 'ru', true),
            'sessionTimeoutSecs' => $this->modx->getOption('ms2_payment_sbrbnk_timeout', null, 0, true),
            'paidStatus' => $this->modx->getOption('ms2_payment_sbrbnk_paid_status', null, 2, true),
            'json_response' => false,
            'ms2_payment_sbrbnk_PreAuth' => $this->modx->getOption('ms2_payment_sbrbnk_PreAuth'),
            'orderStatus' => $orderStatus,
            'apiDopUrl' => $apiDopUrl
        ) , $config);
        $this->modx->lexicon->load('mspsberbank:default');
    }

    /* @inheritdoc */
    public function send(msOrder $order)
    {
        // $link = $this->getPaymentLink($order);
        // return $this->success('', array(
        //     'redirect' => $link,
        //     'msorder' => $order->get('id')
        // ));
    }

    /* @inheritdoc */
    public function getPaymentLink(msOrder $order)
    {
        $id = $order->get('id');

        file_put_contents(__DIR__ . '/log.txt', "/////////////Order//////////////////" . PHP_EOL, FILE_APPEND);
        file_put_contents(__DIR__ . '/log.txt', $id . PHP_EOL, FILE_APPEND);

        if (!$fail_id = $this->modx->getOption('ms2_payment_sbrbnk_failure_id', null, 0)) {
            $fail_id = $this->modx->getOption('site_start', null, 1);
        }

        $link = $this->modx->makeUrl($fail_id, '', array(), 'full');
        if (!$link && ($resource = $this->modx->getObject('modResource', $fail_id)) && $resource->uri) {
            $link = $this->modx->getOption('site_url') . $resource->uri;
        }

        $this->modx->addPackage('mspsberbank', MODX_CORE_PATH . 'components/mspsberbank/model/');
        if (!$paymentLink = $this->modx->getObject('mspSberbankLink', array('order' => $id))) {
            $sum = round(number_format($order->get('cost'), 2, '.', '') * 100);
            $order_description = $this->modx->lexicon('mspsberbank_order_description', $order->toArray()) ?: 'Оплата заказа ' . $order->get('num');
            $request = array(
                'userName' => $this->config['login'],
                'password' => $this->config['pass'],
                'orderNumber' => $id,
                'amount' => $sum,
                'currency' => $this->config['currency'],
                'returnUrl' => $this->config['paymentUrl'],
                'failUrl' => $this->config['paymentUrl'],
                'description' => $order_description,
                'language' => $this->config['culture'],
                'orderBundle' => array()
            );
            if ($this->config['sessionTimeoutSecs']) {
                $request['sessionTimeoutSecs'] = $this->config['sessionTimeoutSecs'];
            }

            $taxType = $this->modx->getOption('ms2_payment_sbrbnk_tax_type', null, 0);
            $taxSum = 0;
            $orderBundle = array(
                'cartItems' => array(
                    'items' => array()
                ),
                'customerDetails' => array()
            );
            $userDiscont = 0;

            if ($order->user_id) {
                $user = $order->getOne('User');
                if ($user) {
                    $profile = $user->getOne('Profile');
                    $orderBundle['customerDetails'] = [
                        'email' => $profile->email,
                        'fullName' => $profile->fullname,
                    ];
                    $userDiscont = $profile->discount;
                }
            }
            
            $i = 1;

            $totalSum = 0;

            foreach ($order->getMany('Products') as $product) {
                $price = round(number_format($product->get('price'), 2, '.', '') * 100);
                $quantity = $product->get('count');
                $amount = round($price * $quantity);
                $totalSum = $totalSum + $amount;
                
                $productData = array(
                    'positionId' => $i,
                    'name' => $product->get('name'),
                    'quantity' => array(
                        'value' => $quantity,
                        'measure' => $this->modx->lexicon('ms2_frontend_count_unit') ?: 'шт.'
                    ) ,
                    'itemPrice' => $price,
                    'itemAmount' => $amount,
                    'itemCode' => $product->get('product_id'),
                    'tax' => array(
                        'taxType' => $taxType,
                        'taxSum' => $taxSum
                    ),
                    'itemAttributes' => array(
                        'attributes' => array(
                            array(
                                'name' => 'paymentMethod',
                                'value' => $this->modx->getOption('ms2_payment_sbrbnk_ofd.payment_method', null, 1, true)
                            ), array(
                                'name' => 'paymentObject',
                                'value' => $this->modx->getOption('ms2_payment_sbrbnk_ofd.payment_object', null, 1, true)
                            )
                        )
                    ),
                );
                $orderBundle['cartItems']['items'][] = $productData;
                $i++;
            }

            $paymentDeliveryObject = $this->modx->getOption('ms2_payment_sbrbnk_ofd.payment_object', null, 1, true);
            if ($this->modx->getOption('ms2_payment_sbrbnk_ofd.use_payment_delivery_object', null, 1, true)) {
                $paymentDeliveryObject = $this->modx->getOption('ms2_payment_sbrbnk_ofd.payment_delivery_object', null, 1, true);
            }
            if (($delivery = $order->getOne('Delivery')) && $order->get('delivery_cost') > 0) {
                $sum = round(number_format($order->get('delivery_cost'), 2, '.', '') * 100);
                $totalSum = $totalSum + $sum;
                $orderBundle['cartItems']['items'][] = array(
                    'positionId' => $i,
                    'name' => $delivery->get('name'),
                    'quantity' => array(
                        'value' => 1,
                        'measure' => $this->modx->lexicon('ms2_frontend_count_unit') ?: 'шт.'
                    ) ,
                    'itemPrice' => $sum,
                    'itemAmount' => $sum,
                    'itemCode' => $i . '_' . $delivery->get('id'),
                    'tax' => array(
                        'taxType' => $taxType,
                        'taxSum' => $taxSum
                    ),
                    'itemAttributes' => array(
                        'attributes' => array(
                            array(
                                'name' => 'paymentMethod',
                                'value' => $this->modx->getOption('ms2_payment_sbrbnk_ofd.payment_method', null, 1, true)
                            ),
                             array(
                                'name' => 'paymentObject',
                                'value' => $paymentDeliveryObject
                            )
                        )
                    ),
                );
                $i++;
            }

            //$orderBundleLog = date('Y-m-d H:i:s') . ' orderBundle ' . print_r($orderBundle, true);
            // file_put_contents(__DIR__ . '/log.txt', $orderBundleLog . PHP_EOL, FILE_APPEND);
            file_put_contents(__DIR__ . '/log.txt', "/////////////Order Cost//////////////////" . PHP_EOL, FILE_APPEND);
            file_put_contents(__DIR__ . '/log.txt', $order->get('cost') . PHP_EOL, FILE_APPEND);
            file_put_contents(__DIR__ . '/log.txt', "/////////////Order Delivery//////////////////" . PHP_EOL, FILE_APPEND);
            file_put_contents(__DIR__ . '/log.txt', $order->get('delivery_cost') . PHP_EOL, FILE_APPEND);
            
            $diff = $order->get('cost') - ($totalSum / 100);
            if ($diff > 0 and $payment = $order->getOne('Payment')) {
                $orderBundle['cartItems']['items'][] = array(
                    'positionId' => $i,
                    'name' => $payment->get('name'),
                    'quantity' => array(
                        'value' => 1,
                        'measure' => $this->modx->lexicon('ms2_frontend_count_unit') ?: 'шт.'
                    ),
                    'itemPrice' => round(number_format($diff, 2, '.', '') * 100),
                    'itemAmount' => round(number_format($diff, 2, '.', '') * 100),
                    'itemCode' => $i . '_' . $payment->get('id'),
                    'tax' => array(
                        'taxType' => $taxType,
                        'taxSum' => $taxSum
                    )
                );
                $i++;
            }

            if ($diff < 0) {

                $totalAmountWitoutAccessories = 0;
         
                foreach ($orderBundle['cartItems']['items'] as $item) {
                    $isDelivery = false;
                    if ($item['name'] == 'Самовывоз' || 
                        $item['name'] == 'Доставка почтой РФ' || 
                        $item['name'] == 'CDEK до двери' || 
                        $item['name'] == 'CDEK в пункт самовывоза') {
                            $isDelivery = true;
                        }
                    if (!$isDelivery) {
                        $id = $item['itemCode'];
                        $res = $this->modx->getObject('modResource',$id);
                        if ($res) {
                            $parentFirst = $res->get('parent');
                            $res2 = $this->modx->getObject('modResource',$parentFirst);
                            $parent = $res2->get('parent');

                            file_put_contents(__DIR__ . '/log.txt', "parent: " . PHP_EOL, FILE_APPEND);
                            file_put_contents(__DIR__ . '/log.txt', $parent . PHP_EOL, FILE_APPEND);
                            
                            if ($parent != 17) {
                                $totalAmountWitoutAccessories = $totalAmountWitoutAccessories + $item['itemAmount'] / 100;
                            }
                        }
                    }
                }

        
                if($totalAmountWitoutAccessories > 0 && $totalAmountWitoutAccessories < 2500){
                    $orderDiscount = 0;
                } else if ($totalAmountWitoutAccessories >= 2500 && $totalAmountWitoutAccessories < 5000){
                    $orderDiscount = 5.0;
                } else if ($totalAmountWitoutAccessories >= 5000 && $totalAmountWitoutAccessories < 10000){
                    $orderDiscount = 10.0;
                } else if ($totalAmountWitoutAccessories >= 10000 && $totalAmountWitoutAccessories < 100000){
                    $orderDiscount = 15.0;
                } else if ($totalAmountWitoutAccessories >= 100000 && $totalAmountWitoutAccessories < 500000){
                    $orderDiscount = 20.0;
                } else if ($totalAmountWitoutAccessories >= 500000){
                    $orderDiscount = 25.0;
                }
        
                $userDiscontFinal = $orderDiscount;
        
                if ($userDiscont) {
                    if ($userDiscont > $orderDiscount) {
                        $userDiscontFinal = $userDiscont;
                    } else {
                        $userDiscontFinal = $orderDiscount;
                    }
                };
        
                $ratio = 1 - ($userDiscontFinal / 100);
        
                $positions = count($orderBundle['cartItems']['items']);
                for ($idx = 0; $idx < $positions; $idx++) {
                    $isDelivery = false;
                    if ($orderBundle['cartItems']['items'][$idx]['name'] == 'Самовывоз' || 
                        $orderBundle['cartItems']['items'][$idx]['name'] == 'Доставка почтой РФ' || 
                        $orderBundle['cartItems']['items'][$idx]['name'] == 'CDEK до двери' || 
                        $orderBundle['cartItems']['items'][$idx]['name'] == 'CDEK в пункт самовывоза') {
                            $isDelivery = true;
                        }
                    if (!$isDelivery) {
                        $id = $orderBundle['cartItems']['items'][$idx]['itemCode'];
                        $res = $this->modx->getObject('modResource',$id);
                        if ($res) {
                            $parentFirst = $res->get('parent');
                            $res2 = $this->modx->getObject('modResource',$parentFirst);
                            $parent = $res2->get('parent');
                            if ($parent != 17) {
                                $newItemPrice = round($orderBundle['cartItems']['items'][$idx]['itemPrice'] * $ratio);
                                $newItemAmount = round($orderBundle['cartItems']['items'][$idx]['itemAmount'] * $ratio);
                                $orderBundle['cartItems']['items'][$idx]['itemPrice'] = $newItemPrice;
                                $orderBundle['cartItems']['items'][$idx]['itemAmount'] = $newItemAmount;    
                            }
                        }
                    }    
                }
            }

            // file_put_contents(__DIR__ . '/log.txt', "Sberbank товар: " . PHP_EOL, FILE_APPEND);
            // file_put_contents(__DIR__ . '/log.txt', $price . PHP_EOL, FILE_APPEND);
            // file_put_contents(__DIR__ . '/log.txt', $sum . PHP_EOL, FILE_APPEND);

            $diffLog = date('Y-m-d H:i:s') . ' diff:  ' . print_r($diff, true);
            $orderBundleFinalLog = date('Y-m-d H:i:s') . ' orderBundleFinal ' . print_r($orderBundle, true);
            file_put_contents(__DIR__ . '/log.txt', $diffLog . PHP_EOL, FILE_APPEND);
            file_put_contents(__DIR__ . '/log.txt', $orderBundleFinalLog . PHP_EOL, FILE_APPEND);
            file_put_contents(__DIR__ . '/log.txt', "///////////////////////////////////////" . PHP_EOL, FILE_APPEND);

            $request['orderBundle'] = $this->modx->toJSON($orderBundle);
            $paymentLink = $this->modx->newObject('mspSberbankLink');
            $paymentLink->set('order', $id);
            $apiUrl = $this->config['checkoutUrl'] . $this->config['apiDopUrl'];
            $client = $this->modx->getService('rest.modRestCurlClient');
            foreach ($request as $k => $v) {
                $request[$k] = urlencode($v);
            }
            $contents = $client->request($apiUrl, '', 'POST', $request, array(
                'contentType' => 'string'
            ));
            if (!$contents) {
                $this->modx->log(modX::LOG_LEVEL_ERROR, '[miniShop2:Sberbank] Response is not received from API.');
            }
            $respond = $this->modx->fromJSON($contents);
            if (!empty($respond)) {
                if (isset($respond['formUrl'])) {
                    $paymentLink->set('link', $respond['formUrl']);
                    $paymentLink->save();
                } else {
                    if (isset($respond['errorMessage'])) {
                        $this->modx->log(modX::LOG_LEVEL_ERROR, '[miniShop2:Sberbank] Error while getting payment link: ' . $respond['errorMessage']);
                    } else {
                        $this->modx->log(modX::LOG_LEVEL_ERROR, '[miniShop2:Sberbank] No payment link in respond. Respond: ' . print_r($respond, 1));
                    }
                }
            } else {
                $this->modx->log(modX::LOG_LEVEL_ERROR, '[miniShop2:Sberbank] Response is empty.');
            }
        }
        if ($paymentLink->get('link')) {
            $link = $paymentLink->get('link');
        }

        return $link;
    }

    /* @inheritdoc */
    public function receive(msOrder $order, $params = array())
    {
        $request = array(
            'userName' => $this->config['login'],
            'password' => $this->config['pass'],
            'orderId' => $params['orderId'],
            'language' => $this->config['culture']
        );
        $apiUrl = $this->config['checkoutUrl'] . 'getOrderStatus.do';
        $client = $this->modx->getService('rest.modRestCurlClient');
        foreach ($request as $k => $v) {
            $request[$k] = urlencode($v);
        }
        $contents = $client->request($apiUrl, '', 'POST', $request, array(
            'contentType' => 'string'
        ));
        if (!$contents) {
            $this->modx->log(modX::LOG_LEVEL_ERROR, '[miniShop2:Sberbank] Response is not received from API. API URL: ' . $apiUrl . ' request: ' . $this->modx->toJSON($request));
        }
        $respond = $this->modx->fromJSON($contents);
        if ($respond['OrderStatus'] == $this->config['orderStatus']) {
            /* @var miniShop2 $miniShop2 */
            $miniShop2 = $this->modx->getService('miniShop2');
            @$this->modx->context->key = 'mgr';
            $miniShop2->changeOrderStatus($respond['OrderNumber'], $this->config['paidStatus']);
            $_REQUEST['action'] = 'success';
            $_REQUEST['OrderNumber'] = $respond['OrderNumber'];
        } else {
            $_REQUEST['action'] = 'failure';
        }

        return;
    }

    public function paymentError($text, $request = array())
    {
        $this->modx->log(modX::LOG_LEVEL_ERROR, '[miniShop2:Sberbank] ' . $text . ', request: ' . print_r($request, 1));
        header("HTTP/1.0 400 Bad Request");
        die('ERR: ' . $text);
    }
}
