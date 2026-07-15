<?php

require_once dirname(__DIR__) . '/response.class.php';

class mspYooKassaPaymentCreateProcessor extends mspYooKassaResponseProcessor
{

    public function process()
    {
        /** @var msOrder $Order */
        if (!$Order = $this->modx->getObject('msOrder', (int)$this->getProperty('order'), false)) {
            return $this->failure($this->modx->lexicon('mspyacassa_err_data'));
        }
        /** @var msPaymentInterface|mspYooKassaPaymentHandler $handler */
        if (!$handler = $this->getPaymentHandler($Order)) {
            return $this->failure('');
        }

        $object = null;
        /** @var mspYooKassaOrderPayment $OrderPayment */
        if ($OrderPayment = $this->modx->getObject('mspYooKassaOrderPayment', $Order->get('id'))) {
            $object = $OrderPayment->get('object');
        }

        $data = [
            'order' => $this->getProperty('order'),
            'object' => $object,
            'object_html' => $this->getStringFromArray($object),
        ];

        return $this->success('', $data);
    }

}

return 'mspYooKassaPaymentCreateProcessor';