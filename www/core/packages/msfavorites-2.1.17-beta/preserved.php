<?php return array (
  '5315a62c492a61b42c76b42ef95c57cb' => 
  array (
    'criteria' => 
    array (
      'name' => 'msfavorites',
    ),
    'object' => 
    array (
      'name' => 'msfavorites',
      'path' => '{core_path}components/msfavorites/',
      'assets_path' => '',
    ),
  ),
  '585a6b971046d8220a2f091b6f5aad5f' => 
  array (
    'criteria' => 
    array (
      'key' => 'msfavorites_front_css',
    ),
    'object' => 
    array (
      'key' => 'msfavorites_front_css',
      'value' => '[[+assetsUrl]]css/default.min.css',
      'xtype' => 'textfield',
      'namespace' => 'msfavorites',
      'area' => 'msfavorites_main',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  'ac35d3c6295cd1847d32c2c0674b32d0' => 
  array (
    'criteria' => 
    array (
      'key' => 'msfavorites_front_js',
    ),
    'object' => 
    array (
      'key' => 'msfavorites_front_js',
      'value' => '[[+assetsUrl]]js/default.min.js',
      'xtype' => 'textfield',
      'namespace' => 'msfavorites',
      'area' => 'msfavorites_main',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  'b5e56163896ffbd49dbffe4bab7b0f73' => 
  array (
    'criteria' => 
    array (
      'key' => 'msfavorites_clear_temporary',
    ),
    'object' => 
    array (
      'key' => 'msfavorites_clear_temporary',
      'value' => '1',
      'xtype' => 'combo-boolean',
      'namespace' => 'msfavorites',
      'area' => 'msfavorites_main',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  'e5d91fb580a4452c83fdcfa3f1e6918f' => 
  array (
    'criteria' => 
    array (
      'key' => 'msfavorites_time_limit',
    ),
    'object' => 
    array (
      'key' => 'msfavorites_time_limit',
      'value' => '30',
      'xtype' => 'textfield',
      'namespace' => 'msfavorites',
      'area' => 'msfavorites_main',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  'eb0757845b4a2bd00c832c89abf700c5' => 
  array (
    'criteria' => 
    array (
      'name' => 'msFavoritesOnBeforeProcessFavorites',
    ),
    'object' => 
    array (
      'name' => 'msFavoritesOnBeforeProcessFavorites',
      'service' => 6,
      'groupname' => 'msFavorites',
    ),
  ),
  'b3a8eaa2d7840e53bdd62ff964206292' => 
  array (
    'criteria' => 
    array (
      'name' => 'msFavoritesOnProcessFavorites',
    ),
    'object' => 
    array (
      'name' => 'msFavoritesOnProcessFavorites',
      'service' => 6,
      'groupname' => 'msFavorites',
    ),
  ),
  '3f8713b04fb044bf83ac737d769cd2ba' => 
  array (
    'criteria' => 
    array (
      'category' => 'msFavorites',
    ),
    'object' => 
    array (
      'id' => 28,
      'parent' => 0,
      'category' => 'msFavorites',
      'rank' => 0,
    ),
  ),
  'd46485cc68da5889ba4ce8702f59b482' => 
  array (
    'criteria' => 
    array (
      'name' => 'msFavorites.initialize',
    ),
    'object' => 
    array (
      'id' => 115,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'msFavorites.initialize',
      'description' => '',
      'editor_type' => 0,
      'category' => 28,
      'cache_type' => 0,
      'snippet' => '/** @var array $scriptProperties */
$corePath = $modx->getOption(\'msfavorites_core_path\', null,
    $modx->getOption(\'core_path\', null, MODX_CORE_PATH) . \'components/msfavorites/\');
/** @var msFavorites $msFavorites */
$msFavorites = $modx->getService(\'msfavorites\', \'msFavorites\', $corePath . \'model/msfavorites/\',
    array(\'core_path\' => $corePath));
if (!$msFavorites OR !($msFavorites instanceof msFavorites)) {
    return \'Could not load msFavorites class!\';
}

$msFavorites->initialize($modx->context->key, $scriptProperties);',
      'locked' => 0,
      'properties' => 'a:3:{s:8:"frontCss";a:7:{s:4:"name";s:8:"frontCss";s:4:"desc";s:25:"msfavorites_prop_frontCss";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:0:"";s:7:"lexicon";s:22:"msfavorites:properties";s:4:"area";s:0:"";}s:7:"frontJs";a:7:{s:4:"name";s:7:"frontJs";s:4:"desc";s:24:"msfavorites_prop_frontJs";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:0:"";s:7:"lexicon";s:22:"msfavorites:properties";s:4:"area";s:0:"";}s:9:"actionUrl";a:7:{s:4:"name";s:9:"actionUrl";s:4:"desc";s:26:"msfavorites_prop_actionUrl";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:24:"[[+assetsUrl]]action.php";s:7:"lexicon";s:22:"msfavorites:properties";s:4:"area";s:0:"";}}',
      'moduleguid' => '',
      'static' => 0,
      'static_file' => 'core/components/msfavorites/elements/snippets/snippet.msfavorites.initialize.php',
      'content' => '/** @var array $scriptProperties */
$corePath = $modx->getOption(\'msfavorites_core_path\', null,
    $modx->getOption(\'core_path\', null, MODX_CORE_PATH) . \'components/msfavorites/\');
/** @var msFavorites $msFavorites */
$msFavorites = $modx->getService(\'msfavorites\', \'msFavorites\', $corePath . \'model/msfavorites/\',
    array(\'core_path\' => $corePath));
if (!$msFavorites OR !($msFavorites instanceof msFavorites)) {
    return \'Could not load msFavorites class!\';
}

$msFavorites->initialize($modx->context->key, $scriptProperties);',
    ),
  ),
  '0d75f4c890b98076794877ec933a9e0a' => 
  array (
    'criteria' => 
    array (
      'name' => 'msFavorites.ids',
    ),
    'object' => 
    array (
      'id' => 116,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'msFavorites.ids',
      'description' => '',
      'editor_type' => 0,
      'category' => 28,
      'cache_type' => 0,
      'snippet' => '/** @var array $scriptProperties */
$corePath = $modx->getOption(\'msfavorites_core_path\', null,
    $modx->getOption(\'core_path\', null, MODX_CORE_PATH) . \'components/msfavorites/\');
/** @var msFavorites $msFavorites */
$msFavorites = $modx->getService(\'msfavorites\', \'msFavorites\', $corePath . \'model/msfavorites/\',
    [\'core_path\' => $corePath]);
if (!$msFavorites OR !($msFavorites instanceof msFavorites)) {
    return \'Could not load msFavorites class!\';
}

if (empty($uid) OR $uid == \'\') {
    $uid = $modx->user->id;
    if (!$modx->user->isAuthenticated($modx->context->key)) {
        $uid = session_id();
    }
}
$list = $modx->getOption(\'list\', $scriptProperties, \'default\', true);
$sortby = $modx->getOption(\'sortby\', $scriptProperties);


$query = [
    \'list\' => $list,
    \'uid\'  => $uid,
];

$data = $msFavorites->getResourceFavoritesOutput($query, true, $sortby);
$msFavorites->setPlaceholders($data);

$data = @$data[\'list\'][$list];
if (empty($data)) {
    $data = \'-0\';
}

if (!empty($toPlaceholder)) {
    $modx->setPlaceholder($toPlaceholder, $data);

    return \'\';
}

return $data;',
      'locked' => 0,
      'properties' => 'a:3:{s:4:"list";a:7:{s:4:"name";s:4:"list";s:4:"desc";s:21:"msfavorites_prop_list";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:0:"";s:7:"lexicon";s:22:"msfavorites:properties";s:4:"area";s:0:"";}s:6:"sortby";a:7:{s:4:"name";s:6:"sortby";s:4:"desc";s:23:"msfavorites_prop_sortby";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:20:"{"timestamp": "ASC"}";s:7:"lexicon";s:22:"msfavorites:properties";s:4:"area";s:0:"";}s:13:"toPlaceholder";a:7:{s:4:"name";s:13:"toPlaceholder";s:4:"desc";s:30:"msfavorites_prop_toPlaceholder";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:0:"";s:7:"lexicon";s:22:"msfavorites:properties";s:4:"area";s:0:"";}}',
      'moduleguid' => '',
      'static' => 0,
      'static_file' => 'core/components/msfavorites/elements/snippets/snippet.msfavorites.ids.php',
      'content' => '/** @var array $scriptProperties */
$corePath = $modx->getOption(\'msfavorites_core_path\', null,
    $modx->getOption(\'core_path\', null, MODX_CORE_PATH) . \'components/msfavorites/\');
/** @var msFavorites $msFavorites */
$msFavorites = $modx->getService(\'msfavorites\', \'msFavorites\', $corePath . \'model/msfavorites/\',
    [\'core_path\' => $corePath]);
if (!$msFavorites OR !($msFavorites instanceof msFavorites)) {
    return \'Could not load msFavorites class!\';
}

if (empty($uid) OR $uid == \'\') {
    $uid = $modx->user->id;
    if (!$modx->user->isAuthenticated($modx->context->key)) {
        $uid = session_id();
    }
}
$list = $modx->getOption(\'list\', $scriptProperties, \'default\', true);
$sortby = $modx->getOption(\'sortby\', $scriptProperties);


$query = [
    \'list\' => $list,
    \'uid\'  => $uid,
];

$data = $msFavorites->getResourceFavoritesOutput($query, true, $sortby);
$msFavorites->setPlaceholders($data);

$data = @$data[\'list\'][$list];
if (empty($data)) {
    $data = \'-0\';
}

if (!empty($toPlaceholder)) {
    $modx->setPlaceholder($toPlaceholder, $data);

    return \'\';
}

return $data;',
    ),
  ),
  'e04518d538ee2bb1a89a36e9f0e922d0' => 
  array (
    'criteria' => 
    array (
      'name' => 'msFavorites',
    ),
    'object' => 
    array (
      'id' => 43,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'msFavorites',
      'description' => '',
      'editor_type' => 0,
      'category' => 28,
      'cache_type' => 0,
      'plugincode' => '/** @var array $scriptProperties */
$corePath = $modx->getOption(\'msfavorites_core_path\', null,
    $modx->getOption(\'core_path\', null, MODX_CORE_PATH) . \'components/msfavorites/\');
/** @var msFavorites $msFavorites */
$msFavorites = $modx->getService(\'msfavorites\', \'msFavorites\', $corePath . \'model/msfavorites/\',
    array(\'core_path\' => $corePath));
if (!$msFavorites OR !($msFavorites instanceof msFavorites)) {
    return false;
}

$className = \'msFavorites\' . $modx->event->name;
$modx->loadClass(\'msFavoritesPlugin\', $msFavorites->getOption(\'modelPath\') . \'msfavorites/systems/\', true,
    true);
$modx->loadClass($className, $msFavorites->getOption(\'modelPath\') . \'msfavorites/systems/\', true, true);
if (class_exists($className)) {
    /** @var msFavoritesPlugin $handler */
    $handler = new $className($modx, $scriptProperties);
    $handler->run();
}
return;',
      'locked' => 0,
      'properties' => NULL,
      'disabled' => 0,
      'moduleguid' => '',
      'static' => 0,
      'static_file' => 'core/components/msfavorites/elements/plugins/plugin.msfavorites.php',
      'content' => '/** @var array $scriptProperties */
$corePath = $modx->getOption(\'msfavorites_core_path\', null,
    $modx->getOption(\'core_path\', null, MODX_CORE_PATH) . \'components/msfavorites/\');
/** @var msFavorites $msFavorites */
$msFavorites = $modx->getService(\'msfavorites\', \'msFavorites\', $corePath . \'model/msfavorites/\',
    array(\'core_path\' => $corePath));
if (!$msFavorites OR !($msFavorites instanceof msFavorites)) {
    return false;
}

$className = \'msFavorites\' . $modx->event->name;
$modx->loadClass(\'msFavoritesPlugin\', $msFavorites->getOption(\'modelPath\') . \'msfavorites/systems/\', true,
    true);
$modx->loadClass($className, $msFavorites->getOption(\'modelPath\') . \'msfavorites/systems/\', true, true);
if (class_exists($className)) {
    /** @var msFavoritesPlugin $handler */
    $handler = new $className($modx, $scriptProperties);
    $handler->run();
}
return;',
    ),
  ),
  'f9d7a16c3e8b43c35f9b0523f1442abb' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 43,
      'event' => 'OnEmptyTrash',
    ),
    'object' => 
    array (
      'pluginid' => 43,
      'event' => 'OnEmptyTrash',
      'priority' => 10,
      'propertyset' => 0,
    ),
  ),
  'c6b848796510857e23adbb71c4c203d3' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 43,
      'event' => 'OnUserRemove',
    ),
    'object' => 
    array (
      'pluginid' => 43,
      'event' => 'OnUserRemove',
      'priority' => 10,
      'propertyset' => 0,
    ),
  ),
  '7353ef3f54413684e97c6067b1789621' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 43,
      'event' => 'OnCacheUpdate',
    ),
    'object' => 
    array (
      'pluginid' => 43,
      'event' => 'OnCacheUpdate',
      'priority' => 10,
      'propertyset' => 0,
    ),
  ),
);