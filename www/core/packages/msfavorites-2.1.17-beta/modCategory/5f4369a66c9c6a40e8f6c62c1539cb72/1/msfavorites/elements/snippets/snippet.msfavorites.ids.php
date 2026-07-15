<?php

/** @var array $scriptProperties */
$corePath = $modx->getOption('msfavorites_core_path', null,
    $modx->getOption('core_path', null, MODX_CORE_PATH) . 'components/msfavorites/');
/** @var msFavorites $msFavorites */
$msFavorites = $modx->getService('msfavorites', 'msFavorites', $corePath . 'model/msfavorites/',
    ['core_path' => $corePath]);
if (!$msFavorites OR !($msFavorites instanceof msFavorites)) {
    return 'Could not load msFavorites class!';
}

if (empty($uid) OR $uid == '') {
    $uid = $modx->user->id;
    if (!$modx->user->isAuthenticated($modx->context->key)) {
        $uid = session_id();
    }
}
$list = $modx->getOption('list', $scriptProperties, 'default', true);
$sortby = $modx->getOption('sortby', $scriptProperties);


$query = [
    'list' => $list,
    'uid'  => $uid,
];

$data = $msFavorites->getResourceFavoritesOutput($query, true, $sortby);
$msFavorites->setPlaceholders($data);

$data = @$data['list'][$list];
if (empty($data)) {
    $data = '-0';
}

if (!empty($toPlaceholder)) {
    $modx->setPlaceholder($toPlaceholder, $data);

    return '';
}

return $data;

