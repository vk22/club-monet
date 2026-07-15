<?php
$today = strtotime(date('Y-m-d'));
$week = 604800;
$diff = $publishedon + $week;
if ($today > $diff) {
    print_r ('');
} else {
    print_r ('<div class="newest"><p>Новинка</p></div>');
};
return;