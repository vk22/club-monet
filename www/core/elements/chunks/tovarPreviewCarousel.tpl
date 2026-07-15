<div class="cat-item-prev item">
    <a href="{$_modx->makeUrl($id)}">
        <div class="cat-item-prev">
            <div class="item-prev-img">
                <img src="https://club-monet.ru/[[+140x140]]" alt="{$pagetitle}" title="{$pagetitle}" class="lazy" />
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