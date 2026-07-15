<style>
th {
	background-color: #555;
	color: #fff;
	border: 1px #000 solid;
}
</style>
<table border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td>
      <span style="font-size: 18px; font-weight:bold;">Наряд на доставку [[+num]] от [[+print_date]]</span>
    </td>
  </tr>
  <tr>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style="width: 100px;">
      <span style="font-size: 12px;">Распечатано:</span>
    </td>
    <td style="width: 500px;">
      <span style="font-size: 12px; font-weight:bold;">[[+manager]] [[+print_date]]</span>
    </td> 
  </tr>
  <tr>
    <td></td> 
  </tr>
  <tr>
    <td style="width:100%;"><hr></td> 
  </tr>
  <tr>
    <td style="width: 100px;">
      <span style="font-size: 12px;">Поставщик:</span>
    </td>
    <td style="width: 500px;">
      <span style="font-size: 12px; font-weight:bold;">[[+settings.company:isnot=``:then=`[[+settings.company]]`:else=`[[++site_name]]`]]</span>
    </td> 
  </tr>
  <tr>
    <td>&nbsp;</td> 
  </tr>
  <tr>
    <td style="width: 100px;">
      <span style="font-size: 12px;">Получатель:</span>
    </td>
    <td style="width: 500px;">
      <span style="font-size: 12px; font-weight:bold;">[[+user.fullname]]</span>
    </td> 
  </tr>
  <tr>
    <td style="width: 100px;">
      <span style="font-size: 12px;">Адрес доставки:</span>
    </td>
    <td style="width: 500px;">
      <span style="font-size: 12px;">[[+address.street]]
					[[+address.building:notempty=`д.[[+address.building]]`]]
					[[+address.room:notempty=`/[[+address.room]]`]]
					[[+address.city:notempty=`[[+address.city]]`]]
					[[+address.region:notempty=`[[+address.region]]`]]
					[[+address.index:notempty=`[[+address.index]]`]]
					[[+user.country]]</span>
    </td> 
  </tr>
  <tr>
    <td style="width: 100px;">
      <span style="font-size: 12px;">Курьер:</span>
    </td>
    <td style="width: 500px;">
      <span style="font-size: 12px;">__________________________</span>
    </td> 
  </tr>
  <tr>
    <td>&nbsp;</td>
  </tr>
</table>
<table cellpadding="3" border="1" cellspacing="0" style="border-collapse:collapse" style="font-size: 10px;">
  <tr style="text-align:center;">
    <th style="width:30px;">
      <p class="s2">№</p>
    </th>
    <th style="width:110px;">
      <p class="s2">Артикул</p>
    </th>
    <th style="width:320px;">
      <p class="s2">Товар</p>
    </th>
    <th style="width:80px;">
      <p class="s2">Кол-во штук</p>
    </th>
    <th style="width:60px;">
      <p class="s2">Ед.</p>
    </th>
    <th style="width:110px;">
      <p class="s2">Количество упаковок</p>
    </th>
  </tr>
  [[+cart]]
</table>
<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
  <tr>
    <td style="width: 100%;">
      <div style="font-size: 13px;">Всего наименований, на сумму [[+cost]] руб.</div>
    </td>
  </tr>
  <tr>
    <td style="width: 100%;"><hr></td> 
  </tr>
</table>

<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
  <tr>
    <td style="font-size: 14px; font-weight: bold;" colspan="2">Отметка об оплате (заполняет курьер)</td>
  </tr>
  <tr>
    <td colspan="2">
        <span style="font-size: 12px;">Оплату в размере<br/>_______________________________________________________________________руб._________коп. получил.<br/><br/>
        ________________/ __________/</span><br/><br/>
    </td>
  </tr>
  <tr>
    <td style="font-size: 14px; font-weight: bold;" colspan="2">Отметка о доставке (заполняет получатель)</td>
  </tr>
  <tr>
    <td colspan="2">
        <span style="font-size: 12px;">Перечисленную в данном наряде продукцию получил в указанных количествах<br/><br/>
        ________________/ __________/</span><br/><br/>
    </td> 
  </tr>
  <tr>
    <td colspan="2">
        <h3>Коментарии или замечания от клиента</h3>
        <p style="font-size: 10px; color: #777;">если у Вас есть какие либо замечания, пожелания, коментарии по поводу работы курьерской службы, пожалуйста, укажите их ниже</p>
        <br/>
        <hr/>
        <br/>
        <hr/>
        <br/>
        <hr/>
        <br/>
        <hr/>
        <br/>
        <hr/>
        <br/>
        <hr/>
        <br/>
        <hr/>
    </td>
  </tr>
</table>