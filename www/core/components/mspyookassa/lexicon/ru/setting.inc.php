<?php


$_lang['area_mspyookassa_main'] = 'Основные';

$_lang['setting_mspyookassa_payment_shop_id'] = 'Витрина магазина';
$_lang['setting_mspyookassa_payment_shop_id_desc'] = 'Идентификатор витрины магазина в системе Яндекс.Касса';

$_lang['setting_mspyookassa_payment_shop_password'] = 'Секретный ключ магазина';
$_lang['setting_mspyookassa_payment_shop_password_desc'] = 'Секретный ключ магазина в системе Яндекс.Касса';

$_lang['setting_mspyookassa_payment_shop_currency'] = 'Валюта магазина';
$_lang['setting_mspyookassa_payment_shop_currency_desc'] = 'Валюта магазина в системе Яндекс.Касса. По умолчанию "RUB"';

$_lang['setting_mspyookassa_payment_receipt'] = 'Обрабатывать данные для чека';
$_lang['setting_mspyookassa_payment_receipt_desc'] = 'Отправлять в Яндекс.Кассу данные для чеков (54-ФЗ)';

$_lang['setting_mspyookassa_payment_receipt_with_delivery'] = 'Включать в чек информацию о доставке';
$_lang['setting_mspyookassa_payment_receipt_with_delivery_desc'] = 'Если настройка неактивна стоимость доставки будет распределена по остальным товарам';

$_lang['setting_mspyookassa_payment_vat'] = 'Код ставки НДС';
$_lang['setting_mspyookassa_payment_vat_desc'] = "Код ставки НДС. Возможные значения — цифра от 1 до 6. <br>" .
    "1 — без НДС;<br>
2 — НДС по ставке 0%;<br>
3 — НДС чека по ставке 10%;<br>
4 — НДС чека по ставке 18%;<br>
5 — НДС чека по расчетной ставке 10/110;<br>
6 — НДС чека по расчетной ставке 18/118.";

$_lang['setting_mspyookassa_payment_tax_system'] = 'Код системы налогообложения';
$_lang['setting_mspyookassa_payment_tax_system_desc'] = "Код системы налогообложения. Возможные значения — цифра от 1 до 6.<br>" .
    "1 — общая СН;<br>
2 — упрощенная СН (доходы);<br>
3 — упрощенная СН (доходы минус расходы);<br>
4 — единый налог на вмененный доход;<br>
5 — единый сельскохозяйственный налог;<br>
6 — патентная СН.<br>";

$_lang['setting_mspyookassa_payment_return_id'] = 'Id страницы возврата';
$_lang['setting_mspyookassa_payment_return_id_desc'] = 'Id страницы, на который будет вести ссылка Вернуться в магазин';

$_lang['setting_mspyookassa_status_hold'] = 'Статус подтверждения';
$_lang['setting_mspyookassa_status_hold_desc'] = 'Id статуса заказа при котором необходимо подтвердить / отменить оплату.<br>
 При оплате банковской картой у вас есть 7 дней на подтверждение платежа, при оплате другими способами 2-6 часа';

$_lang['setting_mspyookassa_payment_show_log'] = 'Показать лог';
$_lang['setting_mspyookassa_payment_show_log_desc'] = 'Показать лог работы';


$_lang['setting_mspyookassa_payment_subject'] = 'Признак предмета расчета';
$_lang['setting_mspyookassa_payment_subject_desc'] = "Признак предмета расчета. Возможные значения: <br>" . "
commodity — Товар;<br>
excise — Подакцизный товар;<br>
job	— Работа;<br>
service	— Услуга;<br>
gambling_bet — Ставка в азартной игре;<br>
gambling_prize	— Выигрыш в азартной игре;<br>
lottery	— Лотерейный билет;<br>
lottery_prize — Выигрыш в лотерею;<br>
intellectual_activity — Результаты интеллектуальной деятельности;<br>
payment	— Платеж;<br>
agent_commission — Агентское вознаграждение;<br>
composite — Несколько вариантов;<br>
another	— Другое;<br>
";


$_lang['setting_mspyookassa_payment_mode'] = 'Признак способа расчета';
$_lang['setting_mspyookassa_payment_mode_desc'] = "Признак способа расчета. Возможные значения: <br>" . "
full_prepayment	— Полная предоплата;<br>
partial_prepayment	— Частичная предоплата;<br>
advance	— Аванс;<br>
full_payment — Полный расчет;<br>
partial_payment	— Частичный расчет и кредит;<br>
credit — Кредит;<br>
credit_payment	— Выплата по кредиту;<br>
";

$_lang['setting_mspyookassa_delivery_payment_mode'] = 'Признак способа расчета доставки';
$_lang['setting_mspyookassa_delivery_payment_mode_desc'] = "Признак способа расчета доставки. Возможные значения: <br>" . "
full_prepayment	— Полная предоплата;<br>
partial_prepayment	— Частичная предоплата;<br>
advance	— Аванс;<br>
full_payment — Полный расчет;<br>
partial_payment	— Частичный расчет и кредит;<br>
credit — Кредит;<br>
credit_payment	— Выплата по кредиту;<br>
";


$_lang['setting_mspyookassa_delivery_payment_subject'] = 'Признак предмета расчета доставки';
$_lang['setting_mspyookassa_delivery_payment_subject_desc'] = "Признак предмета расчета доставки. Возможные значения: <br>" . "
commodity — Товар;<br>
excise — Подакцизный товар;<br>
job	— Работа;<br>
service	— Услуга;<br>
gambling_bet — Ставка в азартной игре;<br>
gambling_prize	— Выигрыш в азартной игре;<br>
lottery	— Лотерейный билет;<br>
lottery_prize — Выигрыш в лотерею;<br>
intellectual_activity — Результаты интеллектуальной деятельности;<br>
payment	— Платеж;<br>
agent_commission — Агентское вознаграждение;<br>
composite — Несколько вариантов;<br>
another	— Другое;<br>
";
