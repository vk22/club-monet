<?php
if (file_exists(dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php')) {
    /** @noinspection PhpIncludeInspection */
    require_once dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php';
}
else {
    require_once dirname(dirname(dirname(dirname(dirname(__FILE__))))) . '/config.core.php';
}
/** @noinspection PhpIncludeInspection */
require_once MODX_CORE_PATH . 'config/' . MODX_CONFIG_KEY . '.inc.php';
/** @noinspection PhpIncludeInspection */
require_once MODX_CONNECTORS_PATH . 'index.php';
/** @var counterPro $counterPro */
$counterPro = $modx->getService('counterpro', 'counterPro', $modx->getOption('counterpro_core_path', null,
        $modx->getOption('core_path') . 'components/counterpro/') . 'model/counterpro/'
);
$modx->lexicon->load('counterpro:default');

// handle request
$corePath = $modx->getOption('counterpro_core_path', null, $modx->getOption('core_path') . 'components/counterpro/');
$path = $modx->getOption('processorsPath', $counterPro->config, $corePath . 'processors/');
$modx->getRequest();

/** @var modConnectorRequest $request */
$request = $modx->request;
$request->handleRequest(array(
    'processors_path' => $path,
    'location' => '',
));