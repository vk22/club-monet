<?php return array (
  'bbf73e67db9605dd10d0d8c2f1a73155' => 
  array (
    'criteria' => 
    array (
      'name' => 'orderprint',
    ),
    'object' => 
    array (
      'name' => 'orderprint',
      'path' => '{core_path}components/orderprint/',
      'assets_path' => '',
    ),
  ),
  '5e29f1a281aa0b710577758ca233184f' => 
  array (
    'criteria' => 
    array (
      'key' => 'opr_type',
    ),
    'object' => 
    array (
      'key' => 'opr_type',
      'value' => 'ms2',
      'xtype' => 'textfield',
      'namespace' => 'orderprint',
      'area' => 'Магазин (сипользуемый компонент)',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  'bfa13d9017062f6d6ceaf5689251c8af' => 
  array (
    'criteria' => 
    array (
      'name' => 'orderPrintPolicy',
    ),
    'object' => 
    array (
      'id' => 17,
      'name' => 'orderPrintPolicy',
      'description' => 'A policy for print all documents for all orders.',
      'parent' => 0,
      'template' => 10,
      'class' => '',
      'data' => '{"orderprint_manage":true,"formit":true,"formit_encryptions":false}',
      'lexicon' => 'orderprint:permissions',
    ),
  ),
  '58c80788bd2e56de5b0ec75dea9098dc' => 
  array (
    'criteria' => 
    array (
      'name' => 'orderPrintPolicyTemplate',
    ),
    'object' => 
    array (
      'id' => 10,
      'template_group' => 1,
      'name' => 'orderPrintPolicyTemplate',
      'description' => 'A policy for orderPrint managers.',
      'lexicon' => 'orderprint:permissions',
    ),
  ),
  '27ca49d8be8f6486300e1c181a2de1de' => 
  array (
    'criteria' => 
    array (
      'template' => 10,
      'name' => 'orderprint_manage',
    ),
    'object' => 
    array (
      'id' => 235,
      'template' => 10,
      'name' => 'orderprint_manage',
      'description' => 'orderprint_manage',
      'value' => 1,
    ),
  ),
  '4a296a88412eb6888eba255a640ac4b5' => 
  array (
    'criteria' => 
    array (
      'namespace' => 'orderprint',
      'controller' => 'index',
    ),
    'object' => 
    array (
      'id' => 12,
      'namespace' => 'orderprint',
      'controller' => 'index',
      'haslayout' => 1,
      'lang_topics' => 'orderprint:default',
      'assets' => '',
      'help_url' => '',
    ),
  ),
  '5e398aed6ceb1d0ad922a1b7f242283d' => 
  array (
    'criteria' => 
    array (
      'text' => 'orderprint_caption',
    ),
    'object' => 
    array (
      'text' => 'orderprint_caption',
      'parent' => 'components',
      'action' => '12',
      'description' => 'orderprint_menu_desc',
      'icon' => 'images/icons/plugin.gif',
      'menuindex' => 0,
      'params' => '',
      'handler' => '',
      'permissions' => '',
      'namespace' => 'core',
    ),
  ),
  '1a68a01afd94873d84d2b7163d6a1a4e' => 
  array (
    'criteria' => 
    array (
      'category' => 'OrderPrint',
    ),
    'object' => 
    array (
      'id' => 14,
      'parent' => 0,
      'category' => 'OrderPrint',
      'rank' => 0,
    ),
  ),
  '8ffa578e44aa1ef31303b91156c7d1ee' => 
  array (
    'criteria' => 
    array (
      'name' => 'orderPrint.courierOuter',
    ),
    'object' => 
    array (
      'id' => 70,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'orderPrint.courierOuter',
      'description' => '',
      'editor_type' => 0,
      'category' => 14,
      'cache_type' => 0,
      'snippet' => '<style>
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
</table>',
      'locked' => 0,
      'properties' => NULL,
      'static' => 0,
      'static_file' => 'core/components/orderprint/elements/chunks/chunk.courierOuter.tpl',
      'content' => '<style>
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
</table>',
    ),
  ),
  '5473fc2472aba7c218ed59dba95c31c4' => 
  array (
    'criteria' => 
    array (
      'name' => 'orderPrint.courierRow',
    ),
    'object' => 
    array (
      'id' => 71,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'orderPrint.courierRow',
      'description' => '',
      'editor_type' => 0,
      'category' => 14,
      'cache_type' => 0,
      'snippet' => '<tr>
  <td>[[+idx]]</td>
  <td>[[+article]]</td>
  <td>[[+pagetitle]]</td>
  <td>[[+count]]</td>
  <td>шт.</td>
  <td>---</td>
</tr>',
      'locked' => 0,
      'properties' => NULL,
      'static' => 0,
      'static_file' => 'core/components/orderprint/elements/chunks/chunk.courierRow.tpl',
      'content' => '<tr>
  <td>[[+idx]]</td>
  <td>[[+article]]</td>
  <td>[[+pagetitle]]</td>
  <td>[[+count]]</td>
  <td>шт.</td>
  <td>---</td>
</tr>',
    ),
  ),
  'f95aad3584482aa35dd6c8a1fe06a09c' => 
  array (
    'criteria' => 
    array (
      'name' => 'orderPrint.orderOuter',
    ),
    'object' => 
    array (
      'id' => 72,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'orderPrint.orderOuter',
      'description' => '',
      'editor_type' => 0,
      'category' => 14,
      'cache_type' => 0,
      'snippet' => '<style>

body {
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    border: 1px #efefef solid;
    font-size: 11pt;
}
.client_info {
	float: left;
}
.inc_info {
	float: right;
	width: 30%;
}
.email_fild {
	color: #999;
}
* {
	font-size: 12px;
}
.cart td {
border: 1px #000 solid;
}
.cart th {
border: 1px #000 solid;
}
</style>
<p></p>
<p>[[+settings.company]]</p>
<p></p>
<p>[[+settings.address]]</p>
<table width="100%">

    <tr>
        <td colspan="2">
            <div style="text-align:center;  font-weight:bold;">
                <!-- Образец заполнения платежного поручения  -->                                                                                                                                           </div>
        </td>
    </tr>
</table>

<table width="100%" class="cart">
    <tr>
        <td>
            <div>ИНН [[+settings.inn]]</div>
        </td>
        <td>
            <div>КПП [[+settings.kpp]]</div>
        </td>
        <td rowspan="2" width="10%">
            <div>Сч. №</div>
        </td>
        <td rowspan="2">
            <div>[[+settings.s4et]]</div>
        </td>
    </tr>
    <tr>
        <td colspan="2">

            <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td valign="top">
                        <div>Получатель</div>
                    </td>
                </tr>
                <tr>
                    <td valign="bottom">
                        <div>[[+settings.company]]</div>
                    </td>
                </tr>
            </table>

        </td>
    </tr>
    <tr>
        <td colspan="2" rowspan="2">
            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td valign="top">
                        <div>Банк получателя </div>
                    </td>
                </tr>
                <tr>
                    <td valign="bottom">
                        <div>[[+settings.bank]] </div>
                    </td>
                </tr>
            </table>
        </td>
        <td>
            <div>БИK</div>
        </td>
        <td rowspan="2">
            <div>[[+settings.bik]]</div>
            <div>[[+settings.s4et2]]</div>
        </td>
    </tr>

    <tr>
        <td>
            <div>Сч. №</div>
        </td>
    </tr>

</table>
<br/>

<div style="font-weight: bold; font-size: 16px; padding-left:5px; text-align:center;">Счет № [[+num]] от [[+createdon]]</div>


<!--<div style="background-color:#000000; width:100%; font-size:1px; height:2px;">&nbsp;</div>-->

<table width="100%">
    <tr>
        <td style="width: 10%;">
            <div style=" padding-left:2px;">Поставщик:    </div>
        </td>
        <td>
            <div style="font-weight:normal;  padding-left:2px;">
                [[+settings.company]]            </div>
        </td>
    </tr>
    <tr>
        <td style="width: 10%;">
            <div style=" padding-left:2px;">Покупатель:    </div>
        </td>
        <td>
            <div style="font-weight:normal;  padding-left:2px;">
               [[+address.receiver:default=`[[+user.fullname]]`]]            </div>
        </td>
    </tr>
    <tr><td></td><td></td></tr>
</table>


<table class="cart">
				<tr>
	    			<th>Артикул</th>
   	 				<th>Наименование</th>
					<th>Цена за ед.</th>
					<th>Количество</th>
					<th>Итого</th>
				</tr>
				[[+cart]]
				<tr>
	    			<td colspan="3"></td>
					<td><strong>Итого:</strong></td>
					<td>[[+cart_cost]]</td>
				</tr>
				<tr>
	    			<td colspan="3"></td>
					<td><strong>НДС</strong></td>
					<td></td>
				</tr>
				<tr>
	    			<td colspan="3"></td>
					<td><strong>Всего к оплате:</strong></td>
					<td>[[+cart_cost]]</td>
				</tr>				
			</table>


<br />
<div>
Всего наименований [[+cart_count]] на сумму [[+cart_cost]] рублей.<br />
Двести двадцать два рубля 00 копеек</div>
<br /><br />
<div style="background-color:#000000; width:100%; font-size:1px; height:2px;">&nbsp;</div>
<br/>

<div>Руководитель ___________________ (Степанов А.В.)</div>
<br/>

<div>Главный бухгалтер ___________________ (Степанов А.В.)</div>
<br/>

<div style="width: 85%;text-align:center;">М.П.</div>
<br/>


<div style="width:800px;text-align:left;font-size:10px;">Счет действителен к оплате в течении трех дней.</div>
',
      'locked' => 0,
      'properties' => 'a:0:{}',
      'static' => 0,
      'static_file' => 'core/components/orderprint/elements/chunks/chunk.orderOuter.tpl',
      'content' => '<style>

body {
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    border: 1px #efefef solid;
    font-size: 11pt;
}
.client_info {
	float: left;
}
.inc_info {
	float: right;
	width: 30%;
}
.email_fild {
	color: #999;
}
* {
	font-size: 12px;
}
.cart td {
border: 1px #000 solid;
}
.cart th {
border: 1px #000 solid;
}
</style>
<p></p>
<p>[[+settings.company]]</p>
<p></p>
<p>[[+settings.address]]</p>
<table width="100%">

    <tr>
        <td colspan="2">
            <div style="text-align:center;  font-weight:bold;">
                <!-- Образец заполнения платежного поручения  -->                                                                                                                                           </div>
        </td>
    </tr>
</table>

<table width="100%" class="cart">
    <tr>
        <td>
            <div>ИНН [[+settings.inn]]</div>
        </td>
        <td>
            <div>КПП [[+settings.kpp]]</div>
        </td>
        <td rowspan="2" width="10%">
            <div>Сч. №</div>
        </td>
        <td rowspan="2">
            <div>[[+settings.s4et]]</div>
        </td>
    </tr>
    <tr>
        <td colspan="2">

            <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td valign="top">
                        <div>Получатель</div>
                    </td>
                </tr>
                <tr>
                    <td valign="bottom">
                        <div>[[+settings.company]]</div>
                    </td>
                </tr>
            </table>

        </td>
    </tr>
    <tr>
        <td colspan="2" rowspan="2">
            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td valign="top">
                        <div>Банк получателя </div>
                    </td>
                </tr>
                <tr>
                    <td valign="bottom">
                        <div>[[+settings.bank]] </div>
                    </td>
                </tr>
            </table>
        </td>
        <td>
            <div>БИK</div>
        </td>
        <td rowspan="2">
            <div>[[+settings.bik]]</div>
            <div>[[+settings.s4et2]]</div>
        </td>
    </tr>

    <tr>
        <td>
            <div>Сч. №</div>
        </td>
    </tr>

</table>
<br/>

<div style="font-weight: bold; font-size: 16px; padding-left:5px; text-align:center;">Счет № [[+num]] от [[+createdon]]</div>


<!--<div style="background-color:#000000; width:100%; font-size:1px; height:2px;">&nbsp;</div>-->

<table width="100%">
    <tr>
        <td style="width: 10%;">
            <div style=" padding-left:2px;">Поставщик:    </div>
        </td>
        <td>
            <div style="font-weight:normal;  padding-left:2px;">
                [[+settings.company]]            </div>
        </td>
    </tr>
    <tr>
        <td style="width: 10%;">
            <div style=" padding-left:2px;">Покупатель:    </div>
        </td>
        <td>
            <div style="font-weight:normal;  padding-left:2px;">
               [[+address.receiver:default=`[[+user.fullname]]`]]            </div>
        </td>
    </tr>
    <tr><td></td><td></td></tr>
</table>


<table class="cart">
				<tr>
	    			<th>Артикул</th>
   	 				<th>Наименование</th>
					<th>Цена за ед.</th>
					<th>Количество</th>
					<th>Итого</th>
				</tr>
				[[+cart]]
				<tr>
	    			<td colspan="3"></td>
					<td><strong>Итого:</strong></td>
					<td>[[+cart_cost]]</td>
				</tr>
				<tr>
	    			<td colspan="3"></td>
					<td><strong>НДС</strong></td>
					<td></td>
				</tr>
				<tr>
	    			<td colspan="3"></td>
					<td><strong>Всего к оплате:</strong></td>
					<td>[[+cart_cost]]</td>
				</tr>				
			</table>


<br />
<div>
Всего наименований [[+cart_count]] на сумму [[+cart_cost]] рублей.<br />
Двести двадцать два рубля 00 копеек</div>
<br /><br />
<div style="background-color:#000000; width:100%; font-size:1px; height:2px;">&nbsp;</div>
<br/>

<div>Руководитель ___________________ (Степанов А.В.)</div>
<br/>

<div>Главный бухгалтер ___________________ (Степанов А.В.)</div>
<br/>

<div style="width: 85%;text-align:center;">М.П.</div>
<br/>


<div style="width:800px;text-align:left;font-size:10px;">Счет действителен к оплате в течении трех дней.</div>
',
    ),
  ),
  'aa4a7e5a01ab3450c5c01e6d0c3e6d10' => 
  array (
    'criteria' => 
    array (
      'name' => 'orderPrint.orderRow',
    ),
    'object' => 
    array (
      'id' => 73,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'orderPrint.orderRow',
      'description' => '',
      'editor_type' => 0,
      'category' => 14,
      'cache_type' => 0,
      'snippet' => '	<tr>
		<td>[[+article]]</td>
		<td>[[+pagetitle]]</td>
		<td>[[+price]]</td>
		<td>[[+count]]</td>
		<td>[[+cost]]</td>
	</tr>',
      'locked' => 0,
      'properties' => 'a:0:{}',
      'static' => 0,
      'static_file' => 'core/components/orderprint/elements/chunks/chunk.orderRow.tpl',
      'content' => '	<tr>
		<td>[[+article]]</td>
		<td>[[+pagetitle]]</td>
		<td>[[+price]]</td>
		<td>[[+count]]</td>
		<td>[[+cost]]</td>
	</tr>',
    ),
  ),
  '7862868fdd873d170d207e551c8691e0' => 
  array (
    'criteria' => 
    array (
      'name' => 'orderPrint.paylistOuter',
    ),
    'object' => 
    array (
      'id' => 74,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'orderPrint.paylistOuter',
      'description' => '',
      'editor_type' => 0,
      'category' => 14,
      'cache_type' => 0,
      'snippet' => '<table border="0">
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
</table>',
      'locked' => 0,
      'properties' => NULL,
      'static' => 0,
      'static_file' => 'core/components/orderprint/elements/chunks/chunk.paylistOuter.tpl',
      'content' => '<table border="0">
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
</table>',
    ),
  ),
  'a8751d0fe2512f21174648f03980ea00' => 
  array (
    'criteria' => 
    array (
      'name' => 'orderPrint.paylistRow',
    ),
    'object' => 
    array (
      'id' => 75,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'orderPrint.paylistRow',
      'description' => '',
      'editor_type' => 0,
      'category' => 14,
      'cache_type' => 0,
      'snippet' => '<tr>
    <td>
        [[+pagetitle]]
    </td>
    <td>
        шт.
    </td>
    <td>
        [[+count]]
    </td>
    <td>
        [[+price]]
    </td>
    <td>
        [[+cost]]
    </td>
    <td>
        -
    </td>
    <td>
        -
    </td>
    <td>
        -
    </td>
    <td>
        [[+cost]]
    </td>
    <td>
        -
    </td>
    <td>
        -
    </td>
</tr>',
      'locked' => 0,
      'properties' => NULL,
      'static' => 0,
      'static_file' => 'core/components/orderprint/elements/chunks/chunk.paylistRow.tpl',
      'content' => '<tr>
    <td>
        [[+pagetitle]]
    </td>
    <td>
        шт.
    </td>
    <td>
        [[+count]]
    </td>
    <td>
        [[+price]]
    </td>
    <td>
        [[+cost]]
    </td>
    <td>
        -
    </td>
    <td>
        -
    </td>
    <td>
        -
    </td>
    <td>
        [[+cost]]
    </td>
    <td>
        -
    </td>
    <td>
        -
    </td>
</tr>',
    ),
  ),
  '55c043c4630cd74f269a0a1a93913b8b' => 
  array (
    'criteria' => 
    array (
      'name' => 'orderPrint.warehouseOuter',
    ),
    'object' => 
    array (
      'id' => 76,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'orderPrint.warehouseOuter',
      'description' => '',
      'editor_type' => 0,
      'category' => 14,
      'cache_type' => 0,
      'snippet' => '<style>
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
</table>',
      'locked' => 0,
      'properties' => NULL,
      'static' => 0,
      'static_file' => 'core/components/orderprint/elements/chunks/chunk.warehouseOuter.tpl',
      'content' => '<style>
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
</table>',
    ),
  ),
  'ec087b2735f079a4ef210e95fd4d2ce8' => 
  array (
    'criteria' => 
    array (
      'name' => 'orderPrint.warehouseRow',
    ),
    'object' => 
    array (
      'id' => 77,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'orderPrint.warehouseRow',
      'description' => '',
      'editor_type' => 0,
      'category' => 14,
      'cache_type' => 0,
      'snippet' => '<tr>
  <td>[[+idx]]</td>
  <td>[[+article]]</td>
  <td>[[+pagetitle]]</td>
  <td>[[+count]]</td>
  <td>шт.</td>
  <td>---</td>
</tr>',
      'locked' => 0,
      'properties' => NULL,
      'static' => 0,
      'static_file' => 'core/components/orderprint/elements/chunks/chunk.warehouseRow.tpl',
      'content' => '<tr>
  <td>[[+idx]]</td>
  <td>[[+article]]</td>
  <td>[[+pagetitle]]</td>
  <td>[[+count]]</td>
  <td>шт.</td>
  <td>---</td>
</tr>',
    ),
  ),
  '00d2a4f75e0d1ddc69afaf096ccee6d9' => 
  array (
    'criteria' => 
    array (
      'name' => 'orderPrint.LinkTpl',
    ),
    'object' => 
    array (
      'id' => 78,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'orderPrint.LinkTpl',
      'description' => '',
      'editor_type' => 0,
      'category' => 14,
      'cache_type' => 0,
      'snippet' => '<a href="[[+link]]" target="_blanck">[[+name]]</a> - [[+description]]<br/>',
      'locked' => 0,
      'properties' => NULL,
      'static' => 0,
      'static_file' => 'core/components/orderprint/elements/chunks/chunk.LinkTpl.tpl',
      'content' => '<a href="[[+link]]" target="_blanck">[[+name]]</a> - [[+description]]<br/>',
    ),
  ),
  '1fcd587e1622eb8847b7e74baf2c561c' => 
  array (
    'criteria' => 
    array (
      'name' => 'orderPrint',
    ),
    'object' => 
    array (
      'id' => 51,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'orderPrint',
      'description' => '',
      'editor_type' => 0,
      'category' => 14,
      'cache_type' => 0,
      'snippet' => 'if (!$orderId)
    return;
$tpl = $modx->getOption(\'tpl\', $csriptProperties, \'orderPrint.LinkTpl\');
$docsData = array();
$modx->addPackage(\'orderprint\', $modx->getOption(\'core_path\') . \'components/orderprint/model/\');
if (!$docs) {
    $q = $modx->newQuery(\'OprDocuments\', array(\'available_for_front\' => 1));
} else {
    $docs = explode(\',\', $docs);
    $q = $modx->newQuery(\'OprDocuments\', array(\'available_for_front\' => 1, \'id:IN\' => $docs));
}
$q->select(\'id,name,description\');
if ($q->prepare() && $q->stmt->execute()) {
    $output = \'\';
    $docsTmp = $q->stmt->fetchAll(PDO::FETCH_ASSOC);
    foreach ($docsTmp as $doc) {
        $link = $modx->getOption(\'site_url\') . \'assets/components/orderprint/pdf/index.php?recordid=\' . $orderId . \'&docid=\' . $doc[\'id\'];
        $output .= $modx->parseChunk($tpl, array(
            \'id\' => $doc[\'id\'],
            \'name\' => $doc[\'name\'],
            \'description\' => $doc[\'description\'],
            \'link\' => $link
        ));
    }
}
return $output;',
      'locked' => 0,
      'properties' => 'a:0:{}',
      'moduleguid' => '',
      'static' => 0,
      'static_file' => 'core/components/orderprint/elements/snippets/orderPrint.php',
      'content' => 'if (!$orderId)
    return;
$tpl = $modx->getOption(\'tpl\', $csriptProperties, \'orderPrint.LinkTpl\');
$docsData = array();
$modx->addPackage(\'orderprint\', $modx->getOption(\'core_path\') . \'components/orderprint/model/\');
if (!$docs) {
    $q = $modx->newQuery(\'OprDocuments\', array(\'available_for_front\' => 1));
} else {
    $docs = explode(\',\', $docs);
    $q = $modx->newQuery(\'OprDocuments\', array(\'available_for_front\' => 1, \'id:IN\' => $docs));
}
$q->select(\'id,name,description\');
if ($q->prepare() && $q->stmt->execute()) {
    $output = \'\';
    $docsTmp = $q->stmt->fetchAll(PDO::FETCH_ASSOC);
    foreach ($docsTmp as $doc) {
        $link = $modx->getOption(\'site_url\') . \'assets/components/orderprint/pdf/index.php?recordid=\' . $orderId . \'&docid=\' . $doc[\'id\'];
        $output .= $modx->parseChunk($tpl, array(
            \'id\' => $doc[\'id\'],
            \'name\' => $doc[\'name\'],
            \'description\' => $doc[\'description\'],
            \'link\' => $link
        ));
    }
}
return $output;',
    ),
  ),
);