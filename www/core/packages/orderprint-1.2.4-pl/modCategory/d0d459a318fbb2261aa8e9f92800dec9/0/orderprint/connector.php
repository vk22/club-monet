<?php
/**
 * Orderprint Connector
 *
 * @package orderprint
 */
require_once dirname(dirname(dirname(dirname(__FILE__)))).'/config.core.php';
require_once MODX_CORE_PATH.'config/'.MODX_CONFIG_KEY.'.inc.php';
require_once MODX_CONNECTORS_PATH.'index.php';

$corePath = $modx->getOption('orderprint.core_path',null,$modx->getOption('core_path').'components/orderprint/');
require_once $corePath.'model/orderprint/index.class.php';
$modx->orderprint = new OrderPrint($modx);

$modx->lexicon->load('orderprint:default');
switch ($modx->getOption('opr_type')) {
    case 'shk':
        $modx->addPackage('shopkeeper',$modx->getOption('core_path').'components/shopkeeper/model/');
        break;
    case 'shk3':
        $modx->addPackage('shopkeeper3', $modx->getOption('core_path') . 'components/shopkeeper3/model/');
        break;
}

/* handle request */
$path = $modx->getOption('processorsPath',$modx->orderprint->config,$corePath.'processors/');
$modx->request->handleRequest(array(
    'processors_path' => $path,
    'location' => '',
));