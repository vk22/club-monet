<?php return array (
  'cd116ad60082c8f2a39e9fef298cf6e8' => 
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
  '3db77e798e749fbb2807c08eaf4c96ff' => 
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
  '58bb6782be40e5d8c60136738e3a7cb1' => 
  array (
    'criteria' => 
    array (
      'key' => 'msfavorites_front_js',
    ),
    'object' => 
    array (
      'key' => 'msfavorites_front_js',
      'value' => '[[+assetsUrl]]js/default.js',
      'xtype' => 'textfield',
      'namespace' => 'msfavorites',
      'area' => 'msfavorites_main',
      'editedon' => '2019-07-05 13:59:41',
    ),
  ),
  '7787d1964b0b8c5edb34ab1a617490ee' => 
  array (
    'criteria' => 
    array (
      'key' => 'msfavorites_clear_anon',
    ),
    'object' => 
    array (
      'key' => 'msfavorites_clear_anon',
      'value' => '1',
      'xtype' => 'combo-boolean',
      'namespace' => 'msfavorites',
      'area' => 'msfavorites_main',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  '1c34b7d77e794d8b43daf034d4bf387c' => 
  array (
    'criteria' => 
    array (
      'key' => 'msfavorites_limit_anon',
    ),
    'object' => 
    array (
      'key' => 'msfavorites_limit_anon',
      'value' => '30',
      'xtype' => 'textfield',
      'namespace' => 'msfavorites',
      'area' => 'msfavorites_main',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  'acbae41b36c3f51bb98f2fc4eb40ac99' => 
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
  '342e94874e8fdff630406c79560c5ee5' => 
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
  'd786077cc30de452a5ce4575827d7081' => 
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
  '30fdc9b23abae09890846bc8cc07eb83' => 
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
/** @var msFavorites $msFavorites */
if (!$msFavorites = $modx->getService(\'msfavorites.msFavorites\', \'\', MODX_CORE_PATH . \'components/msfavorites/model/\')) {
    return \'Could not load msFavorites class!\';
}
$msFavorites->initialize($modx->context->key, $scriptProperties);',
      'locked' => 0,
      'properties' => 'a:3:{s:8:"frontCss";a:7:{s:4:"name";s:8:"frontCss";s:4:"desc";s:25:"msfavorites_prop_frontCss";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:0:"";s:7:"lexicon";s:22:"msfavorites:properties";s:4:"area";s:0:"";}s:7:"frontJs";a:7:{s:4:"name";s:7:"frontJs";s:4:"desc";s:24:"msfavorites_prop_frontJs";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:0:"";s:7:"lexicon";s:22:"msfavorites:properties";s:4:"area";s:0:"";}s:9:"actionUrl";a:7:{s:4:"name";s:9:"actionUrl";s:4:"desc";s:26:"msfavorites_prop_actionUrl";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:24:"[[+assetsUrl]]action.php";s:7:"lexicon";s:22:"msfavorites:properties";s:4:"area";s:0:"";}}',
      'moduleguid' => '',
      'static' => 0,
      'static_file' => 'core/components/msfavorites/elements/snippets/snippet.msfavorites.initialize.php',
      'content' => '/** @var array $scriptProperties */
/** @var msFavorites $msFavorites */
if (!$msFavorites = $modx->getService(\'msfavorites.msFavorites\', \'\', MODX_CORE_PATH . \'components/msfavorites/model/\')) {
    return \'Could not load msFavorites class!\';
}
$msFavorites->initialize($modx->context->key, $scriptProperties);',
    ),
  ),
  '12718294e1287820eced15a0938f477a' => 
  array (
    'criteria' => 
    array (
      'name' => 'msFavorites.objects',
    ),
    'object' => 
    array (
      'id' => 117,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'msFavorites.objects',
      'description' => '',
      'editor_type' => 0,
      'category' => 28,
      'cache_type' => 0,
      'snippet' => '/** @var array $scriptProperties */
/** @var msFavorites $msFavorites */
if (!$msFavorites = $modx->getService(\'msfavorites.msFavorites\', \'\', MODX_CORE_PATH . \'components/msfavorites/model/\')) {
    return \'Could not load msFavorites class!\';
}
/** @var pdoFetch $pdoFetch */
if (!$modx->loadClass(\'pdofetch\', MODX_CORE_PATH . \'components/pdotools/model/pdotools/\', false, true)) {
    return false;
}
$pdoFetch = new pdoFetch($modx, $scriptProperties);
$pdoFetch->addTime(\'pdoTools loaded.\');


if (!empty($returnIds)) {
    $return = \'ids\';
} elseif (!isset($return) OR $return === \'\') {
    $return = \'data\';
}
if ($return === \'ids\') {
    $returnIds = 1;
}

if (!isset($list) OR $list == \'\') {
    $list = \'default\';
}
if (!isset($type) OR $type == \'\') {
    $type = \'resource\';
}
if (!isset($uid) OR $uid == \'\') {
    $uid = $modx->user->isAuthenticated($modx->context->key) ? $modx->user->id : session_id();
}
if (!isset($outputSeparator)) {
    $outputSeparator = "\\n";
}
if (!isset($processAll)) {
    $processAll = \'\';
}
if (!isset($processObjectExtra)) {
    $processObjectExtra = \'\';
}
if (!isset($groupKey)) {
    $groupKey = \'\';
}

// Start build "where" expression
$where = [];

if (!empty($list)) {
    $list = is_array($list) ? $list : array_map(\'trim\', explode(\',\', $list));
    $where[\'FavoriteList.list:IN\'] = $list;
}
if (!empty($type)) {
    $type = is_array($type) ? $type : array_map(\'trim\', explode(\',\', $type));
    $where[\'FavoriteList.type:IN\'] = $type;
}
if (!empty($uid)) {
    $uid = is_array($uid) ? $uid : array_map(\'trim\', explode(\',\', $uid));
    $where[\'msfFavoriteObject.uid:IN\'] = $uid;
}

if (!empty($ids)) {
    $ids = is_array($ids) ? $ids : array_map(\'trim\', explode(\',\', $ids));
    $ids_out = $ids_in = [];
    foreach ($ids as $v) {
        if ($v == \'\') {
            continue;
        }
        if ($v[0] == \'-\') {
            $ids_out[] = substr($v, 1);
        } else {
            $ids_in[] = $v;
        }
    }
    if (!empty($ids_in)) {
        $where[\'FavoriteKey.key:IN\'] = $ids_in;
    }
    if (!empty($ids_out)) {
        $where[\'FavoriteKey.key:NOT IN\'] = $ids_out;
    }
}

// Add grouping
$groupby = [];

// Join tables
$leftJoin = [
    \'FavoriteList\' => [\'class\' => \'msfFavoriteList\'],
    \'FavoriteKey\'  => [\'class\' => \'msfFavoriteKey\'],
];

$innerJoin = [];

$select = [
    \'msfFavoriteObject\' => $modx->getSelectColumns(\'msfFavoriteObject\', \'msfFavoriteObject\', \'\', [\'lid\', \'kid\'], true),//
    \'FavoriteList\'      => $modx->getSelectColumns(\'msfFavoriteList\', \'FavoriteList\', \'\', [\'id\'], true),
    \'FavoriteKey\'       => $modx->getSelectColumns(\'msfFavoriteKey\', \'FavoriteKey\', \'\', [\'key\'], false),
];

if (!empty($processObjectExtra) AND empty($returnIds)) {
    $leftJoin[\'FavoriteObjectExtra\'] = [
        \'class\' => \'msfFavoriteObjectExtra\',
        \'on\'    => \'FavoriteObjectExtra.lid=msfFavoriteObject.lid AND FavoriteObjectExtra.kid=msfFavoriteObject.kid AND FavoriteObjectExtra.uid=msfFavoriteObject.uid\',
    ];
    $select[\'FavoriteObjectExtra\'] = $modx->getSelectColumns(\'msfFavoriteObjectExtra\', \'FavoriteObjectExtra\', \'\', [\'extra\'], false);
}

// Add user parameters
foreach ([\'where\', \'leftJoin\', \'innerJoin\', \'select\', \'groupby\'] as $v) {
    if (!empty($scriptProperties[$v])) {
        $tmp = $scriptProperties[$v];
        if (!is_array($tmp)) {
            $tmp = json_decode($tmp, true);
        }
        if (is_array($tmp)) {
            $$v = array_merge($$v, $tmp);
        }
    }
    unset($scriptProperties[$v]);
}
$pdoFetch->addTime(\'Conditions prepared\');

$config = array_merge([
    \'class\'             => \'msfFavoriteObject\',
    \'where\'             => $where,
    \'leftJoin\'          => $leftJoin,
    \'innerJoin\'         => $innerJoin,
    \'select\'            => $select,
    \'sortby\'            => \'createdon\',
    \'sortdir\'           => \'ASC\',
    \'groupby\'           => implode(\', \', $groupby),
    \'nestedChunkPrefix\' => \'msfavorites_\',
], $scriptProperties, [\'return\' => \'data\']);
$pdoFetch->setConfig($config, false);
$rows = $pdoFetch->run();


// Process rows
if (!empty($rows) AND is_array($rows)) {
    $rowsGroup = [];
    foreach ($rows as $k => $row) {
        $row[\'idx\'] = $pdoFetch->idx++;

        foreach ([\'extra\'] as $s) {
            $row[$s] = !empty($row[$s]) ? unserialize($row[$s]) : [];
        }

        // group
        if (empty($groupKey)) {
            if (empty($returnIds)) {
                $rows[$k] = $row;
            } else {
                $rows[$k] = $row[\'key\'];
            }
        } else {
            if (!isset($rowsGroup[$row[$groupKey]])) {
                $rowsGroup[$row[$groupKey]] = [];
            }

            if (empty($returnIds)) {
                $rowsGroup[$row[$groupKey]][] = $row;
            } else {
                $rowsGroup[$row[$groupKey]][] = $row[\'key\'];
            }
        }
    }

    // group
    if (!empty($groupKey)) {
        $rows = $rowsGroup;
        if (!empty($returnIds)) {
            $rows = call_user_func_array(\'array_merge\', $rows);
        }
    }

}


$log = \'\';
if ($modx->user->hasSessionContext(\'mgr\') && !empty($showLog)) {
    $log .= \'<pre class="msFavoritesLog">\' . print_r($pdoFetch->getTime(), 1) . \'</pre>\';
}

$output = [];
switch ($return) {
    case \'ids\':
        $output = is_string($rows) ? $rows : implode(\',\', $rows);
        $modx->setPlaceholder(\'msFavorites.log\', $log);
        if (!empty($toPlaceholder)) {
            $modx->setPlaceholder($toPlaceholder, $output);
            $output = \'\';
        }
        break;
    case \'data\':
        $output = $rows;
        break;
    case \'json\':
        $output = json_encode($rows, true);
        break;
    default:
        if (!empty($processAll)) {
            $output[] = $pdoFetch->getChunk($tpl, [\'rows\' => $rows]);
        } else {
            foreach ($rows as $row) {
                $tpl = $pdoFetch->defineChunk($row);
                $output[] = $pdoFetch->getChunk($tpl, $row);
            }
        }

        if (!empty($toSeparatePlaceholders)) {
            $output[\'log\'] = $log;
            $modx->setPlaceholders($output, $toSeparatePlaceholders);
            $output = \'\';
        } else {
            $output[\'log\'] = $log;
            $output = implode($outputSeparator, $output);
            if (!empty($tplWrapper) && (!empty($wrapIfEmpty) || !empty($output))) {
                $output = $pdoFetch->getChunk($tplWrapper, [
                    \'output\' => $output,
                ]);
            }
            if (!empty($toPlaceholder)) {
                $modx->setPlaceholder($toPlaceholder, $output);
                $output = \'\';
            }
        }
        break;
}

return $output;',
      'locked' => 0,
      'properties' => 'a:6:{s:4:"list";a:7:{s:4:"name";s:4:"list";s:4:"desc";s:21:"msfavorites_prop_list";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:7:"default";s:7:"lexicon";s:22:"msfavorites:properties";s:4:"area";s:0:"";}s:4:"type";a:7:{s:4:"name";s:4:"type";s:4:"desc";s:21:"msfavorites_prop_type";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:8:"resource";s:7:"lexicon";s:22:"msfavorites:properties";s:4:"area";s:0:"";}s:3:"uid";a:7:{s:4:"name";s:3:"uid";s:4:"desc";s:20:"msfavorites_prop_uid";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:0:"";s:7:"lexicon";s:22:"msfavorites:properties";s:4:"area";s:0:"";}s:6:"sortby";a:7:{s:4:"name";s:6:"sortby";s:4:"desc";s:23:"msfavorites_prop_sortby";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:20:"{"createdon": "ASC"}";s:7:"lexicon";s:22:"msfavorites:properties";s:4:"area";s:0:"";}s:9:"returnIds";a:7:{s:4:"name";s:9:"returnIds";s:4:"desc";s:26:"msfavorites_prop_returnIds";s:4:"type";s:13:"combo-boolean";s:7:"options";a:0:{}s:5:"value";b:0;s:7:"lexicon";s:22:"msfavorites:properties";s:4:"area";s:0:"";}s:13:"toPlaceholder";a:7:{s:4:"name";s:13:"toPlaceholder";s:4:"desc";s:30:"msfavorites_prop_toPlaceholder";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:0:"";s:7:"lexicon";s:22:"msfavorites:properties";s:4:"area";s:0:"";}}',
      'moduleguid' => '',
      'static' => 0,
      'static_file' => 'core/components/msfavorites/elements/snippets/snippet.msfavorites.objects.php',
      'content' => '/** @var array $scriptProperties */
/** @var msFavorites $msFavorites */
if (!$msFavorites = $modx->getService(\'msfavorites.msFavorites\', \'\', MODX_CORE_PATH . \'components/msfavorites/model/\')) {
    return \'Could not load msFavorites class!\';
}
/** @var pdoFetch $pdoFetch */
if (!$modx->loadClass(\'pdofetch\', MODX_CORE_PATH . \'components/pdotools/model/pdotools/\', false, true)) {
    return false;
}
$pdoFetch = new pdoFetch($modx, $scriptProperties);
$pdoFetch->addTime(\'pdoTools loaded.\');


if (!empty($returnIds)) {
    $return = \'ids\';
} elseif (!isset($return) OR $return === \'\') {
    $return = \'data\';
}
if ($return === \'ids\') {
    $returnIds = 1;
}

if (!isset($list) OR $list == \'\') {
    $list = \'default\';
}
if (!isset($type) OR $type == \'\') {
    $type = \'resource\';
}
if (!isset($uid) OR $uid == \'\') {
    $uid = $modx->user->isAuthenticated($modx->context->key) ? $modx->user->id : session_id();
}
if (!isset($outputSeparator)) {
    $outputSeparator = "\\n";
}
if (!isset($processAll)) {
    $processAll = \'\';
}
if (!isset($processObjectExtra)) {
    $processObjectExtra = \'\';
}
if (!isset($groupKey)) {
    $groupKey = \'\';
}

// Start build "where" expression
$where = [];

if (!empty($list)) {
    $list = is_array($list) ? $list : array_map(\'trim\', explode(\',\', $list));
    $where[\'FavoriteList.list:IN\'] = $list;
}
if (!empty($type)) {
    $type = is_array($type) ? $type : array_map(\'trim\', explode(\',\', $type));
    $where[\'FavoriteList.type:IN\'] = $type;
}
if (!empty($uid)) {
    $uid = is_array($uid) ? $uid : array_map(\'trim\', explode(\',\', $uid));
    $where[\'msfFavoriteObject.uid:IN\'] = $uid;
}

if (!empty($ids)) {
    $ids = is_array($ids) ? $ids : array_map(\'trim\', explode(\',\', $ids));
    $ids_out = $ids_in = [];
    foreach ($ids as $v) {
        if ($v == \'\') {
            continue;
        }
        if ($v[0] == \'-\') {
            $ids_out[] = substr($v, 1);
        } else {
            $ids_in[] = $v;
        }
    }
    if (!empty($ids_in)) {
        $where[\'FavoriteKey.key:IN\'] = $ids_in;
    }
    if (!empty($ids_out)) {
        $where[\'FavoriteKey.key:NOT IN\'] = $ids_out;
    }
}

// Add grouping
$groupby = [];

// Join tables
$leftJoin = [
    \'FavoriteList\' => [\'class\' => \'msfFavoriteList\'],
    \'FavoriteKey\'  => [\'class\' => \'msfFavoriteKey\'],
];

$innerJoin = [];

$select = [
    \'msfFavoriteObject\' => $modx->getSelectColumns(\'msfFavoriteObject\', \'msfFavoriteObject\', \'\', [\'lid\', \'kid\'], true),//
    \'FavoriteList\'      => $modx->getSelectColumns(\'msfFavoriteList\', \'FavoriteList\', \'\', [\'id\'], true),
    \'FavoriteKey\'       => $modx->getSelectColumns(\'msfFavoriteKey\', \'FavoriteKey\', \'\', [\'key\'], false),
];

if (!empty($processObjectExtra) AND empty($returnIds)) {
    $leftJoin[\'FavoriteObjectExtra\'] = [
        \'class\' => \'msfFavoriteObjectExtra\',
        \'on\'    => \'FavoriteObjectExtra.lid=msfFavoriteObject.lid AND FavoriteObjectExtra.kid=msfFavoriteObject.kid AND FavoriteObjectExtra.uid=msfFavoriteObject.uid\',
    ];
    $select[\'FavoriteObjectExtra\'] = $modx->getSelectColumns(\'msfFavoriteObjectExtra\', \'FavoriteObjectExtra\', \'\', [\'extra\'], false);
}

// Add user parameters
foreach ([\'where\', \'leftJoin\', \'innerJoin\', \'select\', \'groupby\'] as $v) {
    if (!empty($scriptProperties[$v])) {
        $tmp = $scriptProperties[$v];
        if (!is_array($tmp)) {
            $tmp = json_decode($tmp, true);
        }
        if (is_array($tmp)) {
            $$v = array_merge($$v, $tmp);
        }
    }
    unset($scriptProperties[$v]);
}
$pdoFetch->addTime(\'Conditions prepared\');

$config = array_merge([
    \'class\'             => \'msfFavoriteObject\',
    \'where\'             => $where,
    \'leftJoin\'          => $leftJoin,
    \'innerJoin\'         => $innerJoin,
    \'select\'            => $select,
    \'sortby\'            => \'createdon\',
    \'sortdir\'           => \'ASC\',
    \'groupby\'           => implode(\', \', $groupby),
    \'nestedChunkPrefix\' => \'msfavorites_\',
], $scriptProperties, [\'return\' => \'data\']);
$pdoFetch->setConfig($config, false);
$rows = $pdoFetch->run();


// Process rows
if (!empty($rows) AND is_array($rows)) {
    $rowsGroup = [];
    foreach ($rows as $k => $row) {
        $row[\'idx\'] = $pdoFetch->idx++;

        foreach ([\'extra\'] as $s) {
            $row[$s] = !empty($row[$s]) ? unserialize($row[$s]) : [];
        }

        // group
        if (empty($groupKey)) {
            if (empty($returnIds)) {
                $rows[$k] = $row;
            } else {
                $rows[$k] = $row[\'key\'];
            }
        } else {
            if (!isset($rowsGroup[$row[$groupKey]])) {
                $rowsGroup[$row[$groupKey]] = [];
            }

            if (empty($returnIds)) {
                $rowsGroup[$row[$groupKey]][] = $row;
            } else {
                $rowsGroup[$row[$groupKey]][] = $row[\'key\'];
            }
        }
    }

    // group
    if (!empty($groupKey)) {
        $rows = $rowsGroup;
        if (!empty($returnIds)) {
            $rows = call_user_func_array(\'array_merge\', $rows);
        }
    }

}


$log = \'\';
if ($modx->user->hasSessionContext(\'mgr\') && !empty($showLog)) {
    $log .= \'<pre class="msFavoritesLog">\' . print_r($pdoFetch->getTime(), 1) . \'</pre>\';
}

$output = [];
switch ($return) {
    case \'ids\':
        $output = is_string($rows) ? $rows : implode(\',\', $rows);
        $modx->setPlaceholder(\'msFavorites.log\', $log);
        if (!empty($toPlaceholder)) {
            $modx->setPlaceholder($toPlaceholder, $output);
            $output = \'\';
        }
        break;
    case \'data\':
        $output = $rows;
        break;
    case \'json\':
        $output = json_encode($rows, true);
        break;
    default:
        if (!empty($processAll)) {
            $output[] = $pdoFetch->getChunk($tpl, [\'rows\' => $rows]);
        } else {
            foreach ($rows as $row) {
                $tpl = $pdoFetch->defineChunk($row);
                $output[] = $pdoFetch->getChunk($tpl, $row);
            }
        }

        if (!empty($toSeparatePlaceholders)) {
            $output[\'log\'] = $log;
            $modx->setPlaceholders($output, $toSeparatePlaceholders);
            $output = \'\';
        } else {
            $output[\'log\'] = $log;
            $output = implode($outputSeparator, $output);
            if (!empty($tplWrapper) && (!empty($wrapIfEmpty) || !empty($output))) {
                $output = $pdoFetch->getChunk($tplWrapper, [
                    \'output\' => $output,
                ]);
            }
            if (!empty($toPlaceholder)) {
                $modx->setPlaceholder($toPlaceholder, $output);
                $output = \'\';
            }
        }
        break;
}

return $output;',
    ),
  ),
  'f19c9f0109c99d4cab1225190d8a4cfc' => 
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
/** @var msFavorites $msFavorites */
if (!$msFavorites = $modx->getService(\'msfavorites.msFavorites\', \'\', MODX_CORE_PATH . \'components/msfavorites/model/\')) {
    return \'Could not load msFavorites class!\';
}
/** @var pdoFetch $pdoFetch */
if (!$modx->loadClass(\'pdofetch\', MODX_CORE_PATH . \'components/pdotools/model/pdotools/\', false, true)) {
    return false;
}

if (!empty($returnIds)) {
    $return = \'ids\';
}
if ($return === \'ids\') {
    $returnIds = 1;
}

if (!isset($list) OR $list == \'\') {
    $list = \'default\';
}
if (!isset($type) OR $type == \'\') {
    $type = \'resource\';
}

$list = is_array($list) ? $list : array_map(\'trim\', explode(\',\', $list));
$rows = $modx->runSnippet(\'msFavorites.objects\', array_merge($scriptProperties, [\'return\' => \'data\', \'list\' => $list, \'type\' => $type, \'groupKey\' => \'list\']));
$pls = [
    \'list\'  => [],
    \'total\' => [],
];
foreach ($list as $l) {
    $keys = !empty($rows[$l]) ? array_column($rows[$l], \'key\') : [];
    $pls[\'list\'][$l] = !empty($keys) ? implode(\',\', $keys) : \'-0\';
    $pls[\'total\'][$l] = count($keys);
}
$msFavorites->setPlaceholders($pls);

$log = \'\';
if ($modx->user->hasSessionContext(\'mgr\') && !empty($showLog)) {
    $log .= \'<pre class="msFavoritesLog">\' . print_r($pdoFetch->getTime(), 1) . \'</pre>\';
}
$modx->setPlaceholder(\'msFavorites.log\', $log);

$output = [];
switch ($return) {
    case \'data\':
        $output = $pls;
        break;
    case \'json\':
        $output = json_encode($pls, true);
        break;
    case \'ids\':
    default:
        $output = reset($pls[\'list\']);
        if (!empty($toPlaceholder)) {
            $modx->setPlaceholder($toPlaceholder, $output);
            $output = \'\';
        }
        break;
}

return $output;',
      'locked' => 0,
      'properties' => 'a:3:{s:4:"list";a:7:{s:4:"name";s:4:"list";s:4:"desc";s:21:"msfavorites_prop_list";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:0:"";s:7:"lexicon";s:22:"msfavorites:properties";s:4:"area";s:0:"";}s:6:"sortby";a:7:{s:4:"name";s:6:"sortby";s:4:"desc";s:23:"msfavorites_prop_sortby";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:20:"{"createdon": "ASC"}";s:7:"lexicon";s:22:"msfavorites:properties";s:4:"area";s:0:"";}s:13:"toPlaceholder";a:7:{s:4:"name";s:13:"toPlaceholder";s:4:"desc";s:30:"msfavorites_prop_toPlaceholder";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:0:"";s:7:"lexicon";s:22:"msfavorites:properties";s:4:"area";s:0:"";}}',
      'moduleguid' => '',
      'static' => 0,
      'static_file' => 'core/components/msfavorites/elements/snippets/snippet.msfavorites.ids.php',
      'content' => '/** @var array $scriptProperties */
/** @var msFavorites $msFavorites */
if (!$msFavorites = $modx->getService(\'msfavorites.msFavorites\', \'\', MODX_CORE_PATH . \'components/msfavorites/model/\')) {
    return \'Could not load msFavorites class!\';
}
/** @var pdoFetch $pdoFetch */
if (!$modx->loadClass(\'pdofetch\', MODX_CORE_PATH . \'components/pdotools/model/pdotools/\', false, true)) {
    return false;
}

if (!empty($returnIds)) {
    $return = \'ids\';
}
if ($return === \'ids\') {
    $returnIds = 1;
}

if (!isset($list) OR $list == \'\') {
    $list = \'default\';
}
if (!isset($type) OR $type == \'\') {
    $type = \'resource\';
}

$list = is_array($list) ? $list : array_map(\'trim\', explode(\',\', $list));
$rows = $modx->runSnippet(\'msFavorites.objects\', array_merge($scriptProperties, [\'return\' => \'data\', \'list\' => $list, \'type\' => $type, \'groupKey\' => \'list\']));
$pls = [
    \'list\'  => [],
    \'total\' => [],
];
foreach ($list as $l) {
    $keys = !empty($rows[$l]) ? array_column($rows[$l], \'key\') : [];
    $pls[\'list\'][$l] = !empty($keys) ? implode(\',\', $keys) : \'-0\';
    $pls[\'total\'][$l] = count($keys);
}
$msFavorites->setPlaceholders($pls);

$log = \'\';
if ($modx->user->hasSessionContext(\'mgr\') && !empty($showLog)) {
    $log .= \'<pre class="msFavoritesLog">\' . print_r($pdoFetch->getTime(), 1) . \'</pre>\';
}
$modx->setPlaceholder(\'msFavorites.log\', $log);

$output = [];
switch ($return) {
    case \'data\':
        $output = $pls;
        break;
    case \'json\':
        $output = json_encode($pls, true);
        break;
    case \'ids\':
    default:
        $output = reset($pls[\'list\']);
        if (!empty($toPlaceholder)) {
            $modx->setPlaceholder($toPlaceholder, $output);
            $output = \'\';
        }
        break;
}

return $output;',
    ),
  ),
  'ee3b19cdfd702d3d433d227e8f9d19ca' => 
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
/** @var msFavorites $msFavorites */
if ($msFavorites = $modx->getService(\'msfavorites.msFavorites\', \'\', MODX_CORE_PATH . \'components/msfavorites/model/\')) {
    return $msFavorites->processEvent($modx->event, $scriptProperties);
}',
      'locked' => 0,
      'properties' => NULL,
      'disabled' => 0,
      'moduleguid' => '',
      'static' => 0,
      'static_file' => 'core/components/msfavorites/elements/plugins/plugin.msfavorites.php',
      'content' => '/** @var array $scriptProperties */
/** @var msFavorites $msFavorites */
if ($msFavorites = $modx->getService(\'msfavorites.msFavorites\', \'\', MODX_CORE_PATH . \'components/msfavorites/model/\')) {
    return $msFavorites->processEvent($modx->event, $scriptProperties);
}',
    ),
  ),
  'c0c14971de4bc3345b2701318d0f5831' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 43,
      'event' => 'OnHandleRequest',
    ),
    'object' => 
    array (
      'pluginid' => 43,
      'event' => 'OnHandleRequest',
      'priority' => 10,
      'propertyset' => 0,
    ),
  ),
  'e6ddb8c183ca6ce53fb8ebe624c6d4d4' => 
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
  'fc16a74605775c7f1956ae12c80118ed' => 
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
  '9f369676912ab45695583010522f7c1f' => 
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
  '0834107cdc543ab4cb3d41721222d274' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 43,
      'event' => 'OnWebLogin',
    ),
    'object' => 
    array (
      'pluginid' => 43,
      'event' => 'OnWebLogin',
      'priority' => 10,
      'propertyset' => 0,
    ),
  ),
);