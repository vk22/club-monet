<div id="msProduct" class="item-block" itemscope itemtype="http://schema.org/Product">
<form class="form-horizontal ms2_form" method="post">
<input type="hidden" name="id" value="[[*id]]" />
    <div class="row">
        <div class="col-md-12">
            <div class="top">
                <div class="item-img col-md-6">
                {var $section = $_modx->resource.parent | resource : 'parent'}
                {if $section == 15 || $section == 16 }
                {'!msGallery' | snippet : [
                    'tpl' => 'tpl.msGalleryZoom'
                ]}
                {else}
                {'!msGallery' | snippet : [
                    'tpl' => 'tpl.msGallery'
                ]}
                {/if}
                </div>
                <div class="item-info col-md-6">
                    <div class="item-title" itemprop="name"> {$_modx->resource.pagetitle}</div>  
                    <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">
                    <div class="item-price" itemprop="price">{$price} руб</div>
                        <meta itemprop="priceCurrency" content="RUB">

                        {if $remains == 0}
                        <div class="item-order"> <div class="number"> <input type="hidden" name="count" id="product_price" class="form-control" value="1" min="0" max="{$remains}" readonly> </div> <button type="submit" class="item-go disable" name="ms2_action" value="cart/add"> {"ms2_frontend_add_to_cart" | lexicon}</button> <div class="item-remains" style="color: red;">Нет в наличии </div> </div>
                        {else}
                        <div class="item-order"> <div class="number"> <div class="input-group number-spinner"> <span class="input-group-btn data-dwn"> <span class="chg-ctn btn btn-default" data-dir="dwn"><span class="glyphicon glyphicon-minus"></span></span> </span> <input type="text" name="count" id="product_price" class="form-control" value="1" min="1" max="{$remains}" readonly> <span class="input-group-btn data-up"> <span class="chg-ctn btn btn-default" data-dir="up"><span class="glyphicon glyphicon-plus"></span></span> </span> </div> </div> <button type="submit" class="item-go" name="ms2_action" value="cart/add"> {"ms2_frontend_add_to_cart" | lexicon}</button> {"!msFavorites.initialize" | snippet} <a class="msfavorites" data-click data-data-list="default" data-data-type="resource" data-data-key="{$_modx->resource.id}" > <span class="msfavorites-text-add"> <span class="msfavorites-text-wrap"> <span class="msfavorites-heart-add"></span> <span class="msfavorites-text">В избранное</span> </span> </span> <span class="msfavorites-text-remove"> <span class="msfavorites-text-wrap"> <span class="msfavorites-heart-remove"></span> <span class="msfavorites-text">Удалить</span> </span> </span> </a> <div class="item-remains"><b>В наличии:</b> {$remains} шт.</div> <link itemprop="availability" href="http://schema.org/InStock"> </div>
                        {/if}
                    
                    <div class="favorBtn"></div>
                    
                </div>

                <div class="item-info item-info-text col-md-12" style="padding-left: 0;">

                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs " role="tablist" id="tabs">
                        <li role="presentation" class="active"><a href="#about" aria-controls="about" role="tab" data-toggle="tab">О товаре</a></li>
                        <li role="presentation"><a href="#delivery-item" aria-controls="delivery-item" role="tab" data-toggle="tab">Доставка</a></li>
                        <li role="presentation"><a href="#sales-item" aria-controls="sales-item" role="tab" data-toggle="tab">Скидки</a></li>
                        </ul>

                        <!-- Tab panes -->
                        <div class="tab-content">
                                <div role="tabpanel" class="tab-pane active item-info-text-item" id="about" >
                                    <ul>
                                        <li><b>Страна:</b> {$made_in} </li>
                                        {if $nominal > 0}
                                        <li><b>Номинал:</b> {$nominal} </li>
                                        {/if}
                                        {if $year > 0}
                                        <li><b>Год:</b> {$year} </li>
                                        {/if}
                                        {if !empty($metal)}
                                        <li><b>Металл:</b> {$metal} </li>
                                        {/if}
                                        <li>{'!msOptions' | snippet : [
                                            'name' => 'theme',
                                            'tpl' => 'tpl.msOptions.2'
                                        ]}</li>
                                        <li itemprop="description"><b>Описание:</b> {$_modx->resource.content}</li>
                                        <li><b>Артикул:</b> {$article}</li>
                                    </ul>
                                </div>
                                <div role="tabpanel" class="tab-pane item-info-text-item" id="delivery-item">
                                    {include 'file:chunks/TovalShippingTab.tpl'}
                                </div>
                                <div role="tabpanel" class="tab-pane item-info-text-item" id="sales-item">                     
                                    {include 'file:chunks/TovalDiscountTab.tpl'}
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div> 
</form>
</div>
