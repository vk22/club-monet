<div class="col-md-4 col-sm-4 col-xs-12">
    <a href="{$_modx->makeUrl($id)}">
        <div class="cat-item-prev">
            {$_modx->runSnippet('@FILE snippets/getNew.php', ['publishedon' => $publishedon])}
            <div class="item-prev-img">
                <img data-src="https://club-monet.ru/[[+140x140]]" src="/assets/monety/img/logo-s.svg" alt="{$pagetitle}" title="{$pagetitle}" class="lazy" />
            </div>
            <div class="item-prev-info">
                <div class="item-prev-title">{$pagetitle}</div>
                <div class="item-prev-price"> 
                {if $old_price > 0}
                   <span class="old_price">{$old_price} руб</span>
                {/if}
                 {$price} руб</div>
                <a href="{$_modx->makeUrl($id)}" class="item-prev-go">Купить</a>
            </div>
        </div>
    </a>    
</div> 