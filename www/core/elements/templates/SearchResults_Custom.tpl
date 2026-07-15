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
                        <section class="custom-section content">
                            <div class="container">
                        		  <div class="">
                        		      {var $res = '!getProductsSearch' | snippet }
                                      {if $res}
                                        {$_modx->runSnippet('!mFilter2', [
                                            'parents' => 2,
                                            'resources' => $res,
                                            'suggestions' => 1,
                                            'suggestionsMaxFilters' => 5000,
                                            'suggestionsMaxResults' => 20000,
                                            'element' => 'msProducts',
                                            'where' => '{"Data.remains:>=": 1}',
                                            'tpl' => '@FILE chunks/tovarPreview3row.tpl',
                                            'includeThumbs' => '140x140',
                                            'limit' => 48,
                                            'filters' => 'ms|made_in, ms|nominal, msoption|theme',
                                            'class' => 'msProduct',
                                            'cacheTime' => 3600
                                        ])}
                                    
                        		      <!-- {$_modx->runSnippet('!pdoPage', [
										'element' => 'msProducts'
                        		        'parents' => 2,
                        		        'resources' => $res,
										'where' => '{"Data.remains:>=": 1}',
                        		        'tpl' => '@FILE chunks/tovarPreview4row.tpl',
                                        'includeThumbs' => '140x140',
                        		        'limit' => '24',
                        		      ])} -->
                                      {else}
                                      <p>По Вашему запросу ничего не найдено.</p> 
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

