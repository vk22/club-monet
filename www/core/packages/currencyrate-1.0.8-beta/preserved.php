<?php return array (
  '669d1e9f1f2ff777b33afdb2dce3098d' => 
  array (
    'criteria' => 
    array (
      'name' => 'currencyrate',
    ),
    'object' => 
    array (
      'name' => 'currencyrate',
      'path' => '{core_path}components/currencyrate/',
      'assets_path' => '',
    ),
  ),
  '9e4a8355ae97355f67255dd3c193051b' => 
  array (
    'criteria' => 
    array (
      'key' => 'currencyrate_active',
    ),
    'object' => 
    array (
      'key' => 'currencyrate_active',
      'value' => '1',
      'xtype' => 'combo-boolean',
      'namespace' => 'currencyrate',
      'area' => 'currencyrate_main',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  '211d5005afe1ca9b43c23f2fc217e5b3' => 
  array (
    'criteria' => 
    array (
      'key' => 'currencyrate_url',
    ),
    'object' => 
    array (
      'key' => 'currencyrate_url',
      'value' => 'http://www.cbr.ru/scripts/XML_daily.asp?date_req=',
      'xtype' => 'textfield',
      'namespace' => 'currencyrate',
      'area' => 'currencyrate_main',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  '1e82f19faf88bf1ab561fdc6f7bf3f97' => 
  array (
    'criteria' => 
    array (
      'key' => 'currencyrate_last_date',
    ),
    'object' => 
    array (
      'key' => 'currencyrate_last_date',
      'value' => '',
      'xtype' => 'textfield',
      'namespace' => 'currencyrate',
      'area' => 'currencyrate_main',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  '55a357be18d366c55a8dd5f141a04f4c' => 
  array (
    'criteria' => 
    array (
      'key' => 'currencyrate_password',
    ),
    'object' => 
    array (
      'key' => 'currencyrate_password',
      'value' => '12345',
      'xtype' => 'textfield',
      'namespace' => 'currencyrate',
      'area' => 'currencyrate_main',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  'b404815c75e1d57b3d983e521c7efd85' => 
  array (
    'criteria' => 
    array (
      'key' => 'currencyrate_currency',
    ),
    'object' => 
    array (
      'key' => 'currencyrate_currency',
      'value' => 'RUB',
      'xtype' => 'textfield',
      'namespace' => 'currencyrate',
      'area' => 'currencyrate_main',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  'ed6f4b9ea9a7e5a24dcfe39587294f51' => 
  array (
    'criteria' => 
    array (
      'key' => 'currencyrate_front_js',
    ),
    'object' => 
    array (
      'key' => 'currencyrate_front_js',
      'value' => '[[+assetsUrl]]js/web/default.js',
      'xtype' => 'textfield',
      'namespace' => 'currencyrate',
      'area' => 'currencyrate_main',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  '554d9f9b22e14944e1ae9414824d911a' => 
  array (
    'criteria' => 
    array (
      'key' => 'currencyrate_front_css',
    ),
    'object' => 
    array (
      'key' => 'currencyrate_front_css',
      'value' => '[[+assetsUrl]]css/web/default.css',
      'xtype' => 'textfield',
      'namespace' => 'currencyrate',
      'area' => 'currencyrate_main',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  '6dbbfbb5fc9b1fb1450361749ee0ebdd' => 
  array (
    'criteria' => 
    array (
      'namespace' => 'currencyrate',
      'controller' => 'index',
    ),
    'object' => 
    array (
      'id' => 6,
      'namespace' => 'currencyrate',
      'controller' => 'index',
      'haslayout' => 1,
      'lang_topics' => 'currencyrate:default',
      'assets' => '',
      'help_url' => '',
    ),
  ),
  'c93ee9fdf150d66b1ece9d54aa3893a2' => 
  array (
    'criteria' => 
    array (
      'text' => 'currencyrate',
    ),
    'object' => 
    array (
      'text' => 'currencyrate',
      'parent' => 'components',
      'action' => '6',
      'description' => 'currencyrate_menu_desc',
      'icon' => 'images/icons/plugin.gif',
      'menuindex' => 0,
      'params' => '',
      'handler' => '',
      'permissions' => '',
      'namespace' => 'core',
    ),
  ),
  '198802805b9254d449cb6cc0497d7491' => 
  array (
    'criteria' => 
    array (
      'category' => 'currencyrate',
    ),
    'object' => 
    array (
      'id' => 6,
      'parent' => 0,
      'category' => 'currencyrate',
      'rank' => 0,
    ),
  ),
  'cfbc7abb6704188e29a781554229f2fa' => 
  array (
    'criteria' => 
    array (
      'name' => 'tpl.crList.row',
    ),
    'object' => 
    array (
      'id' => 44,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'tpl.crList.row',
      'description' => '',
      'editor_type' => 0,
      'category' => 6,
      'cache_type' => 0,
      'snippet' => '<option value="[[+charcode]]" [[+selected]]>[[+charcode]]</option>',
      'locked' => 0,
      'properties' => NULL,
      'static' => 0,
      'static_file' => 'core/components/currencyrate/elements/chunks/chunk.list_row.tpl',
      'content' => '<option value="[[+charcode]]" [[+selected]]>[[+charcode]]</option>',
    ),
  ),
  '71b47420615db5b9ba7b3ae72a52eff9' => 
  array (
    'criteria' => 
    array (
      'name' => 'tpl.crList.outer',
    ),
    'object' => 
    array (
      'id' => 45,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'tpl.crList.outer',
      'description' => '',
      'editor_type' => 0,
      'category' => 6,
      'cache_type' => 0,
      'snippet' => '<div class="form-group">
    <div class="col-sm-1">
        <select name="currency_rate" class="form-control">[[+rows]]</select>
    </div>
</div>',
      'locked' => 0,
      'properties' => NULL,
      'static' => 0,
      'static_file' => 'core/components/currencyrate/elements/chunks/chunk.list_outer.tpl',
      'content' => '<div class="form-group">
    <div class="col-sm-1">
        <select name="currency_rate" class="form-control">[[+rows]]</select>
    </div>
</div>',
    ),
  ),
  '18bace78c6bb01dbf481071380677650' => 
  array (
    'criteria' => 
    array (
      'name' => 'CRcalc',
    ),
    'object' => 
    array (
      'id' => 33,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'CRcalc',
      'description' => '',
      'editor_type' => 0,
      'category' => 6,
      'cache_type' => 0,
      'snippet' => '/** @var array $scriptProperties */
/** @var currencyrate $currencyrate */
if (!$currencyrate = $modx->getService(\'currencyrate\', \'currencyrate\', $modx->getOption(\'currencyrate_core_path\', null, $modx->getOption(\'core_path\') . \'components/currencyrate/\') . \'model/currencyrate/\', $scriptProperties)) {
	return \'Could not load currencyrate class!\';
}
if(empty($input)) {return \'\';}
$list = $currencyrate->getList();
if(!empty($multiplier)) {
	$multiplier = $list[$multiplier];
	$output = $currencyrate->formatPrice(($input * $multiplier), $format, $noZeros);
}
if(!empty($divider)) {
	$divider = !empty($list[$divider]) ? $list[$divider] : 1;
	$output = $currencyrate->formatPrice(($input / $divider), $format, $noZeros);
}
if (!empty($toPlaceholder)) {
	$modx->setPlaceholder($toPlaceholder, $output);
}
else {
	return $output;
}',
      'locked' => 0,
      'properties' => 'a:6:{s:5:"input";a:7:{s:4:"name";s:5:"input";s:4:"desc";s:23:"currencyrate_prop_input";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:0:"";s:7:"lexicon";s:23:"currencyrate:properties";s:4:"area";s:0:"";}s:10:"multiplier";a:7:{s:4:"name";s:10:"multiplier";s:4:"desc";s:28:"currencyrate_prop_multiplier";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:0:"";s:7:"lexicon";s:23:"currencyrate:properties";s:4:"area";s:0:"";}s:7:"divider";a:7:{s:4:"name";s:7:"divider";s:4:"desc";s:25:"currencyrate_prop_divider";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:0:"";s:7:"lexicon";s:23:"currencyrate:properties";s:4:"area";s:0:"";}s:6:"format";a:7:{s:4:"name";s:6:"format";s:4:"desc";s:24:"currencyrate_prop_format";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:13:"[2, ".", " "]";s:7:"lexicon";s:23:"currencyrate:properties";s:4:"area";s:0:"";}s:7:"noZeros";a:7:{s:4:"name";s:7:"noZeros";s:4:"desc";s:25:"currencyrate_prop_noZeros";s:4:"type";s:13:"combo-boolean";s:7:"options";a:0:{}s:5:"value";b:1;s:7:"lexicon";s:23:"currencyrate:properties";s:4:"area";s:0:"";}s:13:"toPlaceholder";a:7:{s:4:"name";s:13:"toPlaceholder";s:4:"desc";s:31:"currencyrate_prop_toPlaceholder";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:0:"";s:7:"lexicon";s:23:"currencyrate:properties";s:4:"area";s:0:"";}}',
      'moduleguid' => '',
      'static' => 0,
      'static_file' => 'core/components/currencyrate/elements/snippets/snippet.calc.php',
      'content' => '/** @var array $scriptProperties */
/** @var currencyrate $currencyrate */
if (!$currencyrate = $modx->getService(\'currencyrate\', \'currencyrate\', $modx->getOption(\'currencyrate_core_path\', null, $modx->getOption(\'core_path\') . \'components/currencyrate/\') . \'model/currencyrate/\', $scriptProperties)) {
	return \'Could not load currencyrate class!\';
}
if(empty($input)) {return \'\';}
$list = $currencyrate->getList();
if(!empty($multiplier)) {
	$multiplier = $list[$multiplier];
	$output = $currencyrate->formatPrice(($input * $multiplier), $format, $noZeros);
}
if(!empty($divider)) {
	$divider = !empty($list[$divider]) ? $list[$divider] : 1;
	$output = $currencyrate->formatPrice(($input / $divider), $format, $noZeros);
}
if (!empty($toPlaceholder)) {
	$modx->setPlaceholder($toPlaceholder, $output);
}
else {
	return $output;
}',
    ),
  ),
  '270ced9eb4452499b3ac175a3542842f' => 
  array (
    'criteria' => 
    array (
      'name' => 'CRlist',
    ),
    'object' => 
    array (
      'id' => 34,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'CRlist',
      'description' => '',
      'editor_type' => 0,
      'category' => 6,
      'cache_type' => 0,
      'snippet' => '/** @var array $scriptProperties */
/** @var currencyrate $currencyrate */
if (!$currencyrate = $modx->getService(\'currencyrate\', \'currencyrate\', $modx->getOption(\'currencyrate_core_path\', null, $modx->getOption(\'core_path\') . \'components/currencyrate/\') . \'model/currencyrate/\', $scriptProperties)) {
	return \'Could not load currencyrate class!\';
}
$currencyrate->initialize($modx->context->key, $scriptProperties);
if (empty($selected)) {$selected = \'\';}
if (empty($outputSeparator)) {$outputSeparator = "\\n";}
if (!empty($currencyrate->currency)) {
	$selected = $currencyrate->currency;
}
$class = \'CRlist\';
// Start building "Where" expression
$where = array();
if (empty($showInactive)) {$where[$class.\'.active\'] = 1;}
// Add
$innerJoin = array();
// Fields to select
$select = array(
	$class => implode(\',\', array_keys($modx->getFieldMeta($class)))
);
// Add custom parameters
foreach (array(\'where\',\'innerJoin\',\'select\') as $v) {
	if (!empty($scriptProperties[$v])) {
		$tmp = $modx->fromJSON($scriptProperties[$v]);
		if (is_array($tmp)) {
			$$v = array_merge($$v, $tmp);
		}
	}
	unset($scriptProperties[$v]);
}
$currencyrate->pdoTools->addTime(\'Conditions prepared\');
$default = array(
	\'class\' => $class,
	\'innerJoin\' => $modx->toJSON($innerJoin),
	\'where\' => $modx->toJSON($where),
	\'select\' => $modx->toJSON($select),
	\'groupby\' => $class.\'.id\',
	\'sortby\' => $class.\'.rank\',
	\'sortdir\' => \'ASC\',
	\'fastMode\' => false,
	\'return\' => !empty($returnIds) ? \'ids\' : \'data\',
	\'nestedChunkPrefix\' => \'cr_\',
	\'disableConditions\' => true
);
// Merge all properties and run!
$currencyrate->pdoTools->addTime(\'Query parameters ready\');
$currencyrate->pdoTools->setConfig(array_merge($default, $scriptProperties), false);
$data = $currencyrate->pdoTools->run();
// Processing rows
$rows = array();
if (!empty($data) && is_array($data)) {
	foreach ($data as $k => $row) {
		$row[\'idx\'] = $currencyrate->pdoTools->idx++;
		$row[\'selected\'] = $row[\'charcode\'] == $selected ? \'selected\' : \'\';
		$rows[] = empty($tplRow) ? $row : $currencyrate->pdoTools->getChunk($tplRow, $row);
	}
}
$rows = implode($outputSeparator, $rows);
$output = empty($tplOuter)
	? $currencyrate->pdoTools->getChunk(\'\', array(\'rows\' => $rows))
	: $currencyrate->pdoTools->getChunk($tplOuter, array_merge($scriptProperties, array(\'rows\' => $rows)));
$currencyrate->pdoTools->addTime(\'Returning processed chunks\');
$log = \'\';
if ($modx->user->hasSessionContext(\'mgr\') && !empty($showLog)) {
	$log .= \'<pre class="crLog">\' . print_r($currencyrate->pdoTools->getTime(), 1) . \'</pre>\';
}
$output .= $log;
if (!empty($toPlaceholder)) {
	$modx->setPlaceholder($toPlaceholder, $output);
}
else {
	return $output;
}',
      'locked' => 0,
      'properties' => 'a:7:{s:6:"tplRow";a:7:{s:4:"name";s:6:"tplRow";s:4:"desc";s:24:"currencyrate_prop_tplRow";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:14:"tpl.crList.row";s:7:"lexicon";s:23:"currencyrate:properties";s:4:"area";s:0:"";}s:8:"tplOuter";a:7:{s:4:"name";s:8:"tplOuter";s:4:"desc";s:26:"currencyrate_prop_tplOuter";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:16:"tpl.crList.outer";s:7:"lexicon";s:23:"currencyrate:properties";s:4:"area";s:0:"";}s:8:"tplEmpty";a:7:{s:4:"name";s:8:"tplEmpty";s:4:"desc";s:26:"currencyrate_prop_tplEmpty";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:0:"";s:7:"lexicon";s:23:"currencyrate:properties";s:4:"area";s:0:"";}s:8:"selected";a:7:{s:4:"name";s:8:"selected";s:4:"desc";s:26:"currencyrate_prop_selected";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:0:"";s:7:"lexicon";s:23:"currencyrate:properties";s:4:"area";s:0:"";}s:12:"showInactive";a:7:{s:4:"name";s:12:"showInactive";s:4:"desc";s:30:"currencyrate_prop_showInactive";s:4:"type";s:13:"combo-boolean";s:7:"options";a:0:{}s:5:"value";b:0;s:7:"lexicon";s:23:"currencyrate:properties";s:4:"area";s:0:"";}s:15:"outputSeparator";a:7:{s:4:"name";s:15:"outputSeparator";s:4:"desc";s:33:"currencyrate_prop_outputSeparator";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:1:"
";s:7:"lexicon";s:23:"currencyrate:properties";s:4:"area";s:0:"";}s:13:"toPlaceholder";a:7:{s:4:"name";s:13:"toPlaceholder";s:4:"desc";s:31:"currencyrate_prop_toPlaceholder";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:0:"";s:7:"lexicon";s:23:"currencyrate:properties";s:4:"area";s:0:"";}}',
      'moduleguid' => '',
      'static' => 0,
      'static_file' => 'core/components/currencyrate/elements/snippets/snippet.list.php',
      'content' => '/** @var array $scriptProperties */
/** @var currencyrate $currencyrate */
if (!$currencyrate = $modx->getService(\'currencyrate\', \'currencyrate\', $modx->getOption(\'currencyrate_core_path\', null, $modx->getOption(\'core_path\') . \'components/currencyrate/\') . \'model/currencyrate/\', $scriptProperties)) {
	return \'Could not load currencyrate class!\';
}
$currencyrate->initialize($modx->context->key, $scriptProperties);
if (empty($selected)) {$selected = \'\';}
if (empty($outputSeparator)) {$outputSeparator = "\\n";}
if (!empty($currencyrate->currency)) {
	$selected = $currencyrate->currency;
}
$class = \'CRlist\';
// Start building "Where" expression
$where = array();
if (empty($showInactive)) {$where[$class.\'.active\'] = 1;}
// Add
$innerJoin = array();
// Fields to select
$select = array(
	$class => implode(\',\', array_keys($modx->getFieldMeta($class)))
);
// Add custom parameters
foreach (array(\'where\',\'innerJoin\',\'select\') as $v) {
	if (!empty($scriptProperties[$v])) {
		$tmp = $modx->fromJSON($scriptProperties[$v]);
		if (is_array($tmp)) {
			$$v = array_merge($$v, $tmp);
		}
	}
	unset($scriptProperties[$v]);
}
$currencyrate->pdoTools->addTime(\'Conditions prepared\');
$default = array(
	\'class\' => $class,
	\'innerJoin\' => $modx->toJSON($innerJoin),
	\'where\' => $modx->toJSON($where),
	\'select\' => $modx->toJSON($select),
	\'groupby\' => $class.\'.id\',
	\'sortby\' => $class.\'.rank\',
	\'sortdir\' => \'ASC\',
	\'fastMode\' => false,
	\'return\' => !empty($returnIds) ? \'ids\' : \'data\',
	\'nestedChunkPrefix\' => \'cr_\',
	\'disableConditions\' => true
);
// Merge all properties and run!
$currencyrate->pdoTools->addTime(\'Query parameters ready\');
$currencyrate->pdoTools->setConfig(array_merge($default, $scriptProperties), false);
$data = $currencyrate->pdoTools->run();
// Processing rows
$rows = array();
if (!empty($data) && is_array($data)) {
	foreach ($data as $k => $row) {
		$row[\'idx\'] = $currencyrate->pdoTools->idx++;
		$row[\'selected\'] = $row[\'charcode\'] == $selected ? \'selected\' : \'\';
		$rows[] = empty($tplRow) ? $row : $currencyrate->pdoTools->getChunk($tplRow, $row);
	}
}
$rows = implode($outputSeparator, $rows);
$output = empty($tplOuter)
	? $currencyrate->pdoTools->getChunk(\'\', array(\'rows\' => $rows))
	: $currencyrate->pdoTools->getChunk($tplOuter, array_merge($scriptProperties, array(\'rows\' => $rows)));
$currencyrate->pdoTools->addTime(\'Returning processed chunks\');
$log = \'\';
if ($modx->user->hasSessionContext(\'mgr\') && !empty($showLog)) {
	$log .= \'<pre class="crLog">\' . print_r($currencyrate->pdoTools->getTime(), 1) . \'</pre>\';
}
$output .= $log;
if (!empty($toPlaceholder)) {
	$modx->setPlaceholder($toPlaceholder, $output);
}
else {
	return $output;
}',
    ),
  ),
  '904e774ebfcc4e1c1d58b008437791b9' => 
  array (
    'criteria' => 
    array (
      'name' => 'currencyrate',
    ),
    'object' => 
    array (
      'id' => 5,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'currencyrate',
      'description' => '',
      'editor_type' => 0,
      'category' => 6,
      'cache_type' => 0,
      'plugincode' => '$currencyrate = $modx->getService(\'currencyrate\', \'currencyrate\', $modx->getOption(\'currencyrate_core_path\', null, $modx->getOption(\'core_path\') . \'components/currencyrate/\') . \'model/currencyrate/\', $scriptProperties);
if (!($currencyrate instanceof currencyrate)) return \'\';

$eventName = $modx->event->name;
if (method_exists($currencyrate, $eventName) && $currencyrate->active) {
	$currencyrate->$eventName($scriptProperties);
}',
      'locked' => 0,
      'properties' => NULL,
      'disabled' => 0,
      'moduleguid' => '',
      'static' => 0,
      'static_file' => 'core/components/currencyrate/elements/plugins/plugin.currencyrate.php',
      'content' => '$currencyrate = $modx->getService(\'currencyrate\', \'currencyrate\', $modx->getOption(\'currencyrate_core_path\', null, $modx->getOption(\'core_path\') . \'components/currencyrate/\') . \'model/currencyrate/\', $scriptProperties);
if (!($currencyrate instanceof currencyrate)) return \'\';

$eventName = $modx->event->name;
if (method_exists($currencyrate, $eventName) && $currencyrate->active) {
	$currencyrate->$eventName($scriptProperties);
}',
    ),
  ),
  '6cd62c3f444367f3411f4d71bc4efac4' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 5,
      'event' => 'OnHandleRequest',
    ),
    'object' => 
    array (
      'pluginid' => 5,
      'event' => 'OnHandleRequest',
      'priority' => 0,
      'propertyset' => 0,
    ),
  ),
  'fb3d04c62e3cafde825c8ffe26e73d7b' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 5,
      'event' => 'OnBeforeCacheUpdate',
    ),
    'object' => 
    array (
      'pluginid' => 5,
      'event' => 'OnBeforeCacheUpdate',
      'priority' => 0,
      'propertyset' => 0,
    ),
  ),
  '695ab2a9b3f77c70fd94634caa5b8907' => 
  array (
    'criteria' => 
    array (
      'name' => 'crMSprice',
    ),
    'object' => 
    array (
      'id' => 6,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'crMSprice',
      'description' => '',
      'editor_type' => 0,
      'category' => 6,
      'cache_type' => 0,
      'plugincode' => 'switch ($modx->event->name) {
	case \'msOnGetProductPrice\':
		if ($modx->context->key == \'mgr\') {
			return \'\';
		}
		$currencyrate = $modx->getService(\'currencyrate\', \'currencyrate\', $modx->getOption(\'currencyrate_core_path\', null, $modx->getOption(\'core_path\') . \'components/currencyrate/\') . \'model/currencyrate/\', $scriptProperties);
		if (!($currencyrate instanceof currencyrate)) {
			return \'\';
		}
		$currency = $currencyrate->currency;
		if ($currency == $modx->getOption(\'currencyrate_currency\')) {
			return \'\';
		}
		$list = $currencyrate->getList();
		if (!isset($modx->event->returnedValues[\'price\'])) {
			$modx->event->returnedValues[\'price\'] = $price;
		}
		$price = &$modx->event->returnedValues[\'price\'];
		$new_price = $price / $list[$currency];
		if ($new_price !== false) {
			$price = $new_price;
		}

		break;

}',
      'locked' => 0,
      'properties' => NULL,
      'disabled' => 0,
      'moduleguid' => '',
      'static' => 0,
      'static_file' => 'core/components/currencyrate/elements/plugins/plugin.ms_price.php',
      'content' => 'switch ($modx->event->name) {
	case \'msOnGetProductPrice\':
		if ($modx->context->key == \'mgr\') {
			return \'\';
		}
		$currencyrate = $modx->getService(\'currencyrate\', \'currencyrate\', $modx->getOption(\'currencyrate_core_path\', null, $modx->getOption(\'core_path\') . \'components/currencyrate/\') . \'model/currencyrate/\', $scriptProperties);
		if (!($currencyrate instanceof currencyrate)) {
			return \'\';
		}
		$currency = $currencyrate->currency;
		if ($currency == $modx->getOption(\'currencyrate_currency\')) {
			return \'\';
		}
		$list = $currencyrate->getList();
		if (!isset($modx->event->returnedValues[\'price\'])) {
			$modx->event->returnedValues[\'price\'] = $price;
		}
		$price = &$modx->event->returnedValues[\'price\'];
		$new_price = $price / $list[$currency];
		if ($new_price !== false) {
			$price = $new_price;
		}

		break;

}',
    ),
  ),
);