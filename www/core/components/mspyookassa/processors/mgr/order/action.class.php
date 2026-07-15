<?php

require_once dirname(__DIR__) . '/response.class.php';

class mspYooKassaOrderActionProcessor extends mspYooKassaResponseProcessor
{
    /** @var mspYooKassa $mspYooKassa */
    public $mspYooKassa;


    public function process()
    {
        /** @var msOrder $Order */
        if (!$Order = $this->modx->getObject('msOrder', (int)$this->getProperty('id'), false)) {
            return $this->failure($this->modx->lexicon('mspyookassa_err_data'));
        }
        /** @var msPayment $Payment */
        if (!$Payment = $Order->getOne('Payment') or !$Payment->loadHandler()) {
            return $this->failure('');
        }
        /** @var msPaymentInterface|mspyookassaPaymentHandler $handler */
        $handler = $Payment->handler;
        if (!in_array(get_class($handler), $this->mspYooKassa->getPaymentClass())) {
            return $this->failure('');
        }

        $data = ['actions' => $this->getOrderActions($Order)];

        return $this->success('', $data);
    }


    public function getOrderActions(msOrder $Order)
    {
        $set = [
            'sep' => [
                'cls' => '',
                'icon' => '',
                'title' => '',
                'action' => 'sep',
                'button' => false,
                'menu' => true,
            ],
            'create' => [
                'cls' => '',
                'icon' => 'icon icon-external-link',
                'title' => $this->lexicon('mspyookassa_payment_create'),
                'action' => 'mspyookassaPaymentCreate',
                'button' => true,
                'menu' => true,
            ],
            'get' => [
                'cls' => '',
                'icon' => 'icon icon-eye',
                'title' => $this->lexicon('mspyookassa_payment_get'),
                'action' => 'mspyookassaPaymentGet',
                'button' => true,
                'menu' => true,
            ],
            'reject' => [
                'cls' => '',
                'icon' => 'icon icon-times',
                'title' => $this->lexicon('mspyookassa_payment_reject'),
                'action' => 'mspyookassaPaymentReject',
                'button' => true,
                'menu' => true,
            ],
            'accept' => [
                'cls' => '',
                'icon' => 'icon icon-check',
                'title' => $this->lexicon('mspyookassa_payment_accept'),
                'action' => 'mspyookassaPaymentAccept',
                'button' => true,
                'menu' => true,
            ],
        ];

        $actions = $ids = [];
        $status = $Order->get('status');
        switch ($status) {
            case 1:
                $ids = ['sep', 'create'];
                break;
            case 2:
                $ids = ['sep', 'get'];
                break;
            case 3:
                $ids = ['sep', 'get'];
                break;
            case 4:
                $ids = ['sep', 'get'];
                break;
            case $this->modx->getOption('mspyookassa_status_hold', null):
                $ids = ['sep', 'get', 'reject', 'accept'];
                break;
            default:
                break;
        }

        foreach ($ids as $id) {
            if (isset($set[$id])) {
                $actions[] = $set[$id];
            }
        }

        return $actions;
    }

}

return 'mspYooKassaOrderActionProcessor';