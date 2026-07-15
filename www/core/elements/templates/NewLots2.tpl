{include 'file:chunks/Head.tpl'}

<section class="catalog">
    <div class="container">  
    <div id="pdopage">
        <div class="row">
            <div class="col-md-12 cat-title" id="new">
				<h3>{$_modx->resource.pagetitle}</h3>
			</div>

				{var $timeago = '@FILE snippets/timeago.php' | snippet }
                {if $timeago}  
				{'!pdoPage' | snippet : [
					'element' => 'msProducts',
					'tpl' => '@FILE chunks/tovarPreview4row.tpl',
					'parents' => 2,
					'pageLimit' => 5,
					'limit' => 48,
					'where' => ["publishedon:>=" => $timeago, "Data.remains:>=" => 1],
					'sortby' => '{"publishedon": "desc"}',
					'includeThumbs' => '140x140',
					'cache' => 1,
					'cacheTime' => 3600,
					'showLog' => 0
				]} 
                {/if}
				{'page.nav' | placeholder}

        </div>
       
    </div> 
    </div>
</section>
 
{include 'file:chunks/Footer.tpl'}

