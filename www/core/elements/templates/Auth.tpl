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
            </div>
            <div class="cart-block col-md-12">
                {'!OfficeAuth' | snippet : [
                    'groups' => 'Users',
                    'loginResourceId' => $_modx->config.site_start
                ]}
            </div>                     
        </div>
    </div>
</section>

{include 'file:chunks/Footer.tpl'}

