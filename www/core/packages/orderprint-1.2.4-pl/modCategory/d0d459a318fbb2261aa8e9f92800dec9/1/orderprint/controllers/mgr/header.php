<?php
/**
 * Loads the header for mgr pages.
 *
 * @package orderprint
 * @subpackage controllers
 */
//$modx->regClientStartupScript($modx->runProcessor('mgr/order/getdocmenu', array(), array('processors_path' => $modx->getOption('core_path') . 'components/orderprint/processors/')));
$modx->regClientStartupScript("<script>var mm = " . $orderPrint->getMenu() ."</script>");
$modx->regClientStartupScript($orderPrint->config['jsUrl'].'mgr/orderprint.js');
$modx->regClientStartupHTMLBlock('<script type="text/javascript">
Ext.onReady(function() {
    Orderprint.config = '.$modx->toJSON($orderPrint->config).';
});
</script>');


return '';