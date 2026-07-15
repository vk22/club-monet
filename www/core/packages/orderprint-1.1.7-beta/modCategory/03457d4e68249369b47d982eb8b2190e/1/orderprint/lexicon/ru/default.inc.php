<?php

include_once 'setting.inc.php';
$_lang['orderprint_caption'] = 'Печать документов';
$_lang['orderprint_menu_desc'] = 'Печать документов';

/*заголовки вкладок компонента*/
$_lang['orderprint_setting_caption'] = 'Параметры';
$_lang['orderprint_document_caption'] = 'Документы';
$_lang['orderprint_order_caption'] = 'Заказы';

/*Таб настройки*/
$_lang['orderprint_settings_desc'] = 'Параметры';
$_lang['orderprint_setting_create'] = 'Добавить параметр';
$_lang['orderprint_setting_remove'] = 'Удалить параметр';
$_lang['orderprint_setting_update'] = 'Изменить параметр';
$_lang['orderprint_setting_remove_confirm'] = 'Вы уверены что хотите удалить этот параметр?';
$_lang['orderprint_setting_caption_name'] = 'Ключ';
$_lang['orderprint_setting_caption_value'] = 'Значение';
$_lang['orderprint_setting_caption_description'] = 'Описание';
$_lang['orderprint_setting_err_ae'] = 'Параметр с таким ключем уже существует.';
$_lang['orderprint_setting_err_incorect_name'] = 'Не корректный ключ параметра.';
$_lang['orderprint_setting_err_ud'] = 'Этот параметр используется компонентом и его нельзя удалить.';

/*Таб документы*/
$_lang['orderprint_document_desc'] = 'Документы';
$_lang['orderprint_document_create'] = 'Создать новый документ';
$_lang['orderprint_document_remove'] = 'Удалить документ';
$_lang['orderprint_document_update'] = 'Изменить документ';
$_lang['orderprint_document_remove_confirm'] = 'Вы уверены что хотите удалить этот документ?';
$_lang['orderprint_document_caption_name'] = 'Название';
$_lang['orderprint_document_caption_description'] = 'Описание';
$_lang['orderprint_document_caption_chunk1'] = 'Основной шаблон';
$_lang['orderprint_document_caption_chunk2'] = 'Шаблон строки таблицы товаров';
$_lang['orderprint_document_caption_available_for_front'] = 'Доступен для пользователей';
$_lang['orderprint_document_err_ae'] = 'Документ с таким названием уже существует.';
$_lang['orderprint_document_err_incorect_name'] = 'Недопустимое название документа.';
$_lang['orderprint_document_caption_orientation'] = 'Альбомная ориентация.';
$_lang['orderprint_document_caption_margins'] = 'Отступы.';


/*Таб заказы*/
$_lang['orderprint_orders_ms2_desc'] = 'Заказы <strong>Shopkeeper</strong>';
$_lang['orderprint_orders_shk_desc'] = 'Заказы <strong>Minishop2</strong>';
$_lang['orderprint_order_search'] = 'Искать по ID';
$_lang['orderprint_order_caption_number'] = 'ID';
$_lang['orderprint_order_caption_date'] = 'Дата';
$_lang['orderprint_order_caption_buyer'] = 'Покупатель';
$_lang['orderprint_order_caption_summ'] = 'Сумма';
$_lang['orderprint_order_caption_status'] = 'Статус';
$_lang['orderprint_order_err_type_empty'] = 'Не указан тип используемого компонента магазина (проверьте настройки системы)';
$_lang['orderprint_order_err_type_incorrect'] = 'Тип используемого компонента магазина указан не верно (проверьте настройки системы)';
$_lang['orderprint_user_not_defined'] = 'Не определен';
$_lang['orderprint_status_not_defined'] = 'Не определен';

$_lang['bdlistings.update'] = 'swegsdg';
$_lang['bdlistings.target'] = 'sdgsdg';
$_lang['orderprint_unexpected_error'] = 'Ой! Непредвиденный сбой.';
$_lang['orderprint_access_deined'] = 'У Вас нет доступа к данным об этом заказе!';
$_lang['orderprint_order_not_found'] = 'Указанный заказ не найден.';
$_lang['orderprint_bad_request'] = 'Не корректный запрос!';
$_lang['orderprint_document_not_found'] = 'Не найден документ!';

/*Форматирование суммы*/
$_lang['orderprint_orders_ms2_desc'] = 'ноль';
$_lang['orderprint_count_units_masculine'] = ',один,два,три,четыре,пять,шесть,семь,восемь,девять';
$_lang['orderprint_count_units_feminine'] = ',одна,две,три,четыре,пять,шесть,семь,восемь,девять';
$_lang['orderprint_count_20'] = 'десять,одиннадцать,двенадцать,тринадцать,четырнадцать ,пятнадцать,шестнадцать,семнадцать,восемнадцать,девятнадцать';
$_lang['orderprint_count_dozens'] = ',десять,двадцать,тридцать,сорок,пятьдесят,шестьдесят,семьдесят,восемьдесят,девяносто';
$_lang['orderprint_count_hundreds'] = ',сто,двести,триста,четыреста,пятьсот,шестьсот,семьсот,восемьсот,девятьсот';
$_lang['orderprint_money_penny'] = 'копейка,копейки,копеек,1';
$_lang['orderprint_money_base'] = 'рубль,рубля,рублей,0';
$_lang['orderprint_money_thousands'] = 'тысяча,тысячи,тысяч,1';
$_lang['orderprint_money_millions'] = 'миллион,миллиона,миллионов,0';
$_lang['orderprint_money_milliards'] = 'миллиард,милиарда,миллиардов,0';