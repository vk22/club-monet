<?php
/** @var modX $modx */
/** @var array $scriptProperties */
/** @var miniShop2 $miniShop2 */
$miniShop2 = $modx->getService('miniShop2');
$miniShop2->initialize($modx->context->key);
/** @var pdoFetch $pdoFetch */
if (!$modx->loadClass('pdofetch', MODX_CORE_PATH . 'components/pdotools/model/pdotools/', false, true)) {
    return false;
}
$pdoFetch = new pdoFetch($modx, $scriptProperties);
$pdoFetch->addTime('pdoTools loaded.');


echo "<pre>";
/** @var modX $modx */
/** @var array $scriptProperties */
/** @var mspyookassa $mspyookassa */
$mspyookassa = $modx->getService('mspyookassa', 'mspyookassa', MODX_CORE_PATH . 'components/mspyookassa/model/mspyookassa/');
if (!$mspyookassa) {
    return 'Could not load mspyookassa class!';
}


if ($o = $modx->getObject('mspYooKassaOrderPayment', 53)) {

    print_r($o->toArray());
}

/*
 * Array
(
    [id] => 53
    [processed] =>
    [tested] => 1
    [object] => Array
        (
            [id] => 276ffa5b-000f-5000-a000-14d267abd839
            [status] => waiting_for_capture
            [recipient] => Array
                (
                    [account_id] => 767438
                    [gateway_id] => 1807422
                )

            [amount] => Array
                (
                    [value] => 150.00
                    [currency] => RUB
                )

            [description] => Заказ #2012/2
            [payment_method] => Array
                (
                    [last4] => 1111
                    [first6] => 411111
                    [expiry_year] => 2022
                    [expiry_month] => 11
                    [card_type] => Visa
                    [issuer_country] => US
                    [type] => bank_card
                    [id] => 276ffa5b-000f-5000-a000-14d267abd839
                    [saved] =>
                    [title] => Bank card *1111
                )

            [created_at] => 2020-12-19T11:40:11+00:00
            [paid] => 1
            [refundable] =>
            [metadata] => Array
                (
                    [test] => 1
                    [msorder] => 53
                    [scid] => 1981298
                )

            [expires_at] => 2020-12-26T11:40:40+00:00
            [authorization_details] => Array
                (
                    [rrn] => 882136206865
                    [auth_code] => 204071
                )

            [transfers] => Array
                (
                )

            [test] => 1
        )

)

 */