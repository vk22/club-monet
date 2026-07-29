<?php
if ($modx->event->name !== 'msOnManagerCustomCssJs' || $page !== 'orders' || empty($controller)) {
    return;
}

$documents = array();
$modelPath = MODX_CORE_PATH . 'components/orderprint/model/';
if (is_dir($modelPath) && $modx->addPackage('orderprint', $modelPath)) {
    foreach ($modx->getCollection('OprDocuments') as $document) {
        $documents[] = array(
            'id' => (int) $document->get('id'),
            'name' => $document->get('name'),
        );
    }
}

$controller->addHtml(
    '<script type="text/javascript">window.ClubMonetOrderPrintDocuments = '
    . $modx->toJSON($documents)
    . ';</script>'
);

$file = MODX_BASE_PATH . 'assets/components/clubmonet/js/mgr/order-window.js';
$version = is_file($file) ? filemtime($file) : time();

$controller->addLastJavascript(
    MODX_ASSETS_URL . 'components/clubmonet/js/mgr/order-window.js?v=' . $version
);
