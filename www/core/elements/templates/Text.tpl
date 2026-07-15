{include 'file:chunks/Head.tpl'}

<section class="text">
    <div class="container">
        <div class="row">
            <div class="breads col-md-12">
                {'pdoCrumbs' | snippet : [
                	'showHome' => 1,
                	'outputSeparator' => ''
                ]}
            </div>  
            <div class="col-md-12">
            <div class="text-block">
                <div class="col-md-9">
                    <h3>{$_modx->resource.pagetitle}</h3>  
                    {$_modx->resource.content}
                </div>
            </div>    
            </div>   
        </div>
    </div>
</section>
 
{include 'file:chunks/Footer.tpl'}

