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
            <span class="backBtn" onclick="goBack()"><i class="fa fa-angle-left"></i> Вернуться</span>    
        </div>
    
        {'!officeProfile' | snippet : [
            'tplProfile' => 'tpl.Office.profile.form.discount',
        ]}
        
        <div class="cart-block col-md-12">
            <h4>История заказов</h4>
            <br>
            {'!officeMiniShop2' | snippet : [
                'allowRemove' => '0',
                'allowRepeat' => '0',
                'cartLink' => '/basket.html',
            ]}
        </div>
        
        <div class="cart-block col-md-12">
            <h4>Профиль</h4>
            <br>
            {'!officeProfile' | snippet : [
                'tplProfile' => 'tpl.Office.profile.form.my',
                'requiredFields' => 'email,fullname'
            ]}
        </div>

                                   
        </div>
             
    </div>
</section>

{include 'file:chunks/Footer.tpl'}


