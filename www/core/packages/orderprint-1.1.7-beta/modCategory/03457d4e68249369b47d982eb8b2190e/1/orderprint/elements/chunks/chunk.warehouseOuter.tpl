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
      <span style="font-size: 18px; font-weight:bold;">Заявка на склад [[+num]] от [[+print_date]]</span>
    </td>
  </tr>
  <tr>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style="width: 100px;">
      <span style="font-size: 12px;">Автор:</span>
    </td>
    <td style="width: 500px;">
      <span style="font-size: 12px; font-weight:bold;">[[+manager]]</span>
    </td> 
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
      <span style="font-size: 12px;">Покупатель:</span>
    </td>
    <td style="width: 500px;">
      <span style="font-size: 12px; font-weight:bold;">[[+user.fullname]]</span>
    </td> 
  </tr>
  <tr>
    <td style="width: 100px;">
      <span style="font-size: 12px;">Факт.адрес:</span>
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
    <td style="width: 100px;">
      <div style="font-size: 13px; font-weight:bold;">Итого:</div>
    </td>
    <td>
      <div style="font-size: 13px; font-weight:bold;">[[+cost]]</div>
    </td> 
  </tr>
  <tr>
    <td style="width: 100%;">
      <div style="font-size: 13px;">Всего наименований, на сумму [[+cost]] руб.</div>
    </td>
  </tr>
  <!--<tr>
    <td style="width: 100%;">
      <div style="font-size: 13px; font-weight:bold;">Одна тысяча честриста сорок рублей</div>
    </td>
  </tr>-->
  <tr>
    <td style="width: 100%;"><hr></td> 
  </tr>
  <tr>
    <td style="width: 100%;">
    <span style="font-size: 13px; font-weight:bold;">Зав. складом:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size: 12px; font-weight:normal;">______________________________/ __________/</span>
    </td> 
  </tr>
  <tr>
    <td style="width: 100%;">
    <span style="font-size: 13px; font-weight:bold;">Комлпектовщик:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size: 12px; font-weight:normal;">______________________________/ __________/</span>
    </td> 
  </tr>
  <tr>
    <td style="width: 100%;">
    </td> 
  </tr>
  <tr>
    <td style="width: 100%;">
    <span style="font-size: 13px; font-weight:bold;">Курьер:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size: 12px; font-weight:normal;">______________________________/ __________/</span>
    </td> 
  </tr>
</table>