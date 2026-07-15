<table border="0">
  <tr>
    <td width="50%">
      <h3 style="font-size:14px;">СЧЕТ-ФАКТУРА</h3>
      <p style="font-size:12px;" class="s1">Продавец: [[+settings.company:isnot=``:then=`[[+settings.company]]`:else=`[[++site_name]]`]]</p>
      <p style="font-size:12px;" class="s1">ИНН/КПП продавца: [[+settings.inn]]/[[+settings.kpp]]</p>
      <p style="font-size:12px;" class="s1">Грузоотправитель и его адрес: [[+settings.company:isnot=``:then=`[[+settings.company]]`:else=`[[++site_name]]`]], [[+settings.address]]</p>
      <p style="font-size:12px;" class="s1">Грузополучатель и его адрес: [[+address.receiver:default=`[[+user.fullname]]`]], [[+address.street]]
					[[+address.building:notempty=`д.[[+address.building]]`]]
					[[+address.room:notempty=`/[[+address.room]]`]]
					[[+address.city:notempty=`[[+address.city]]`]]
					[[+address.region:notempty=`[[+address.region]]`]]
					[[+address.index:notempty=`[[+address.index]]`]]
					[[+user.country]]</p>
      <p style="font-size:12px;" class="s1">К платежно-расчетному документу № [[+num]] от [[+createdon]]</p>
      <p style="font-size:12px;" class="s1">Покупатель: [[+address.receiver:default=`[[+user.fullname]]`]]</p>
      <p style="font-size:12px;" class="s1">Адрес: [[+address.building:notempty=`д.[[+address.building]]`]]
					[[+address.room:notempty=`/[[+address.room]]`]]
					[[+address.city:notempty=`[[+address.city]]`]]
					[[+address.region:notempty=`[[+address.region]]`]]
					[[+address.index:notempty=`[[+address.index]]`]]
					[[+user.country]]</p>
    </td>
    <td width="50%" align="right">
      <div style="font-size: 10px; text-align:right;">Приложение №1<br>к Правилам ведения журналов учета полученных и выставленных счетов-фактур,<br> книг покупок и книг продаж при расчетах по налогу на добавленную стоимость,<br>утвержденным постановлением Правительства Российской Федерации от 2 декабря 2000 г. N 914<br> (в редакции постановлений Правительства Российской Федерации от 15 марта 2001 г. N 189,<br>от 27 июля 2002 г. N 575, от 16 февраля 2004 г. N 84, от 11 мая 2006 г. N 283, от 26 мая 2009 г. N 451)</div>
    </td>
  </tr>
  <tr><td>&nbsp;</td></tr>
</table>
<table cellpadding="3" border="1" cellspacing="0" style="border-collapse:collapse" style="font-size: 10px;">
  <tr style="text-align:center;">
    <td>
      <p class="s2">Наименование товара, имущественного права</p>
    </td>
    <td>
      <p class="s2">Единица изме- рения</p>
    </td>
    <td>
      <p class="s2">Коли- чество</p>
    </td>
    <td>
      <p class="s2">Цена (тариф) за единицу</p>
      <p class="s2">измерения</p>
    </td>
    <td>
      <p class="s2">Стоимость товаров (работ, услуг),</p>
      <p class="s2">имущественных прав, всего без налога</p>
    </td>
    <td>
      <p class="s2">В том числе акциз</p>
    </td>
    <td>
      <p class="s2">Налоговая ставка</p>
    </td>
    <td>
      <p class="s2">Сумма налога</p>
    </td>
    <td>
      <p class="s2">Стоимость товаров (работ, услуг),</p>
      <p class="s2">имущественных прав, всего с учетом</p>
      <p class="s2">налога</p>
    </td>
    <td>
      <p class="s2">Страна происхож- дения</p>
    </td>
    <td>
      <p class="s2">Номер таможенной декларации</p>
    </td>
  </tr>
  <tr>
    <td>
      <p class="s2">1</p>
    </td>
    <td>
      <p class="s2">2</p>
    </td>
    <td>
      <p class="s2">3</p>
    </td>
    <td>
      <p class="s2">4</p>
    </td>
    <td>
      <p class="s2">5</p>
    </td>
    <td>
      <p class="s2">6</p>
    </td>
    <td>
      <p class="s2">7</p>
    </td>
    <td>
      <p class="s2">8</p>
    </td>
    <td>
      <p class="s2">9</p>
    </td>
    <td>
      <p class="s2">10</p>
    </td>
    <td>
      <p class="s2">11</p>
    </td>
  </tr>
  [[+cart]]
  <tr>
    <td colspan="7">
      <p class="s3">Всего к оплате</p>
    </td>
    <td>
      <p class="s2">[[+cost]]</p>
    </td>
    <td>
      <p class="s2"></p>
    </td>
  </tr>
</table>
<table cellpadding="10" border="0" style="font-size: 10px; padding-top:10px;">
  <tr>
    <td>Руководитель организации</td>
    <td style="text-align:center;">&nbsp;<div style="border-top: 1px solid black;">(подпись)</div></td>
    <td style="text-align:center;">[[+settings.director]]<div style="border-top: 1px solid black;">(ф.и.о)</div></td>
    <td style="text-align:center;">Главный бухгалтер</td>
    <td style="text-align:center;">&nbsp;<div style="border-top: 1px solid black;">(подпись)</div></td>
    <td style="text-align:center;">[[+settings.booker]]<div style="border-top: 1px solid black;">(ф.и.о)</div></td>
  </tr>
  <tr>
    <td>Индивидуальный предприниматель</td>
    <td style="text-align:center;">&nbsp;<div style="border-top: 1px solid black;">(подпись)</div></td>
    <td style="text-align:center;">&nbsp;<div style="border-top: 1px solid black;">(ф.и.о)</div></td>
    <td colspan="3" style="text-align:center;">&nbsp;<div style="border-top: 1px solid black;">(реквизиты свидетельства о государственной регистрации<br>индивидуального предпринимателя)</div></td>
  </tr>
  <tr>
    <td colspan="6">ПРИМЕЧАНИЕ. Первый экземпляр - покупателю, второй экземпляр - продавцу</td>
  </tr>
</table>