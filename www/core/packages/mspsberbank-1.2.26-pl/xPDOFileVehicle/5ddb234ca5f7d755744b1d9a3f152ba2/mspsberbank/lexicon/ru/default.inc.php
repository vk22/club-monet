<?php

$_lang['mspsberbank_order_description'] = 'Оплата заказа [[+num]]';

$_lang['setting_ms2_payment_sbrbnk_url'] = 'Адрес для запросов';
$_lang['setting_ms2_payment_sbrbnk_url_desc'] = 'Адрес для отправки запросов на удалённый сервис Сбербанка';

$_lang['setting_ms2_payment_sbrbnk_login'] = 'Логин Сбербанка';
$_lang['setting_ms2_payment_sbrbnk_login_desc'] = 'Логин в системе Сбербанка.';

$_lang['setting_ms2_payment_sbrbnk_pass'] = 'Пароль Сбербанка';
$_lang['setting_ms2_payment_sbrbnk_pass_desc'] = 'Пароль в системе Сбербанка.';
/*
$_lang['setting_ms2_payment_sbrbnk_pass2'] = 'Пароль №2';
$_lang['setting_ms2_payment_sbrbnk_pass2_desc'] = 'Используется интерфейсом оповещения о платеже, XML-интерфейсами.';
*/
$_lang['setting_ms2_payment_sbrbnk_currency'] = 'Валюта платежа';
$_lang['setting_ms2_payment_sbrbnk_currency_desc'] = 'Предлагаемая валюта платежа. ';

$_lang['setting_ms2_payment_sbrbnk_culture'] = 'Язык Сбербанка';
$_lang['setting_ms2_payment_sbrbnk_culture_desc'] = 'Укажите код языка, на котором показывать сайт Сбербанка при оплате.';

$_lang['setting_ms2_payment_sbrbnk_success_id'] = 'Страница успешной оплаты Сбербанка';
$_lang['setting_ms2_payment_sbrbnk_success_id_desc'] = 'Пользователь будет отправлен на эту страницу после завершения оплаты. Рекомендуется указать id страницы с корзиной, для вывода заказа.';

$_lang['setting_ms2_payment_sbrbnk_failure_id'] = 'Страница отказа от оплаты Сбербанка';
$_lang['setting_ms2_payment_sbrbnk_failure_id_desc'] = 'Пользователь будет отправлен на эту страницу при неудачной оплате. Рекомендуется указать id страницы с корзиной, для вывода заказа';

$_lang['setting_ms2_payment_sbrbnk_timeout'] = 'Время жизни ссылки на оплату';
$_lang['setting_ms2_payment_sbrbnk_timeout_desc'] = 'Количество секунд, в течение которых пользователь может оплатить заказ';

$_lang['setting_ms2_payment_sbrbnk_tax_type'] = 'Ставка НДС';
$_lang['setting_ms2_payment_sbrbnk_tax_type_desc'] = '<b>0</b> (без НДС), <b>1</b> (по ставке 0%), <b>2</b> (по ставке 10%), <b>3</b> (по ставке 18%), <b>4</b> (по расчётной ставке 10/110), <b>5</b> (по расчётной ставке 18/118)';

$_lang['setting_ms2_payment_sbrbnk_paid_status'] = 'Статус «Оплачен»';
$_lang['setting_ms2_payment_sbrbnk_paid_status_desc'] = 'ID статуса, который должен быть проставлен у оплаченного заказа';

$_lang['setting_ms2_payment_sbrbnk_PreAuth'] = 'Использовать двухстадийную оплату';
$_lang['setting_ms2_payment_sbrbnk_PreAuth_desc'] = 'Вы должны будете подтверждать каждую оплату в личном кабинете Сбербанка';

$_lang['setting_ms2_payment_sbrbnk_return_host'] = 'Адрес сайта для возврата';
$_lang['setting_ms2_payment_sbrbnk_return_host_desc'] = 'Реальный адрес сайта, куда Сбербанк вернёт пользователя';

$_lang['setting_ms2_payment_sbrbnk_ofd.payment_method'] = 'Признак способа оплаты';
$_lang['setting_ms2_payment_sbrbnk_ofd.payment_method_desc'] = 'Численное обозначение способа оплаты из <a href="https://securepayments.sberbank.ru/wiki/doku.php/integration:api:rest:requests:register_cart#itemattributes" target="_blank">API Сбербанка</a>';

$_lang['setting_ms2_payment_sbrbnk_ofd.payment_object'] = 'Предмет расчета';
$_lang['setting_ms2_payment_sbrbnk_ofd.payment_object_desc'] = 'Численное обозначение предмета рассчёта из <a href="https://securepayments.sberbank.ru/wiki/doku.php/integration:api:rest:requests:register_cart#itemattributes" target="_blank">API Сбербанка</a>';

$_lang['setting_ms2_payment_sbrbnk_ofd.payment_delivery_object'] = 'Предмет расчета для доставки';
$_lang['setting_ms2_payment_sbrbnk_ofd.payment_delivery_object_desc'] = 'Численное обозначение предмета рассчёта из <a href="https://securepayments.sberbank.ru/wiki/doku.php/integration:api:rest:requests:register_cart#itemattributes" target="_blank">API Сбербанка</a> для доставки';

$_lang['setting_ms2_payment_sbrbnk_ofd.use_payment_delivery_object'] = 'Использовать отдельный предмет расчета для доставки';
$_lang['setting_ms2_payment_sbrbnk_ofd.use_payment_delivery_object_desc'] = 'Отметьте, чтобы передавать доставку в ОФД как услугу';
