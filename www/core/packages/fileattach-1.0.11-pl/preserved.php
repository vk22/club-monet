<?php return array (
  'dac611b196d1e457f50e3281cab97876' => 
  array (
    'criteria' => 
    array (
      'name' => 'fileattach',
    ),
    'object' => 
    array (
      'name' => 'fileattach',
      'path' => '{core_path}components/fileattach/',
      'assets_path' => '',
    ),
  ),
  'd6d00356c493a49ba0d76c99993fd4bc' => 
  array (
    'criteria' => 
    array (
      'key' => 'fileattach.mediasource',
    ),
    'object' => 
    array (
      'key' => 'fileattach.mediasource',
      'value' => '1',
      'xtype' => 'modx-combo-source',
      'namespace' => 'fileattach',
      'area' => '',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  '52aa07697b3f7e4765c7c87ecc63abf6' => 
  array (
    'criteria' => 
    array (
      'key' => 'fileattach.files_path',
    ),
    'object' => 
    array (
      'key' => 'fileattach.files_path',
      'value' => '/',
      'xtype' => 'textfield',
      'namespace' => 'fileattach',
      'area' => '',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  'f4af23a2a385426a748a66a3131a9301' => 
  array (
    'criteria' => 
    array (
      'key' => 'fileattach.templates',
    ),
    'object' => 
    array (
      'key' => 'fileattach.templates',
      'value' => '',
      'xtype' => 'textfield',
      'namespace' => 'fileattach',
      'area' => '',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  '04086ec79c8cc41a6683220381c4905c' => 
  array (
    'criteria' => 
    array (
      'key' => 'fileattach.user_folders',
    ),
    'object' => 
    array (
      'key' => 'fileattach.user_folders',
      'value' => '',
      'xtype' => 'combo-boolean',
      'namespace' => 'fileattach',
      'area' => '',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  '205c8747367739a9ed00b09d799dea3a' => 
  array (
    'criteria' => 
    array (
      'key' => 'fileattach.calchash',
    ),
    'object' => 
    array (
      'key' => 'fileattach.calchash',
      'value' => '',
      'xtype' => 'combo-boolean',
      'namespace' => 'fileattach',
      'area' => '',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  'b8dae63ff0ebbb47bf46596acef90d2a' => 
  array (
    'criteria' => 
    array (
      'key' => 'fileattach.put_docid',
    ),
    'object' => 
    array (
      'key' => 'fileattach.put_docid',
      'value' => '',
      'xtype' => 'combo-boolean',
      'namespace' => 'fileattach',
      'area' => '',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  '8a41bd24e5acf4fab3a10f4a57f0f379' => 
  array (
    'criteria' => 
    array (
      'key' => 'fileattach.private',
    ),
    'object' => 
    array (
      'key' => 'fileattach.private',
      'value' => '',
      'xtype' => 'combo-boolean',
      'namespace' => 'fileattach',
      'area' => '',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  '76642345b284e8380b7ea9402f309e20' => 
  array (
    'criteria' => 
    array (
      'key' => 'fileattach.download',
    ),
    'object' => 
    array (
      'key' => 'fileattach.download',
      'value' => '1',
      'xtype' => 'combo-boolean',
      'namespace' => 'fileattach',
      'area' => '',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  '912e4f62122137df4284472319aa39ca' => 
  array (
    'criteria' => 
    array (
      'name' => 'File Attach',
    ),
    'object' => 
    array (
      'id' => 14,
      'name' => 'File Attach',
      'description' => 'A policy for editing attached files to resources.',
      'parent' => 0,
      'template' => 9,
      'class' => '',
      'data' => '{"fileattach.totallist":true,"fileattach.doclist":true,"fileattach.download":true,"fileattach.list":true,"fileattach.remove":true}',
      'lexicon' => 'fileattach:permissions',
    ),
  ),
  '072361c5d1962ed21651bacc0da090ae' => 
  array (
    'criteria' => 
    array (
      'name' => 'File Attach Download',
    ),
    'object' => 
    array (
      'id' => 15,
      'name' => 'File Attach Download',
      'description' => 'A policy for downloading attached files to resources.',
      'parent' => 0,
      'template' => 9,
      'class' => '',
      'data' => '{"fileattach.download":true}',
      'lexicon' => 'fileattach:permissions',
    ),
  ),
  '9c890e0e0ae11f301c3728aa67797916' => 
  array (
    'criteria' => 
    array (
      'name' => 'File Attach Frontend',
    ),
    'object' => 
    array (
      'id' => 16,
      'name' => 'File Attach Frontend',
      'description' => 'A policy for frontend uploading files to resources.',
      'parent' => 0,
      'template' => 9,
      'class' => '',
      'data' => '{"fileattach.download":true,"fileattach.list":true,"fileattach.remove":true}',
      'lexicon' => 'fileattach:permissions',
    ),
  ),
  '9f8b849e336d6efe0f00e3d6544c4a93' => 
  array (
    'criteria' => 
    array (
      'name' => 'FileAttachTemplate',
    ),
    'object' => 
    array (
      'id' => 9,
      'template_group' => 1,
      'name' => 'FileAttachTemplate',
      'description' => 'A policy template for attached files containers.',
      'lexicon' => 'fileattach:permissions',
    ),
  ),
  '97284847dbc095e8e34b341750d69755' => 
  array (
    'criteria' => 
    array (
      'template' => 9,
      'name' => 'fileattach.totallist',
    ),
    'object' => 
    array (
      'id' => 228,
      'template' => 9,
      'name' => 'fileattach.totallist',
      'description' => 'perm.fileattach_all',
      'value' => 1,
    ),
  ),
  '9e1bb92a7ab50be272b80ba6dd6e2d6f' => 
  array (
    'criteria' => 
    array (
      'template' => 9,
      'name' => 'fileattach.doclist',
    ),
    'object' => 
    array (
      'id' => 229,
      'template' => 9,
      'name' => 'fileattach.doclist',
      'description' => 'perm.fileattach_doc',
      'value' => 1,
    ),
  ),
  'ac0f523000e13d1b5592bed7cf45d4f6' => 
  array (
    'criteria' => 
    array (
      'template' => 9,
      'name' => 'fileattach.download',
    ),
    'object' => 
    array (
      'id' => 230,
      'template' => 9,
      'name' => 'fileattach.download',
      'description' => 'perm.fileattach_download',
      'value' => 1,
    ),
  ),
  'd7cc739581c083ea27b4cac9235d1d52' => 
  array (
    'criteria' => 
    array (
      'template' => 9,
      'name' => 'fileattach.list',
    ),
    'object' => 
    array (
      'id' => 231,
      'template' => 9,
      'name' => 'fileattach.list',
      'description' => 'perm.fileattach_list',
      'value' => 1,
    ),
  ),
  '92e4ad93bff145f6d9c63d6cd244b060' => 
  array (
    'criteria' => 
    array (
      'template' => 9,
      'name' => 'fileattach.remove',
    ),
    'object' => 
    array (
      'id' => 232,
      'template' => 9,
      'name' => 'fileattach.remove',
      'description' => 'perm.fileattach_remove',
      'value' => 1,
    ),
  ),
  '93dbaa4866b9f0ee2badf742e398d092' => 
  array (
    'criteria' => 
    array (
      'text' => 'fileattach',
    ),
    'object' => 
    array (
      'text' => 'fileattach',
      'parent' => 'components',
      'action' => '9',
      'description' => 'fileattach.menu_desc',
      'icon' => '',
      'menuindex' => 0,
      'params' => '',
      'handler' => '',
      'permissions' => 'fileattach.totallist',
      'namespace' => 'core',
    ),
  ),
  '5677fe5edffa50e709f9001d6d55ceec' => 
  array (
    'criteria' => 
    array (
      'category' => 'FileAttach',
    ),
    'object' => 
    array (
      'id' => 10,
      'parent' => 0,
      'category' => 'FileAttach',
      'rank' => 0,
    ),
  ),
  'dec1e3e8201e77c84159ac4b040cc5b3' => 
  array (
    'criteria' => 
    array (
      'name' => 'FileAttachTpl',
    ),
    'object' => 
    array (
      'id' => 52,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'FileAttachTpl',
      'description' => '',
      'editor_type' => 0,
      'category' => 10,
      'cache_type' => 0,
      'snippet' => '<p>[[+description:notempty=`<strong>[[+description]]</strong><br/>`]]
<a href="[[+url]]">[[+name]]</a> <span class="badge">[[+download]]</span>
[[+size:notempty=`<br/><small>Size: [[+size]] bytes</small>`]]
[[+ext:notempty=`<br/><small>Type: <img src="/img/[[+ext]].png" /></small>`]]
[[+hash:notempty=`<br/><small>SHA1: [[+hash]]</small>`]]</p>',
      'locked' => 0,
      'properties' => NULL,
      'static' => 1,
      'static_file' => 'core/components/fileattach/elements/chunks/chunk.item.tpl',
      'content' => '<p>[[+description:notempty=`<strong>[[+description]]</strong><br/>`]]
<a href="[[+url]]">[[+name]]</a> <span class="badge">[[+download]]</span>
[[+size:notempty=`<br/><small>Size: [[+size]] bytes</small>`]]
[[+ext:notempty=`<br/><small>Type: <img src="/img/[[+ext]].png" /></small>`]]
[[+hash:notempty=`<br/><small>SHA1: [[+hash]]</small>`]]</p>',
    ),
  ),
  '60e8cc86b008f3f52fecdb1423f23590' => 
  array (
    'criteria' => 
    array (
      'name' => 'FileAttach',
    ),
    'object' => 
    array (
      'id' => 43,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'FileAttach',
      'description' => '',
      'editor_type' => 0,
      'category' => 10,
      'cache_type' => 0,
      'snippet' => '/**
 * FileAttach
 *
 * Copyright 2015-2016 by Vitaly Checkryzhev <13hakta@gmail.com>
 *
 * This file is part of FileAttach, tool to attach files to resources with
 * MODX Revolution\'s Manager.
 *
 * FileAttach is free software; you can redistribute it and/or modify it under the
 * terms of the GNU General Public License as published by the Free Software
 * Foundation version 3,
 *
 * FileAttach is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * FileAttach; if not, write to the Free Software Foundation, Inc., 59 Temple Place,
 * Suite 330, Boston, MA 02111-1307 USA
 *
 * @package FileAttach
*/

/** @var array $scriptProperties */
/** @var FileAttach $FileAttach */
if (!$FileAttach = $modx->getService(\'fileattach\', \'FileAttach\', $modx->getOption(\'fileattach.core_path\', null, $modx->getOption(\'core_path\') . \'components/fileattach/\') . \'model/fileattach/\', $scriptProperties)) {
    return \'Could not load FileAttach class!\';
}

// Do your snippet code here.
$tpl = $modx->getOption(\'tpl\', $scriptProperties, \'FileItemTpl\');
$sortby = $modx->getOption(\'sortBy\', $scriptProperties, \'name\');
$sortdir = $modx->getOption(\'sortDir\', $scriptProperties, \'ASC\');
$limit = $modx->getOption(\'limit\', $scriptProperties, 0);
$outputSeparator = $modx->getOption(\'outputSeparator\', $scriptProperties, "\\n");
$toPlaceholder = $modx->getOption(\'toPlaceholder\', $scriptProperties, false);
$resource = $modx->getOption(\'resource\', $scriptProperties, 0);
$makeUrl = $modx->getOption(\'makeUrl\', $scriptProperties, true);
$privateUrl = $modx->getOption(\'privateUrl\', $scriptProperties, false);
$showHASH = $modx->getOption(\'showHASH\', $scriptProperties, false);
$showSize = $modx->getOption(\'showSize\', $scriptProperties, false);
$showExt = $modx->getOption(\'showExt\', $scriptProperties, false);

if ($makeUrl) {
    if (!$privateUrl || $showSize) {
	// Get base URLs
	$mediaSource = $modx->getOption(\'fileattach.mediasource\',null,1);

	$ms = $modx->getObject(\'sources.modMediaSource\', array(\'id\' => $mediaSource));
	$ms->initialize();

	$files_path = $modx->getOption(\'fileattach.files_path\');
	$public_url = $ms->getBaseUrl() . $files_path;
	$docs_path  = $ms->getBasePath() . $files_path;
    }

    $private_url = $modx->getOption(\'fileattach.assets_url\', null, $modx->getOption(\'assets_url\')) . \'components/fileattach/\';
    $private_url .= \'connector.php?action=web/download&ctx=web&id=\';
}

// Build query
$c = $modx->newQuery(\'FileItem\');
$c->sortby($sortby, $sortdir);
$c->limit($limit);

if ($showHASH)
    $c->select($modx->getSelectColumns(\'FileItem\', \'FileItem\'));
else
    $c->select($modx->getSelectColumns(\'FileItem\', \'FileItem\', \'\', array(\'hash\'), true));

$c->where(array(\'docid\' => ($resource > 0)? $resource : $modx->resource->get(\'id\')));

$items = $modx->getIterator(\'FileItem\', $c);

// Iterate through items
$list = array();
/** @var FileItem $item */
foreach ($items as $item) {
    $item->source = $ms;
    $item->files_path = $files_path;

    $itemArr = $item->toArray();

    if ($makeUrl) {
	if ($itemArr[\'private\'] || $privateUrl)
	    $itemArr[\'url\'] = $private_url . $itemArr[\'id\'];
	else
	    $itemArr[\'url\'] = $public_url . $itemArr[\'path\'] . $itemArr[\'name\'];
    }

    if ($showSize)
	$itemArr[\'size\'] = $item->getSize();

    if ($showExt) {
	$itemArr[\'ext\'] = strtolower(
	    pathinfo($itemArr[\'name\'], PATHINFO_EXTENSION));
    }

    $list[] = $modx->getChunk($tpl, $itemArr);
}

// Output
$output = implode($outputSeparator, $list);
if (!empty($toPlaceholder)) {
    // If using a placeholder, output nothing and set output to specified placeholder
    $modx->setPlaceholder($toPlaceholder, $output);

    return \'\';
}

return $output;',
      'locked' => 0,
      'properties' => 'a:12:{s:3:"tpl";a:7:{s:4:"name";s:3:"tpl";s:4:"desc";s:19:"fileattach.prop_tpl";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:13:"FileAttachTpl";s:7:"lexicon";s:21:"fileattach:properties";s:4:"area";s:0:"";}s:6:"sortBy";a:7:{s:4:"name";s:6:"sortBy";s:4:"desc";s:22:"fileattach.prop_sortBy";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:4:"name";s:7:"lexicon";s:21:"fileattach:properties";s:4:"area";s:0:"";}s:7:"sortDir";a:7:{s:4:"name";s:7:"sortDir";s:4:"desc";s:23:"fileattach.prop_sortDir";s:4:"type";s:4:"list";s:7:"options";a:2:{i:0;a:2:{s:4:"text";s:3:"ASC";s:5:"value";s:3:"ASC";}i:1;a:2:{s:4:"text";s:4:"DESC";s:5:"value";s:4:"DESC";}}s:5:"value";s:3:"ASC";s:7:"lexicon";s:21:"fileattach:properties";s:4:"area";s:0:"";}s:5:"limit";a:7:{s:4:"name";s:5:"limit";s:4:"desc";s:21:"fileattach.prop_limit";s:4:"type";s:11:"numberfield";s:7:"options";a:0:{}s:5:"value";i:0;s:7:"lexicon";s:21:"fileattach:properties";s:4:"area";s:0:"";}s:15:"outputSeparator";a:7:{s:4:"name";s:15:"outputSeparator";s:4:"desc";s:31:"fileattach.prop_outputSeparator";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:1:"
";s:7:"lexicon";s:21:"fileattach:properties";s:4:"area";s:0:"";}s:13:"toPlaceholder";a:7:{s:4:"name";s:13:"toPlaceholder";s:4:"desc";s:29:"fileattach.prop_toPlaceholder";s:4:"type";s:13:"combo-boolean";s:7:"options";a:0:{}s:5:"value";b:0;s:7:"lexicon";s:21:"fileattach:properties";s:4:"area";s:0:"";}s:8:"resource";a:7:{s:4:"name";s:8:"resource";s:4:"desc";s:24:"fileattach.prop_resource";s:4:"type";s:11:"numberfield";s:7:"options";a:0:{}s:5:"value";i:0;s:7:"lexicon";s:21:"fileattach:properties";s:4:"area";s:0:"";}s:7:"makeUrl";a:7:{s:4:"name";s:7:"makeUrl";s:4:"desc";s:23:"fileattach.prop_makeUrl";s:4:"type";s:13:"combo-boolean";s:7:"options";a:0:{}s:5:"value";b:1;s:7:"lexicon";s:21:"fileattach:properties";s:4:"area";s:0:"";}s:10:"privateUrl";a:7:{s:4:"name";s:10:"privateUrl";s:4:"desc";s:26:"fileattach.prop_privateUrl";s:4:"type";s:13:"combo-boolean";s:7:"options";a:0:{}s:5:"value";b:0;s:7:"lexicon";s:21:"fileattach:properties";s:4:"area";s:0:"";}s:8:"showHASH";a:7:{s:4:"name";s:8:"showHASH";s:4:"desc";s:24:"fileattach.prop_showHASH";s:4:"type";s:13:"combo-boolean";s:7:"options";a:0:{}s:5:"value";b:0;s:7:"lexicon";s:21:"fileattach:properties";s:4:"area";s:0:"";}s:8:"showSize";a:7:{s:4:"name";s:8:"showSize";s:4:"desc";s:24:"fileattach.prop_showSize";s:4:"type";s:13:"combo-boolean";s:7:"options";a:0:{}s:5:"value";b:0;s:7:"lexicon";s:21:"fileattach:properties";s:4:"area";s:0:"";}s:7:"showExt";a:7:{s:4:"name";s:7:"showExt";s:4:"desc";s:23:"fileattach.prop_showExt";s:4:"type";s:13:"combo-boolean";s:7:"options";a:0:{}s:5:"value";b:0;s:7:"lexicon";s:21:"fileattach:properties";s:4:"area";s:0:"";}}',
      'moduleguid' => '',
      'static' => 1,
      'static_file' => 'core/components/fileattach/elements/snippets/snippet.fileattach.php',
      'content' => '/**
 * FileAttach
 *
 * Copyright 2015-2016 by Vitaly Checkryzhev <13hakta@gmail.com>
 *
 * This file is part of FileAttach, tool to attach files to resources with
 * MODX Revolution\'s Manager.
 *
 * FileAttach is free software; you can redistribute it and/or modify it under the
 * terms of the GNU General Public License as published by the Free Software
 * Foundation version 3,
 *
 * FileAttach is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * FileAttach; if not, write to the Free Software Foundation, Inc., 59 Temple Place,
 * Suite 330, Boston, MA 02111-1307 USA
 *
 * @package FileAttach
*/

/** @var array $scriptProperties */
/** @var FileAttach $FileAttach */
if (!$FileAttach = $modx->getService(\'fileattach\', \'FileAttach\', $modx->getOption(\'fileattach.core_path\', null, $modx->getOption(\'core_path\') . \'components/fileattach/\') . \'model/fileattach/\', $scriptProperties)) {
    return \'Could not load FileAttach class!\';
}

// Do your snippet code here.
$tpl = $modx->getOption(\'tpl\', $scriptProperties, \'FileItemTpl\');
$sortby = $modx->getOption(\'sortBy\', $scriptProperties, \'name\');
$sortdir = $modx->getOption(\'sortDir\', $scriptProperties, \'ASC\');
$limit = $modx->getOption(\'limit\', $scriptProperties, 0);
$outputSeparator = $modx->getOption(\'outputSeparator\', $scriptProperties, "\\n");
$toPlaceholder = $modx->getOption(\'toPlaceholder\', $scriptProperties, false);
$resource = $modx->getOption(\'resource\', $scriptProperties, 0);
$makeUrl = $modx->getOption(\'makeUrl\', $scriptProperties, true);
$privateUrl = $modx->getOption(\'privateUrl\', $scriptProperties, false);
$showHASH = $modx->getOption(\'showHASH\', $scriptProperties, false);
$showSize = $modx->getOption(\'showSize\', $scriptProperties, false);
$showExt = $modx->getOption(\'showExt\', $scriptProperties, false);

if ($makeUrl) {
    if (!$privateUrl || $showSize) {
	// Get base URLs
	$mediaSource = $modx->getOption(\'fileattach.mediasource\',null,1);

	$ms = $modx->getObject(\'sources.modMediaSource\', array(\'id\' => $mediaSource));
	$ms->initialize();

	$files_path = $modx->getOption(\'fileattach.files_path\');
	$public_url = $ms->getBaseUrl() . $files_path;
	$docs_path  = $ms->getBasePath() . $files_path;
    }

    $private_url = $modx->getOption(\'fileattach.assets_url\', null, $modx->getOption(\'assets_url\')) . \'components/fileattach/\';
    $private_url .= \'connector.php?action=web/download&ctx=web&id=\';
}

// Build query
$c = $modx->newQuery(\'FileItem\');
$c->sortby($sortby, $sortdir);
$c->limit($limit);

if ($showHASH)
    $c->select($modx->getSelectColumns(\'FileItem\', \'FileItem\'));
else
    $c->select($modx->getSelectColumns(\'FileItem\', \'FileItem\', \'\', array(\'hash\'), true));

$c->where(array(\'docid\' => ($resource > 0)? $resource : $modx->resource->get(\'id\')));

$items = $modx->getIterator(\'FileItem\', $c);

// Iterate through items
$list = array();
/** @var FileItem $item */
foreach ($items as $item) {
    $item->source = $ms;
    $item->files_path = $files_path;

    $itemArr = $item->toArray();

    if ($makeUrl) {
	if ($itemArr[\'private\'] || $privateUrl)
	    $itemArr[\'url\'] = $private_url . $itemArr[\'id\'];
	else
	    $itemArr[\'url\'] = $public_url . $itemArr[\'path\'] . $itemArr[\'name\'];
    }

    if ($showSize)
	$itemArr[\'size\'] = $item->getSize();

    if ($showExt) {
	$itemArr[\'ext\'] = strtolower(
	    pathinfo($itemArr[\'name\'], PATHINFO_EXTENSION));
    }

    $list[] = $modx->getChunk($tpl, $itemArr);
}

// Output
$output = implode($outputSeparator, $list);
if (!empty($toPlaceholder)) {
    // If using a placeholder, output nothing and set output to specified placeholder
    $modx->setPlaceholder($toPlaceholder, $output);

    return \'\';
}

return $output;',
    ),
  ),
  '751cb37e673cbc1c7f069b86c7067159' => 
  array (
    'criteria' => 
    array (
      'name' => 'FileAttach',
    ),
    'object' => 
    array (
      'id' => 13,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'FileAttach',
      'description' => '',
      'editor_type' => 0,
      'category' => 10,
      'cache_type' => 0,
      'plugincode' => '/**
 * FileAttach
 *
 * Copyright 2015-2016 by Vitaly Checkryzhev <13hakta@gmail.com>
 *
 * This file is part of FileAttach, tool to attach files to resources with
 * MODX Revolution\'s Manager.
 *
 * FileAttach is free software; you can redistribute it and/or modify it under the
 * terms of the GNU General Public License as published by the Free Software
 * Foundation version 3,
 *
 * FileAttach is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * FileAttach; if not, write to the Free Software Foundation, Inc., 59 Temple Place,
 * Suite 330, Boston, MA 02111-1307 USA
 *
 * @package FileAttach
*/

switch ($modx->event->name) {
    // Add a custom tab to the MODX create/edit resource pages
    case \'OnDocFormPrerender\':

	// Check access
	if (!$modx->hasPermission(\'fileattach.doclist\')) return;

	// Skip form building when resource template is not in permitted list
	$templates = $modx->getOption(\'fileattach.templates\');

	if ($templates != \'\') {
	    $templatelist = explode(\',\', $templates);
	    $template = is_object($resource)? $resource->get(\'template\') : 0;
	    if (!in_array($template, $templatelist)) return;
	}

	$modx->controller->addLexiconTopic(\'fileattach:default\');

	$corePath = $modx->getOption(\'fileattach.core_path\', null, $modx->getOption(\'core_path\') . \'components/fileattach/\');
	require_once $corePath . \'model/fileattach/fileattach.class.php\';

	$modx->FileAttach = new FileAttach($modx);
	$modx->regClientStartupScript($modx->FileAttach->config[\'jsUrl\'] . \'mgr/fileattach.js\');
	$modx->regClientStartupScript($modx->FileAttach->config[\'jsUrl\'] . \'mgr/widgets/items.grid.js\');
	$modx->regClientStartupScript($modx->FileAttach->config[\'jsUrl\'] . \'mgr/filestab.js\');

	$modx->regClientStartupHTMLBlock(\'<script type="text/javascript">
	 FileAttach.config = \' . $modx->toJSON($modx->FileAttach->config) . \';
	 FileAttach.config.connector_url = "\' . $modx->FileAttach->config[\'connectorUrl\'] . \'";
	</script>\');
	break;
}',
      'locked' => 0,
      'properties' => NULL,
      'disabled' => 0,
      'moduleguid' => '',
      'static' => 1,
      'static_file' => 'core/components/fileattach/elements/plugins/plugin.filestab.php',
      'content' => '/**
 * FileAttach
 *
 * Copyright 2015-2016 by Vitaly Checkryzhev <13hakta@gmail.com>
 *
 * This file is part of FileAttach, tool to attach files to resources with
 * MODX Revolution\'s Manager.
 *
 * FileAttach is free software; you can redistribute it and/or modify it under the
 * terms of the GNU General Public License as published by the Free Software
 * Foundation version 3,
 *
 * FileAttach is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * FileAttach; if not, write to the Free Software Foundation, Inc., 59 Temple Place,
 * Suite 330, Boston, MA 02111-1307 USA
 *
 * @package FileAttach
*/

switch ($modx->event->name) {
    // Add a custom tab to the MODX create/edit resource pages
    case \'OnDocFormPrerender\':

	// Check access
	if (!$modx->hasPermission(\'fileattach.doclist\')) return;

	// Skip form building when resource template is not in permitted list
	$templates = $modx->getOption(\'fileattach.templates\');

	if ($templates != \'\') {
	    $templatelist = explode(\',\', $templates);
	    $template = is_object($resource)? $resource->get(\'template\') : 0;
	    if (!in_array($template, $templatelist)) return;
	}

	$modx->controller->addLexiconTopic(\'fileattach:default\');

	$corePath = $modx->getOption(\'fileattach.core_path\', null, $modx->getOption(\'core_path\') . \'components/fileattach/\');
	require_once $corePath . \'model/fileattach/fileattach.class.php\';

	$modx->FileAttach = new FileAttach($modx);
	$modx->regClientStartupScript($modx->FileAttach->config[\'jsUrl\'] . \'mgr/fileattach.js\');
	$modx->regClientStartupScript($modx->FileAttach->config[\'jsUrl\'] . \'mgr/widgets/items.grid.js\');
	$modx->regClientStartupScript($modx->FileAttach->config[\'jsUrl\'] . \'mgr/filestab.js\');

	$modx->regClientStartupHTMLBlock(\'<script type="text/javascript">
	 FileAttach.config = \' . $modx->toJSON($modx->FileAttach->config) . \';
	 FileAttach.config.connector_url = "\' . $modx->FileAttach->config[\'connectorUrl\'] . \'";
	</script>\');
	break;
}',
    ),
  ),
  '9c9ee5f387a8f5d23e55f852d77702ba' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 13,
      'event' => 'OnDocFormPrerender',
    ),
    'object' => 
    array (
      'pluginid' => 13,
      'event' => 'OnDocFormPrerender',
      'priority' => 0,
      'propertyset' => 0,
    ),
  ),
);