{include 'file:chunks/Head.tpl'}

<section class="cart">
    <div class="container">
        <div class="row">

        <div class="breads col-md-12">
            {'pdoCrumbs' | snippet : [
            	'showHome' => 1,
            	'outputSeparator' => ''
            ]}
        </div>  
        <div class="col-md-12 cat-title">
            <h1>{$_modx->resource.pagetitle}</h1>
            <span class="backBtn" onclick="window.history.back()"><i class="fa fa-angle-left"></i> Вернуться</span>    
        
        </div>
        <div class="cart-block col-md-12">
            <div class="row">
                <div class="col-xs-12">
                    <div class="">
                        {'!checkCartOnProductsCount' | snippet}
                        {'!msCartEx' | snippet}
                    </div>
                </div>
            </div>
        </div>    
        <div class="cart-block col-md-12">
            {'!msOrder' | snippet}
            {'!msGetOrder' | snippet}
        </div>
                                   
        </div>
             
    </div>
</section>
<div id="before-load">
  <i class="fa fa-spinner fa-spin"></i>
</div>
 
{include 'file:chunks/Footer.tpl'}

