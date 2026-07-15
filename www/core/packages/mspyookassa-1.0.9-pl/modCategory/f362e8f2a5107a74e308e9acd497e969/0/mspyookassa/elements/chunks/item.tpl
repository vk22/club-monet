{foreach $options as $name => $values}
    <div class="uk-text-emphasis uk-margin-small-bottom">{('ms2_product_' ~ $name) | lexicon}</div>
    <div class="uk-margin-bottom"
            {if $constraints[$name]}
                data-constraints="{$constraints[$name]| json_encode: 256 | htmlentities}"
            {/if}
    >
        {foreach $values as $value index=$index}
            <label class="radio input-parent">
                <input type="radio" value="{$values[$index]}" name="options[{$name}]"
                       {if $index == 0}checked="checked"{/if}

                        {if $constraints[$name]}
                            data-relations="{$relations[$name][$value]| json_encode: 256 | htmlentities}"
                        {/if}

                />
                <span class="uk-margin-small-right" data-uk-tooltip="{$values[$index]}">{$values[$index]}</span>

            </label>
        {/foreach}
    </div>
{/foreach}