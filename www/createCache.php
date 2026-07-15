<?php

if (PHP_SAPI !== 'cli') {
    http_response_code(403);
    exit('CLI only.');
}

$cacheDir = __DIR__ . '/core/cache/custom_cache';
$flagFile = $cacheDir . '/rebuild_required';
$lockFile = $cacheDir . '/rebuild.lock';
$force = in_array('--force', $argv ?? array(), true);

if (!is_dir($cacheDir)) {
    mkdir($cacheDir, 0775, true);
}

if (!$force && !is_file($flagFile)) {
    echo "No cache rebuild requested.\n";
    exit(0);
}

$lockHandle = fopen($lockFile, 'c');
if (!$lockHandle) {
    fwrite(STDERR, "Unable to open cache rebuild lock.\n");
    exit(1);
}

if (!flock($lockHandle, LOCK_EX | LOCK_NB)) {
    echo "Cache rebuild is already running.\n";
    fclose($lockHandle);
    exit(0);
}

try {
    define('MODX_API_MODE', true);
    require_once __DIR__ . '/index.php';

    global $modx;
    $modx->initialize('mgr');
    $modx->runSnippet('createMyCache__NewLotsIndex');
    $modx->runSnippet('createMyCache__LotsTop');
    $modx->runSnippet('createMyCache__LotsCarousel');

    if (is_file($flagFile)) {
        unlink($flagFile);
    }

    echo "Cache rebuilt.\n";
} catch (Throwable $e) {
    fwrite(STDERR, "Cache rebuild failed: " . $e->getMessage() . "\n");
    exit(1);
} finally {
    flock($lockHandle, LOCK_UN);
    fclose($lockHandle);
}
