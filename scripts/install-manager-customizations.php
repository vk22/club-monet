<?php

if (PHP_SAPI !== 'cli') {
    http_response_code(403);
    exit("CLI only.\n");
}

define('MODX_API_MODE', true);
$siteRoot = getenv('CLUBMONET_ROOT');
if (!$siteRoot) {
    $siteRoot = dirname(__DIR__) . '/www';
}
require rtrim($siteRoot, '/\\') . '/index.php';

$modx->initialize('mgr');

$plugin = $modx->getObject('modPlugin', array('name' => 'ClubMonetManagerCustomizations'));
if (!$plugin) {
    $plugin = $modx->newObject('modPlugin');
    $plugin->set('name', 'ClubMonetManagerCustomizations');
}

$plugin->fromArray(array(
    'description' => 'Update-safe manager customizations for Club Monet.',
    'plugincode' => '',
    'static' => 1,
    'static_file' => 'clubmonet/elements/plugins/managercustomizations.php',
    'disabled' => 0,
), '', true, true);

if (!$plugin->save()) {
    fwrite(STDERR, "Unable to save plugin.\n");
    exit(1);
}

$event = $modx->getObject('modPluginEvent', array(
    'pluginid' => $plugin->get('id'),
    'event' => 'msOnManagerCustomCssJs',
));

if (!$event) {
    $event = $modx->newObject('modPluginEvent');
    $event->fromArray(array(
        'pluginid' => $plugin->get('id'),
        'event' => 'msOnManagerCustomCssJs',
        'priority' => 0,
        'propertyset' => 0,
    ), '', true, true);
}

if (!$event->save()) {
    fwrite(STDERR, "Unable to attach plugin event.\n");
    exit(1);
}

$modx->cacheManager->refresh();
echo "ClubMonetManagerCustomizations installed.\n";
