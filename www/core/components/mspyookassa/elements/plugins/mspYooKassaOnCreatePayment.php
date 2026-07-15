<?php

/** @var array $scriptProperties */
/** @var mspYooKassa $mspYooKassa */
/** @var array $item */
/** @var array $data */

if ($modx->event->name === 'mspYooKassaOnPreparePaymentReceiptItem') {
    if (!empty($data)) {
        $item['description'] = '__' . $item['description'];
    }

    $modx->event->returnedValues['item'] = $item;
}

/** @var array $payment */
if ($modx->event->name === 'mspYooKassaOnCreatePayment') {
    $modx->log(1, print_r($payment, 1));
}

return;


/** @var array $scriptProperties */
/** @var mspYooKassa $mspYooKassa */
/** @var array $payment */
if ($modx->event->name != 'mspYooKassaOnCreatePayment') {
    return;
}

$orderId = $mspYooKassa->getArrayValue($payment, 'metadata', 'msorder');
/** @var msOrder $order */
if (!$order = $modx->getObject('msOrder', $orderId)) {
    return;
}
if (!isset($payment['receipt'])) {
    return;
}

//$items = [];
///** @var msOrderProduct[] $order_products */
//if ($products = $order->getMany('Products')) {
//    foreach ($products as $product) {
//        /** @var msProduct $product */
//        if ($product = $product->getOne('Product') AND isset($items[$idx])) {
//            $items[] =
//        }
//    }
//}

//mspYooKassa
$modx->log(1, print_r($orderId, 1));
$modx->log(1, print_r($payment, 1));

//$modx->event->returnedValues['payment'] = $payment;