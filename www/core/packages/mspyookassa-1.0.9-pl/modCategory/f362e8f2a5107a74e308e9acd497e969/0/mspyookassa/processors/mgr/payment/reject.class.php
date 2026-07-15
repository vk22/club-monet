<?php

require_once dirname(__DIR__) . '/response.class.php';

class mspYooKassaPaymentRejectProcessor extends mspYooKassaResponseProcessor
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

        $response = null;
        if (method_exists($handler, 'cancelPayment')) {
            if ($payment = $handler->cancelPayment($Order)) {
                $response = $handler->changeOrderStatus($Order, 4);
            }
        }

        if ($response === true) {
            $handler->changeOrderPayment($Order, $payment);

            return $this->success('');
        }

        if ($this->mspYooKassa->hasErrors() and $errors = $this->mspYooKassa->errors()) {
            return $this->failure(implode('<br>', $errors));
        }

        return $this->failure('');
    }

}

return 'mspYooKassaPaymentRejectProcessor';