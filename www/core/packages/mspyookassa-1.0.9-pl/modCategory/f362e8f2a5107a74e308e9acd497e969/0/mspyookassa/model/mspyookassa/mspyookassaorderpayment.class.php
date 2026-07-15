<?php

class mspYooKassaOrderPayment extends xPDOSimpleObject
{
    public function __call($n, array $p)
    {
        echo __METHOD__ . ' says: ' . $n;
    }

    public static function load(xPDO &$xpdo, $className, $criteria, $cacheFlag = true)
    {
        /* @var $instance mspYooKassaOrderPayment */
        $instance = parent::load($xpdo, 'mspYooKassaOrderPayment', $criteria, $cacheFlag);
        if (!is_object($instance) or !($instance instanceof $className)) {
            if (is_numeric($criteria) or (is_array($criteria) and !empty($criteria['id']))) {
                $id = is_numeric($criteria) ? $criteria : $criteria['id'];
                /** @var msOrder $order */
                if ($order = $xpdo->getObject('msOrder', (int)$id)) {
                    $instance = $xpdo->newObject('mspYooKassaOrderPayment');
                    $instance->set('id', $id);
                    if (!$instance->save()) {
                        $instance = null;
                    }
                }
            }
        }

        return $instance;
    }

}