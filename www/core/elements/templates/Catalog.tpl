{include 'file:chunks/Head.tpl'}

<section class="catalog">
    <div class="container">
        <div class="row">
            <div class="breads col-md-12">
                {'pdoCrumbs' | snippet : [
                	'showHome' => 1,
                	'outputSeparator' => '',
                    'exclude' => 2
                ]}
            </div>   
            <div class="col-md-12 cat-title">
                <div class="row">
                    <div class="col-md-9 col-sm-9 col-xs-9">
                        <h1>{$_modx->resource.parent | resource : 'pagetitle'} {'pagetitle' | resource} </h1>
                    </div>
                </div>
            </div>
            
            {$_modx->runSnippet('!mFilter2', [
            	'parents' => $_modx->resource.id,
            	'suggestions' => 1,
            	'suggestionsMaxFilters' => 5000,
            	'suggestionsMaxResults' => 20000,
            	'element' => 'msProducts',
                'where' => '{"Data.remains:>=": 1}',
            	'sortby' => 'Data.year',
            	'sortdir' => 'ASC',
            	'tpl' => '@FILE chunks/tovarPreview3row.tpl',
            	'includeThumbs' => '140x140',
            	'limit' => 48,
            	'filters' => 'ms|made_in, ms|nominal, msoption|theme',
            	'class' => 'msProduct',
            	'cacheTime' => 3600
            ])}

                    
        </div>    
    </div>          
</section>   

<!-- <section class="catalog text">
    <div class="container">
        <div class="row">
            <div class="col-md-12 cat-title"><h2 style="font-family: 'futurabookc',Verdana,sans-serif; font-size: 24px;">{$_modx->resource.Seo_title}</h2></div>
            <div class="col-md-12">
                    <div class="text-block">
                        {$_modx->resource.Seo_text}
                    </div>
            </div>
        </div>
    </div>
</section> -->
 
{include 'file:chunks/Footer.tpl'}

