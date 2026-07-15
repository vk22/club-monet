{include 'file:chunks/Head.tpl'}

<section class="catalog">
    <div class="container">  
    <div id="pdopage">
        <div class="row">
            <div class="col-md-12 cat-title" id="new">
				<h3>{$_modx->resource.pagetitle}</h3>
			</div>
				{'!pdoPage' | snippet : [
					'element' => 'msProducts',
					'tpl' => '@INLINE <p>[[+idx]] <a href="/[[+uri]]">[[+pagetitle]]</a></p>',
					'parents' => 2,
					'limit' => 48,
					'sortby' => '{"publishedon": "desc"}',
					'showLog' => 0
				]} 
				{'page.nav' | placeholder}

        </div>
       
    </div> 
    </div>
</section>
 
{include 'file:chunks/Footer.tpl'}

