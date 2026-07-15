{include 'file:chunks/Head.tpl'}

<section class="catalog">
    <div class="container">  
    <div id="pdopage">
        <div class="row">
            <div class="col-md-12 cat-title" id="new">
				<h3>{$_modx->resource.pagetitle}</h3>
			</div>
                {var $res = '!getNewLotsIndex' | snippet }
                {if $res}
                {$res}
                {/if}
        </div>
    </div> 
    </div>
</section>
 
{include 'file:chunks/Footer.tpl'}

