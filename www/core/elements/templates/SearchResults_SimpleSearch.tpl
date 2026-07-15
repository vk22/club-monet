{include 'file:chunks/Head_SimpleSearch.tpl'}

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
       
                        		    {$_modx->runSnippet('!SimpleSearch', [
										'containerTpl' => 'search_container'
                        		        'tpl' => 'search_id',
                        		        'perPage' => 10000000
                        		    ])} 
                        		
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

