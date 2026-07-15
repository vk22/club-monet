<?php
/** @var array $scriptProperties */
/** @var mspYooKassa $mspYooKassa */
$fqn = $modx->getOption('mspyookassa_class', null, 'mspyookassa.mspYooKassa', true);
$path = $modx->getOption('mspyookassa_core_path', null, $modx->getOption('core_path', null, MODX_CORE_PATH) . 'components/mspyookassa/');
if ($mspYooKassa = $modx->getService($fqn, '', $path . 'model/', ['core_path' => $path])) {
    if (method_exists($mspYooKassa, 'processEvent')) {
        return $mspYooKassa->processEvent($modx->event, $scriptProperties);
    }
}