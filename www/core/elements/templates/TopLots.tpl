{include 'file:chunks/Head.tpl'}

<section class="catalog">
    <div class="container">
        <div class="row">
            <div class="col-md-12 cat-title" id="new">
				<h3>{$_modx->resource.pagetitle}</h3>
			</div>
 			{var $res = '!getLotsTop' | snippet }
			{if $res}
			{$res}
			{/if}            
        </div>
    </div>
</section>
 
{include 'file:chunks/Footer.tpl'}

