<style>
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
background-color: #555;
color: #fff;
border: 1px #000 solid;
}
</style>

<table width="100%">
	<tr>
		<td width="65%">
			<div class="client_info">
			  <h1 style="font-size: 16px">Счет от Интернет-магазина [[+settings.company:isnot=``:then=`[[+settings.company]]`:else=`[[++site_name]]`]]</h1>
			  
			  <h3 style="font-size: 14px">Данные покупателя</h3>
				<p>[[+address.receiver:default=`[[+user.fullname]]`]]</p>
				<p>
					[[+address.street]]
					[[+address.building:notempty=`д.[[+address.building]]`]]
					[[+address.room:notempty=`/[[+address.room]]`]]
					[[+address.city:notempty=`[[+address.city]]`]]
					[[+address.region:notempty=`[[+address.region]]`]]
					[[+address.index:notempty=`[[+address.index]]`]]
					[[+user.country:default=``]]
				</p>
			  <p>Эл.почта: <span class="email_fild">[[+user.email]]</span></p>
			  [[+user.phone:notempty=`<p>Телефон: [[+user.phone]]</p>`]]
			  
			  <h3 style="font-size: 14px">Данные получателя</h3>
				<p>[[+address.receiver:default=`[[+user.fullname]]`]]</p>
				<p>
					[[+address.street]]
					[[+address.building:notempty=`д.[[+address.building]]`]]
					[[+address.room:notempty=`/[[+address.room]]`]]
					[[+address.city:notempty=`[[+address.city]]`]]
					[[+address.region:notempty=`[[+address.region]]`]]
					[[+address.index:notempty=`[[+address.index]]`]]
					[[+user.country:default=``]]
				</p>
			</div>
		</td>
		<td width="35%">
			<div class="inc_info">
			  <h1 style="font-size: 16px">Kод заказа: [[+num]]</h1>
			  <h3 style="font-size: 14px">Продавец</h3>
			  <p>Интернет-магазин [[+settings.company:isnot=``:then=`[[+settings.company]]`:else=`[[++site_name]]`]]</p>
			  [[+settings.address:notempty=`<p>Адрес фирмы: [[+settings.address]]</p>`]]
			  [[+settings.phone:notempty=`<p>Телефон: [[+settings.phone]]</p>`]]
			  [[+settings.fax:notempty=`<p>Факс:[[+settings.fax]]</p>`]]
			  [[+settings.email:notempty=`<p>Эл.почта: <span class="email_fild">[[+settings.email]]</span></p>`]]
			  <p>Веб-сайт: [[++site_url]]</p>
			</div>
		</td>
	</tr>
	<tr>
		<td colspan="2">
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
					<td><strong>Всего товаров</strong></td>
					<td>[[+total_count]]</td>
				</tr>
				<tr>
	    				<td colspan="3"></td>
					<td><strong>Общая стоимость</strong></td>
					<td>[[+cart_cost]]</td>
				</tr>
				<tr>
	    				<td><strong>Способ доставки</strong></td>
   	 				<td>[[+delivery]]</td>
					<td></td>
					<td><strong>Стоимость доставки</strong></td>
					<td>[[+delivery_cost]]</td>
				</tr>
				<tr>
	    				<td><strong>Способ оплаты</strong></td>
   	 				<td>[[+payment]]</td>
					<td></td>
					<td><strong>К оплате</strong></td>
					<td>[[+cost]]</td>
				</tr>
			</table>
		</td>
	</tr>
</table>