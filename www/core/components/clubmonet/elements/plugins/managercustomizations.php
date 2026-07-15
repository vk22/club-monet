<?php
if ($modx->event->name !== 'msOnManagerCustomCssJs' || $page !== 'orders' || empty($controller)) {
    return;
}

$file = MODX_BASE_PATH . 'assets/components/clubmonet/js/mgr/order-window.js';
$version = is_file($file) ? filemtime($file) : time();

$controller->addLastJavascript(
    MODX_ASSETS_URL . 'components/clubmonet/js/mgr/order-window.js?v=' . $version
);
