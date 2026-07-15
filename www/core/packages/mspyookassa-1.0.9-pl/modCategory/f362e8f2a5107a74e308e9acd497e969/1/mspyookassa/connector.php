<?php

if (file_exists(dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php')) {
    /** @noinspection PhpIncludeInspection */
    require_once dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php';
} else {
    require_once dirname(dirname(dirname(dirname(dirname(__FILE__))))) . '/config.core.php';
}
/** @noinspection PhpIncludeInspection */
require_once MODX_CORE_PATH . 'config/' . MODX_CONFIG_KEY . '.inc.php';
/** @noinspection PhpIncludeInspection */
require_once MODX_CONNECTORS_PATH . 'index.php';


/** @var mspYooKassa $mspYooKassa */
$fqn = $modx->getOption('mspyookassa_class', null, 'mspyookassa.mspYooKassa', true);
$path = $modx->getOption('mspyookassa_core_path', null, $modx->getOption('core_path', null, MODX_CORE_PATH) . 'components/mspyookassa/');
$mspYooKassa = $modx->getService($fqn, '', $path . 'model/', ['core_path' => $path]);
$modx->lexicon->load('mspyookassa:default');

// handle request
$modx->getRequest();
/** @var modConnectorRequest $request */
$request = $modx->request;
$request->handleRequest([
    'processors_path' => $path . 'processors/',
    'location' => '',
]);