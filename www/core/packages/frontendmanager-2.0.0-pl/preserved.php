<?php return array (
  '92aa6692a4fbbf2459e688f930be7c0f' => 
  array (
    'criteria' => 
    array (
      'name' => 'frontendmanager',
    ),
    'object' => 
    array (
      'name' => 'frontendmanager',
      'path' => '{core_path}components/frontendmanager/',
      'assets_path' => '',
    ),
  ),
  'a850f7ae6f8982b316b52650a34b88a8' => 
  array (
    'criteria' => 
    array (
      'key' => 'frontendmanager_frontend_css',
    ),
    'object' => 
    array (
      'key' => 'frontendmanager_frontend_css',
      'value' => 'frontend.css',
      'xtype' => 'textfield',
      'namespace' => 'frontendmanager',
      'area' => 'frontendmanager_frontend',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  '9bab1c81b8cefeedbee22af7d72efa41' => 
  array (
    'criteria' => 
    array (
      'key' => 'frontendmanager_frontend_js',
    ),
    'object' => 
    array (
      'key' => 'frontendmanager_frontend_js',
      'value' => 'frontend.js',
      'xtype' => 'textfield',
      'namespace' => 'frontendmanager',
      'area' => 'frontendmanager_frontend',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  'cf989dbce364d2e9b84ae6dfdca6c050' => 
  array (
    'criteria' => 
    array (
      'key' => 'frontendmanager_frontend_tpl',
    ),
    'object' => 
    array (
      'key' => 'frontendmanager_frontend_tpl',
      'value' => 'tpl.frontendmanager',
      'xtype' => 'textfield',
      'namespace' => 'frontendmanager',
      'area' => 'frontendmanager_frontend',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  '51d296010c57447551fe2059157eae75' => 
  array (
    'criteria' => 
    array (
      'key' => 'frontendmanager_frontend_position',
    ),
    'object' => 
    array (
      'key' => 'frontendmanager_frontend_position',
      'value' => 'top',
      'xtype' => 'textfield',
      'namespace' => 'frontendmanager',
      'area' => 'frontendmanager_frontend',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  'cc1b14a897d59c88e469cdcdbcb95114' => 
  array (
    'criteria' => 
    array (
      'key' => 'frontendmanager_contenttypes',
    ),
    'object' => 
    array (
      'key' => 'frontendmanager_contenttypes',
      'value' => '1',
      'xtype' => 'textfield',
      'namespace' => 'frontendmanager',
      'area' => 'frontendmanager_manager',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  '1ac0da9d3198399c475843f3ea4d8718' => 
  array (
    'criteria' => 
    array (
      'key' => 'frontendmanager_manager_css',
    ),
    'object' => 
    array (
      'key' => 'frontendmanager_manager_css',
      'value' => 'manager.css',
      'xtype' => 'textfield',
      'namespace' => 'frontendmanager',
      'area' => 'frontendmanager_manager',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  '086003e8b85f50a6d461c334903ea44e' => 
  array (
    'criteria' => 
    array (
      'key' => 'frontendmanager_manager_js',
    ),
    'object' => 
    array (
      'key' => 'frontendmanager_manager_js',
      'value' => 'manager.js',
      'xtype' => 'textfield',
      'namespace' => 'frontendmanager',
      'area' => 'frontendmanager_manager',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  'd442d2083bf61e099fbce93c27fb1b8b' => 
  array (
    'criteria' => 
    array (
      'category' => 'frontendManager',
    ),
    'object' => 
    array (
      'id' => 15,
      'parent' => 0,
      'category' => 'frontendManager',
      'rank' => 0,
    ),
  ),
  '2feefc381b891854f92d73426553c429' => 
  array (
    'criteria' => 
    array (
      'name' => 'tpl.frontendmanager',
    ),
    'object' => 
    array (
      'id' => 80,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'tpl.frontendmanager',
      'description' => '',
      'editor_type' => 0,
      'category' => 15,
      'cache_type' => 0,
      'snippet' => '<div id="frontendManager" class="fm-panel" >
	<a href="[[++manager_url]]" target="_blank" class="fm-logo"><img src="[[++manager_url]]templates/default/images/modx-icon-color.svg"></a>
	<a href="[[++manager_url]]" target="_blank" class="fm-mode"><span class="fm-icon-hide"><img src="[[++manager_url]]templates/default/images/modx-icon-color.svg"></span></a>
	<a href="[[++manager_url]]?a=resource/update&id={$_modx->resource.id}" data-action="iframe"><span class="fm-icon-edit"></span> <span class="fm-link-text">{\'frontendmanager_btn_edit\' | lexicon}</span></a>
	<!--<a href="[[++manager_url]]?a=security/user" data-action="iframe"><span class="fm-icon-user"></span> <span class="fm-link-text">{\'frontendmanager_btn_users\' | lexicon}</span></a>-->
	<a href="[[++manager_url]]?a=mgr/orders&namespace=minishop2" data-action="iframe"><span class="fm-icon-ms2"></span> <span class="fm-link-text">{\'frontendmanager_btn_ms2\' | lexicon}</span></a>
	<!--<a href="[[++manager_url]]?id=0&a=context/update&key={$_modx->context.key}" data-action="iframe"><span class="fm-icon-context"></span> <span class="fm-link-text">{\'frontendmanager_btn_context\' | lexicon}</span></a>-->
	<!--<a href="[[++manager_url]]?a=system/settings" data-action="iframe"><span class="fm-icon-settings"></span> <span class="fm-link-text">{\'frontendmanager_btn_settings\' | lexicon}</span></a>-->
	<!--<a href="[[++manager_url]]?a=system/event" data-action="iframe"><span class="fm-icon-log"></span><span class="fm-link-text">{\'frontendmanager_btn_log\' | lexicon}</span></a>-->
	<!--<a href="[[++manager_url]]?a=system/refresh_site" data-action="iframe"><span class="fm-icon-cache"></span><span class="fm-link-text">{\'frontendmanager_btn_cache\' | lexicon}</span></a>-->
	<a href="http://club-monet.ru/products-counts.html" ><span class="fm-icon-ms2"></span><span class="fm-link-text">Счетчик товаров</span></a>
</div>
',
      'locked' => 0,
      'properties' => 'a:0:{}',
      'static' => 0,
      'static_file' => 'core/components/frontendmanager/elements/chunks/chunk.frontendmanager.tpl',
      'content' => '<div id="frontendManager" class="fm-panel" >
	<a href="[[++manager_url]]" target="_blank" class="fm-logo"><img src="[[++manager_url]]templates/default/images/modx-icon-color.svg"></a>
	<a href="[[++manager_url]]" target="_blank" class="fm-mode"><span class="fm-icon-hide"><img src="[[++manager_url]]templates/default/images/modx-icon-color.svg"></span></a>
	<a href="[[++manager_url]]?a=resource/update&id={$_modx->resource.id}" data-action="iframe"><span class="fm-icon-edit"></span> <span class="fm-link-text">{\'frontendmanager_btn_edit\' | lexicon}</span></a>
	<!--<a href="[[++manager_url]]?a=security/user" data-action="iframe"><span class="fm-icon-user"></span> <span class="fm-link-text">{\'frontendmanager_btn_users\' | lexicon}</span></a>-->
	<a href="[[++manager_url]]?a=mgr/orders&namespace=minishop2" data-action="iframe"><span class="fm-icon-ms2"></span> <span class="fm-link-text">{\'frontendmanager_btn_ms2\' | lexicon}</span></a>
	<!--<a href="[[++manager_url]]?id=0&a=context/update&key={$_modx->context.key}" data-action="iframe"><span class="fm-icon-context"></span> <span class="fm-link-text">{\'frontendmanager_btn_context\' | lexicon}</span></a>-->
	<!--<a href="[[++manager_url]]?a=system/settings" data-action="iframe"><span class="fm-icon-settings"></span> <span class="fm-link-text">{\'frontendmanager_btn_settings\' | lexicon}</span></a>-->
	<!--<a href="[[++manager_url]]?a=system/event" data-action="iframe"><span class="fm-icon-log"></span><span class="fm-link-text">{\'frontendmanager_btn_log\' | lexicon}</span></a>-->
	<!--<a href="[[++manager_url]]?a=system/refresh_site" data-action="iframe"><span class="fm-icon-cache"></span><span class="fm-link-text">{\'frontendmanager_btn_cache\' | lexicon}</span></a>-->
	<a href="http://club-monet.ru/products-counts.html" ><span class="fm-icon-ms2"></span><span class="fm-link-text">Счетчик товаров</span></a>
</div>
',
    ),
  ),
  'd76309e00850466169982ff292f2478f' => 
  array (
    'criteria' => 
    array (
      'name' => 'frontendmanager',
    ),
    'object' => 
    array (
      'id' => 19,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'frontendmanager',
      'description' => '',
      'editor_type' => 0,
      'category' => 15,
      'cache_type' => 0,
      'plugincode' => 'if (!$modx->user->hasSessionContext(\'mgr\') || !$modx->user->isMember(\'Administrator\'))  return;
switch ($modx->event->name) {
    case \'OnWebPagePrerender\':
		if (!$modx->resource->get(\'template\')) break;
        $frontendManager = $modx->getService(\'frontendmanager\',\'frontendManager\', MODX_CORE_PATH . \'components/frontendmanager/model/frontendmanager/\', array());
        if(!$frontendManager) return;
		$contentTypes = explode(\',\', $modx->getOption(\'frontendmanager_contenttypes\'));
        if (in_array($modx->resource->content_type, $contentTypes)) {
			$modx->resource->_output .=  $frontendManager->initialize($modx->context->key);
        }
        break;
    case \'OnBeforeManagerPageInit\':
        if ($_GET[\'frame\']) {
			$modx->regClientCSS(MODX_ASSETS_URL.\'components/frontendmanager/css/mgr/\'.$modx->getOption(\'frontendmanager_manager_css\', NULL, \'manager.css\'));
			$modx->regClientStartupScript(MODX_ASSETS_URL.\'components/frontendmanager/js/mgr/\'.$modx->getOption(\'frontendmanager_manager_js\', NULL, \'manager.js\'));
        }
        break;
    default:
        break;
}
return;',
      'locked' => 0,
      'properties' => 'a:0:{}',
      'disabled' => 0,
      'moduleguid' => '',
      'static' => 0,
      'static_file' => 'core/components/frontendmanager/elements/plugins/plugin.frontendmanager.php',
      'content' => 'if (!$modx->user->hasSessionContext(\'mgr\') || !$modx->user->isMember(\'Administrator\'))  return;
switch ($modx->event->name) {
    case \'OnWebPagePrerender\':
		if (!$modx->resource->get(\'template\')) break;
        $frontendManager = $modx->getService(\'frontendmanager\',\'frontendManager\', MODX_CORE_PATH . \'components/frontendmanager/model/frontendmanager/\', array());
        if(!$frontendManager) return;
		$contentTypes = explode(\',\', $modx->getOption(\'frontendmanager_contenttypes\'));
        if (in_array($modx->resource->content_type, $contentTypes)) {
			$modx->resource->_output .=  $frontendManager->initialize($modx->context->key);
        }
        break;
    case \'OnBeforeManagerPageInit\':
        if ($_GET[\'frame\']) {
			$modx->regClientCSS(MODX_ASSETS_URL.\'components/frontendmanager/css/mgr/\'.$modx->getOption(\'frontendmanager_manager_css\', NULL, \'manager.css\'));
			$modx->regClientStartupScript(MODX_ASSETS_URL.\'components/frontendmanager/js/mgr/\'.$modx->getOption(\'frontendmanager_manager_js\', NULL, \'manager.js\'));
        }
        break;
    default:
        break;
}
return;',
    ),
  ),
  'e92bc84bf5259c677d798e8fd91c75e9' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 19,
      'event' => 'OnWebPagePrerender',
    ),
    'object' => 
    array (
      'pluginid' => 19,
      'event' => 'OnWebPagePrerender',
      'priority' => 0,
      'propertyset' => 0,
    ),
  ),
  'cd7ece59aafa9432508411e485cb2a75' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 19,
      'event' => 'OnBeforeManagerPageInit',
    ),
    'object' => 
    array (
      'pluginid' => 19,
      'event' => 'OnBeforeManagerPageInit',
      'priority' => 0,
      'propertyset' => 0,
    ),
  ),
);