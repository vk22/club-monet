<?php

abstract class mspYooKassaResponseProcessor extends modProcessor
{
    /** @var mspYooKassa $mspYooKassa */
    public $mspYooKassa;


    public function initialize()
    {
        /** @var mspYooKassa $mspYooKassa */
        $fqn = $this->modx->getOption('mspyookassa_class', null, 'mspyookassa.mspYooKassa', true);
        $path = $this->modx->getOption('mspyookassa_core_path', null, $this->modx->getOption('core_path', null, MODX_CORE_PATH) . 'components/mspyookassa/');
        if (!$this->mspYooKassa = $this->modx->getService($fqn, '', $path . 'model/', ['core_path' => $path])) {
            return false;
        }

        return true;
    }

    public function getPaymentHandler(msOrder $Order)
    {
        /** @var msPaymentInterface|mspYooKassaPaymentHandler $handler */
        $handler = null;
        /** @var msPayment $Payment */
        if ($Payment = $Order->getOne('Payment') and $Payment->loadHandler()) {
            $handler = $Payment->handler;
            if (!in_array(get_class($handler), $this->mspYooKassa->getPaymentClass())) {
                $handler = null;
            }
        }

        return $handler;
    }

    public function getStringFromArray($array, $level = 0, $keylen = 0, $actual_spaces = 0)
    {
        $array = is_array($array) ? $array : [];
        $output = '';
        /*if ($level == 0) {
            $output .= PHP_EOL;
        }*/
        $root = '';
        $break = PHP_EOL;
        $spaces = str_repeat(' ', $actual_spaces + $keylen);
        $dashes = str_repeat('—', $keylen);
        $total_space = $actual_spaces + $keylen * 2;

        ksort($array);
        foreach ($array as $key => $value) {
            if (is_array($value)) {
                $output .= $spaces . '' . $dashes . ' ' . $key . $break;
                $output .= $this->getStringFromArray($value, $level + 1, 2, $total_space);
            } else {
                if ($level > 0) {
                    $output .= $spaces . $root . $dashes . ' ';
                } else {
                    $output .= $root . ' ';
                }
                $type = gettype($value);

                switch ($type) {
                    case 'boolean':
                        $value = $value ? '"true"' : '"false"';
                        break;
                    default:
                        $value = '"' . $value . '"';
                        break;
                }
                $output .= $key . ' → ' . $value . $break;
            }
        }

        $output = htmlspecialchars($output, ENT_SUBSTITUTE, 'UTF-8');

        return $output;
    }

    public function lexicon($msg, $pls = [])
    {
        return $this->mspYooKassa->lexicon($msg, $pls);
    }

    public function success($msg = '', $data = [], $total = null)
    {
        return $this->response(true, $msg, $data, $total);
    }

    public function failure($msg = '', $data = [], $total = null)
    {

        return $this->response(false, $msg, $data, $total);
    }

    public function response($success = false, $msg = '', $data = [], $total = null)
    {
        if ($this->modx->getService('error', 'error.modError')) {
            $data = $this->modx->error->toArray($data);
        }

        $response = [
            'success' => (boolean)$success,
            'message' => $msg ? $this->lexicon($msg, $data) : $msg,
            'data' => $data,
            'total' => $total,
        ];

        return json_encode($response);
    }

    public function outputArray(array $array, $count = false)
    {
        if ($count === false) {
            $count = is_array($array) ? count($array) : $count;
        }

        return $this->success('', $array, $count);
    }

}

return 'mspYooKassaResponseProcessor';