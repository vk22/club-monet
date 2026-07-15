{include 'file:chunks/Head.tpl'}

<section class="search catalog">
    <div class="container">
        <div class="row">
            <div class="breads col-md-12">
                {'pdoCrumbs' | snippet : [
                	'showHome' => 1,
                	'outputSeparator' => '/'
                ]}
            </div>  
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-12 cat-title">    
                        <h3>{$_modx->resource.pagetitle}</h3>   
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12"> 
                        <section class="def-section content">
                            <div class="container">
                        		<div class="">

                                    {var $res = $_modx->runSnippet('!getProductsSearch')}
                                    {if $res}
                        		    {$_modx->runSnippet('!pdoPage', [
										'element' => 'msProducts'
                        		        'parents' => 2,
                        		        'resources' => $res,
										'where' => '{"Data.remains:>=": 1}',
                        		        'tpl' => '@FILE chunks/tovarPreview4row.tpl',
                                        'includeThumbs' => '140x140',
                        		        'limit' => 24,
                                        'showLog' => 0
                        		    ])} 
                        		    {/if}
                        		
                                </div>
								<div class="search-results-nav">{'page.nav' | placeholder}</div> 
                            </div>
                        </section>
                    </div>
                </div>     
 
            </div>
                       
        </div>
    </div>
</section>

 
{include 'file:chunks/Footer.tpl'}
