{include 'file:chunks/Head.tpl'}

<section class="catalog">
    <div class="container">
        <div class="row">
            <div class="col-md-12 cat-title" id="new">
				<h3>{$_modx->resource.pagetitle}</h3>
			</div>
 			{var $res = 'msProducts' | snippet : [
					'tpl' => '@FILE chunks/tovarPreview4row.tpl',
					'parents' => 2,
					'limit' => 48,
					'where' => ["Data.favorite" => 1, "Data.remains:>=" => 1],
					'sortby' => '{"publishedon": "desc"}',
					'includeThumbs' => '140x140'
				] }

			{if $res}
			{$res}
			{/if}            
        </div>
    </div>
</section>
 
{include 'file:chunks/Footer.tpl'}

