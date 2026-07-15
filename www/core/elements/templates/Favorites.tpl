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
        </div>
             
    </div>
</section>

<section class="catalog">
    <div class="container">
        <div class="row">
            <div class="col-md-12 cat-title">
                <h3>{$_modx->resource.pagetitle}</h3>
            </div>
            {'!msFavorites.initializes' | snippet }
            {var $result = '!pdoPage' | snippet : [
                    'parents' => 2,
                    'element' => 'msProducts',
                    'resources' => '!msFavorites.ids' | snippet,
                    'tpl' => 'tovarTpl-4row-msfavorites',
                    'limit' => 24,
                    'ajaxMode' => 'default',
                    'showUnpublished' => 1
            ]}
            {if $result}
                {$result}
                {'page.nav' | placeholder}
                <button class="btn btn-default msfavorites msfavorites-action"
                                data-click
                                data-data-list="default"
                                data-data-type="resource"
                                data-data-method="clear"
                        >
                        Очистить список
                </button>
            {else}
                <div class="col-md-12 msfavorites-empty-list"><strong>Ваш список избранного пока пуст</strong></div>
            {/if}
        </div>
    </div>      
</section>   

{include 'file:chunks/Footer.tpl'}

