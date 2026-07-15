<?php

$_lang['mspsberbank_order_description'] = 'Payment for order [[+num]]';

$_lang['setting_ms2_payment_sbrbnk_url'] = 'Api url';
$_lang['setting_ms2_payment_sbrbnk_url_desc'] = 'Address to send requests to the remote serviceSberbank';

$_lang['setting_ms2_payment_sbrbnk_login'] = 'Sberbank Login';
$_lang['setting_ms2_payment_sbrbnk_shopid_desc'] = 'Login in Sberbank system.';

$_lang['setting_ms2_payment_sbrbnk_pass'] = 'Sberbank Password';
$_lang['setting_ms2_payment_sbrbnk_pass_desc'] = 'Password in Sberbank system.';
/*
$_lang['setting_ms2_payment_sbrbnk_pass2'] = 'Password #2';
$_lang['setting_ms2_payment_sbrbnk_pass2_desc'] = 'Used for the interface of the payment notification.';
*/
$_lang['setting_ms2_payment_sbrbnk_currency'] = 'Payment currency';
$_lang['setting_ms2_payment_sbrbnk_currency_desc'] = 'The proposed payment currency. ';

$_lang['setting_ms2_payment_sbrbnk_culture'] = 'Language of Sberbank';
$_lang['setting_ms2_payment_sbrbnk_culture_desc'] = 'Specify the language code Sberbank site.';

$_lang['setting_ms2_payment_sbrbnk_success_id'] = 'Sberbank successful page id';
$_lang['setting_ms2_payment_sbrbnk_success_id_desc'] = 'The customer will be sent to this page after the completion of the payment. It is recommended to specify the id of the page with the shopping cart to order output.';

$_lang['setting_ms2_payment_sbrbnk_failure_id'] = 'Sberbank failure page id';
$_lang['setting_ms2_payment_sbrbnk_failure_id_desc'] = 'The customer will be sent to this page if something went wrong. It is recommended to specify the id of the page with the shopping cart to order output.';

$_lang['setting_ms2_payment_sbrbnk_timeout'] = 'Timeout for payment link';
$_lang['setting_ms2_payment_sbrbnk_timeout_desc'] = 'The payment link will be live for the specified number of seconds';

$_lang['setting_ms2_payment_sbrbnk_tax_type'] = 'VAT rate';
$_lang['setting_ms2_payment_sbrbnk_tax_type_desc'] = '<b>0</b> (without VAT), <b>1</b> (VAT 0%), <b>2</b> (VAT 10%), <b>3</b> (VAT 18%), <b>4</b> (VAT 10/110), <b>5</b> (VAT 18/118)';

$_lang['setting_ms2_payment_sbrbnk_paid_status'] = 'Paid status';
$_lang['setting_ms2_payment_sbrbnk_paid_status_desc'] = 'ID of status which should be marked for paid order';

$_lang['setting_ms2_payment_sbrbnk_PreAuth'] = 'Use pre auth';
$_lang['setting_ms2_payment_sbrbnk_PreAuth_desc'] = 'You should accept every payment in Sberbank account';

$_lang['setting_ms2_payment_sbrbnk_return_host'] = 'Return host';
$_lang['setting_ms2_payment_sbrbnk_return_host_desc'] = 'Real website url for returning from Sberbank portal';

$_lang['setting_ms2_payment_sbrbnk_ofd.payment_method'] = 'Payment method';
$_lang['setting_ms2_payment_sbrbnk_ofd.payment_method_desc'] = 'ID of payment method from <a href="https://securepayments.sberbank.ru/wiki/doku.php/integration:api:rest:requests:register_cart#itemattributes" target="_blank">Sberbank API</a>';

$_lang['setting_ms2_payment_sbrbnk_ofd.payment_object'] = 'Payment object';
$_lang['setting_ms2_payment_sbrbnk_ofd.payment_object_desc'] = 'ID of payment object from <a href="https://securepayments.sberbank.ru/wiki/doku.php/integration:api:rest:requests:register_cart#itemattributes" target="_blank">Sberbank API</a>';

$_lang['setting_ms2_payment_sbrbnk_ofd.payment_delivery_object'] = 'Payment object for delivery';
$_lang['setting_ms2_payment_sbrbnk_ofd.payment_delivery_object_desc'] = 'ID of payment object from <a href="https://securepayments.sberbank.ru/wiki/doku.php/integration:api:rest:requests:register_cart#itemattributes" target="_blank">Sberbank API</a> for delivery';

$_lang['setting_ms2_payment_sbrbnk_ofd.use_payment_delivery_object'] = 'Use separate payment object for delivery';
$_lang['setting_ms2_payment_sbrbnk_ofd.use_payment_delivery_object_desc'] = 'Check for use separate payment object for delivery';

$_lang['setting_ms2_payment_sbrbnk_debug'] = 'Log requests';
$_lang['setting_ms2_payment_sbrbnk_debug_desc'] = 'Logging requests into site error log';
