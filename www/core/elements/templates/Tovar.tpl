{include 'file:chunks/Head.tpl'}

<section class="catalog catalog-item">
    <div class="container">
        <div class="row">
            <div class="breads col-md-12">
                {'pdoCrumbs' | snippet : [
                	'showHome' => 1,
                	'outputSeparator' => ''
                    'exclude' => 2
                ]}
            </div>
            <div class="col-md-12 cat-title">
                <div class="row">
                    <div class="col-md-9 col-sm-9 col-xs-9">
                        <h1>{'pdoField' | snippet : [
                            	'id' => $_modx->resource.id,
                            	'field' => 'pagetitle',
                            	'top' => '1'
                            ]}</h1>
                    </div>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                        <a class="backBtn" href="[[~[[*parent]]]]"><i class="fa fa-angle-left"></i>В каталог</a>    
                    </div>
            </div>
            </div>
            <div class="col-md-3 col-sm-3 col-xs-12">
            <section class="catalog-left-menu">
                <div class="menu-list">    
                    {var $res = 'pdoField' | snippet : [
                            'id' => $_modx->resource.id, 
                            'field' => 'id',
                            'top' => '2']
                    }
                    {if $res}  
                    {'pdoMenu' | snippet : [
                        'parents' => $res,
                        'level' => 1,
                        'templates' => 6,
                    ]}
                    {/if}
                </div>        
            </section>            
            </div>
            <div class="col-md-9 col-sm-12 col-xs-12">

            {include 'file:chunks/tovarContent.tpl'}
			
            <section class="catalog">
                <div class="row">
                    <div class="col-md-12 cat-title"><h3>Похожие товары</h3></div>
                    {'msProducts' | snippet : [
                            'tpl' => '@FILE chunks/tovarPreview3row.tpl',
                            'parents' => $_modx->resource.parent,
                            'limit' => 9,
                            'includeThumbs' => '140x140',
                            'where' => ["Data.remains:>=" => 1, "Data.made_in" => $made_in],
                            'sortby' => 'RAND()',
                            'showLog' => false
                        ]}
                </div>
            </section>   
                                       
              
            </div> 
                                   
        </div>
             
    </div>
</section>
 
{include 'file:chunks/Footer.tpl'}

