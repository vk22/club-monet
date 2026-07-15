<?php

/**
 * Loads the home page.
 *
 * @package orderprint
 * @subpackage controllers
 */
$modx->regClientStartupScript($orderPrint->config['jsUrl'] . 'mgr/widgets/settings.grid.js');
$modx->regClientStartupScript($orderPrint->config['jsUrl'] . 'mgr/widgets/documents.grid.js');
$modx->regClientStartupScript($orderPrint->config['jsUrl'] . 'mgr/widgets/orders.grid.js');
$modx->regClientStartupScript($orderPrint->config['jsUrl'] . 'mgr/widgets/home.panel.js');
$modx->regClientStartupScript($orderPrint->config['jsUrl'] . 'mgr/sections/index.js');

$output = '<div id="orderprint-panel-home-div"></div>';

return $output;
