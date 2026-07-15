<?php return array (
  '380060e7a1c06ec41aaa8008495f3883' => 
  array (
    'criteria' => 
    array (
      'name' => 'msdiscount',
    ),
    'object' => 
    array (
      'name' => 'msdiscount',
      'path' => '{core_path}components/msdiscount/',
      'assets_path' => '',
    ),
  ),
  '1e20e6c338c12c12e02c578bef006b32' => 
  array (
    'criteria' => 
    array (
      'key' => 'msd_price_round',
    ),
    'object' => 
    array (
      'key' => 'msd_price_round',
      'value' => '',
      'xtype' => 'combo-boolean',
      'namespace' => 'msdiscount',
      'area' => 'msd_main',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  '446e409781db3a227d03e9e97320d8d3' => 
  array (
    'criteria' => 
    array (
      'key' => 'msd_coupon_only_products',
    ),
    'object' => 
    array (
      'key' => 'msd_coupon_only_products',
      'value' => '1',
      'xtype' => 'combo-boolean',
      'namespace' => 'msdiscount',
      'area' => 'msd_main',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  '68d3689c2ccc6bd7953aaf6b898e02bc' => 
  array (
    'criteria' => 
    array (
      'name' => 'msDiscountManagerPolicy',
    ),
    'object' => 
    array (
      'id' => 13,
      'name' => 'msDiscountManagerPolicy',
      'description' => 'A policy for create and update msDiscount items.',
      'parent' => 0,
      'template' => 8,
      'class' => '',
      'data' => '{"msdiscount_save":true,"msdiscount_view":true,"formit":true,"formit_encryptions":false}',
      'lexicon' => 'msdiscount:permissions',
    ),
  ),
  '6b26b23b2265fa59c1fe88ea7ec76848' => 
  array (
    'criteria' => 
    array (
      'name' => 'msDiscountManagerPolicyTemplate',
    ),
    'object' => 
    array (
      'id' => 8,
      'template_group' => 1,
      'name' => 'msDiscountManagerPolicyTemplate',
      'description' => 'A policy for msDiscount managers.',
      'lexicon' => 'msdiscount:permissions',
    ),
  ),
  'c39dfad2c7c0da9a1448bc8840e713eb' => 
  array (
    'criteria' => 
    array (
      'template' => 8,
      'name' => 'msdiscount_save',
    ),
    'object' => 
    array (
      'id' => 226,
      'template' => 8,
      'name' => 'msdiscount_save',
      'description' => 'msdiscount_save',
      'value' => 1,
    ),
  ),
  '5c685a9ee3d54b7758eb1eb919ee5320' => 
  array (
    'criteria' => 
    array (
      'template' => 8,
      'name' => 'msdiscount_view',
    ),
    'object' => 
    array (
      'id' => 227,
      'template' => 8,
      'name' => 'msdiscount_view',
      'description' => 'msdiscount_view',
      'value' => 1,
    ),
  ),
  'ff8ce62a85ab4347d611b63b1525966f' => 
  array (
    'criteria' => 
    array (
      'namespace' => 'msdiscount',
      'controller' => 'index',
    ),
    'object' => 
    array (
      'id' => 7,
      'namespace' => 'msdiscount',
      'controller' => 'index',
      'haslayout' => 1,
      'lang_topics' => 'msdiscount:default',
      'assets' => '',
      'help_url' => '',
    ),
  ),
  '2b3714e575bfaa50c289dd3979059ed2' => 
  array (
    'criteria' => 
    array (
      'text' => 'msdiscount',
    ),
    'object' => 
    array (
      'text' => 'msdiscount',
      'parent' => 'minishop2',
      'action' => '7',
      'description' => 'msdiscount_menu_desc',
      'icon' => 'images/icons/plugin.gif',
      'menuindex' => 0,
      'params' => '',
      'handler' => '',
      'permissions' => '',
      'namespace' => 'core',
    ),
  ),
  '503c35b18514913096a9b25da057c160' => 
  array (
    'criteria' => 
    array (
      'category' => 'msDiscount',
    ),
    'object' => 
    array (
      'id' => 7,
      'parent' => 0,
      'category' => 'msDiscount',
      'rank' => 0,
    ),
  ),
  '89bb30ce6e988b16ab018429721b98cb' => 
  array (
    'criteria' => 
    array (
      'name' => 'tpl.msProducts.discount.row',
    ),
    'object' => 
    array (
      'id' => 48,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'tpl.msProducts.discount.row',
      'description' => '',
      'editor_type' => 0,
      'category' => 7,
      'cache_type' => 0,
      'snippet' => '<div class="row ms2_product">
	<div class="span2 col-md-2"><img src="[[+thumb:default=`[[++assets_url]]components/minishop2/img/web/ms2_small.png`]]" width="120" height="90" /></div>
	<div class="row span10 col-md-10">
		<form method="post" class="ms2_form">
			<a href="[[~[[+id]]]]">[[+pagetitle]]</a>
			<span class="flags">[[+new]] [[+popular]] [[+favorite]]</span>
			<span class="price">[[+price]] [[%ms2_frontend_currency]][[+remains]]</span>
			[[+old_price]]
			<button class="btn btn-default" type="submit" name="ms2_action" value="cart/add"><i class="glyphicon glyphicon-barcode"></i> [[%ms2_frontend_add_to_cart]]</button>
			<input type="hidden" name="id" value="[[+id]]">
			<input type="hidden" name="count" value="1">
			<input type="hidden" name="options" value="[]">
		</form>
		<p><small>[[+introtext]]</small></p>
	</div>
</div>
<br/><br/>
<!--minishop2_popular <i class="glyphicon glyphicon-star" title="[[%ms2_frontend_popular]]"></i>-->
<!--minishop2_new <i class="glyphicon glyphicon-flag" title="[[%ms2_frontend_new]]"></i>-->
<!--minishop2_favorite <i class="glyphicon glyphicon-bookmark" title="[[%ms2_frontend_favorite]]"></i>-->
<!--minishop2_old_price <span class="old_price">[[+old_price]] [[%ms2_frontend_currency]]</span>-->
<!--minishop2_remains  (-[[+sale_discount]] — <span class="msd_remains">[[+remains]]</span>)-->
<!--minishop2_!remains  (-[[+sale_discount]])-->',
      'locked' => 0,
      'properties' => NULL,
      'static' => 0,
      'static_file' => 'core/components/msdiscount/elements/chunks/chunk.msd_product_row.tpl',
      'content' => '<div class="row ms2_product">
	<div class="span2 col-md-2"><img src="[[+thumb:default=`[[++assets_url]]components/minishop2/img/web/ms2_small.png`]]" width="120" height="90" /></div>
	<div class="row span10 col-md-10">
		<form method="post" class="ms2_form">
			<a href="[[~[[+id]]]]">[[+pagetitle]]</a>
			<span class="flags">[[+new]] [[+popular]] [[+favorite]]</span>
			<span class="price">[[+price]] [[%ms2_frontend_currency]][[+remains]]</span>
			[[+old_price]]
			<button class="btn btn-default" type="submit" name="ms2_action" value="cart/add"><i class="glyphicon glyphicon-barcode"></i> [[%ms2_frontend_add_to_cart]]</button>
			<input type="hidden" name="id" value="[[+id]]">
			<input type="hidden" name="count" value="1">
			<input type="hidden" name="options" value="[]">
		</form>
		<p><small>[[+introtext]]</small></p>
	</div>
</div>
<br/><br/>
<!--minishop2_popular <i class="glyphicon glyphicon-star" title="[[%ms2_frontend_popular]]"></i>-->
<!--minishop2_new <i class="glyphicon glyphicon-flag" title="[[%ms2_frontend_new]]"></i>-->
<!--minishop2_favorite <i class="glyphicon glyphicon-bookmark" title="[[%ms2_frontend_favorite]]"></i>-->
<!--minishop2_old_price <span class="old_price">[[+old_price]] [[%ms2_frontend_currency]]</span>-->
<!--minishop2_remains  (-[[+sale_discount]] — <span class="msd_remains">[[+remains]]</span>)-->
<!--minishop2_!remains  (-[[+sale_discount]])-->',
    ),
  ),
  'f9cc9ed4e45b6fd2b88bb1752dc9d15e' => 
  array (
    'criteria' => 
    array (
      'name' => 'tpl.msProduct.discount',
    ),
    'object' => 
    array (
      'id' => 49,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'tpl.msProduct.discount',
      'description' => '',
      'editor_type' => 0,
      'category' => 7,
      'cache_type' => 0,
      'snippet' => '[[+remains]]
<!--minishop2_remains -[[+sale_discount]] — <span class="msd_remains">[[+remains]]</span>-->
<!--minishop2_!remains -[[+sale_discount]]-->',
      'locked' => 0,
      'properties' => NULL,
      'static' => 0,
      'static_file' => 'core/components/msdiscount/elements/chunks/chunk.msd_discount.tpl',
      'content' => '[[+remains]]
<!--minishop2_remains -[[+sale_discount]] — <span class="msd_remains">[[+remains]]</span>-->
<!--minishop2_!remains -[[+sale_discount]]-->',
    ),
  ),
  '665f1fc62a1c4620b1fcbe33a95f37b6' => 
  array (
    'criteria' => 
    array (
      'name' => 'msdBuyNow',
    ),
    'object' => 
    array (
      'id' => 36,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'msdBuyNow',
      'description' => '',
      'editor_type' => 0,
      'category' => 7,
      'cache_type' => 0,
      'snippet' => '/** @var array $scriptProperties */
/** @var pdoTools $pdoTools */
$pdoTools = $modx->getService(\'pdoTools\');
/** @var msDiscount $msDiscount */
$msDiscount = $modx->getService(\'msDiscount\');
if (!empty($frontend_css)) {
	$frontend_css = str_replace(\'[[+assetsUrl]]\', $msDiscount->config[\'assetsUrl\'], $frontend_css);
	$modx->regClientCSS($frontend_css);
}
if (!empty($frontend_js)) {
	$frontend_js = str_replace(\'[[+assetsUrl]]\', $msDiscount->config[\'assetsUrl\'], $frontend_js);
	$modx->regClientScript($frontend_js);
}

$date = date(\'Y-m-d H:i:s\');
$pdoTools->setStore(\'msd_date\', $date);
$usergroups = array_keys($msDiscount->getUserGroups($modx->user->id));
$sales = $msDiscount->getSales($date, !empty($scriptProperties[\'force_date\']));
if (!empty($sale)) {
	$pdoTools->setStore(\'msd_sale\', $sale);
	$tmp = array_map(\'trim\', explode(\',\', $sale));
	foreach ($sales as $id => $sale) {
		if (!in_array($id, $tmp)) {
			unset($sales[$id]);
		}
	}
}
if (empty($sales)) {
	return !empty($showLog) && $modx->user->hasSessionContext(\'mgr\')
		? $modx->lexicon(\'msd_err_no_sales\')
		: \'\';
}
$all = false;
$parents_in = array();
$parents_out = array();
foreach ($sales as $idx => $sale) {
	// Check user groups
	if (!empty($sale[\'users\'])) {
		$required = array();
		foreach ($sale[\'users\'] as $gid => $type) {
			if ($type == \'out\' && in_array($gid, $usergroups)) {
				unset($sales[$idx]);
				continue(2);
			}
			if ($type == \'in\') {
				$required[] = $gid;
			}
		}
		if (!empty($required) && !array_intersect($required, $usergroups)) {
			unset($sales[$idx]);
			continue;
		}
	}
	// Check product groups
	if (!empty($sale[\'products\'])) {
		foreach ($sale[\'products\'] as $gid => $type) {
			$c = $modx->newQuery(\'modResourceGroupResource\', array(\'document_group\' => $gid));
			$c->select(\'document\');
			$tstart = microtime(true);
			if ($c->prepare() && $c->stmt->execute()) {
				$modx->queryTime += microtime(true) - $tstart;
				$modx->executedQueries++;
				if ($ids = $c->stmt->fetchAll(PDO::FETCH_COLUMN)) {
					if ($type == \'in\') {
						$parents_in = array_merge($parents_in, $ids);
					}
					else {
						$parents_out = array_merge($parents_out, $ids);
					}
				}
			}
		}
	}
	// All products
	else {
		$all = true;
		break;
	}
}

if (!$parents_in && !$parents_out && !$all) {
	return !empty($showLog) && $modx->user->hasSessionContext(\'mgr\')
		? $modx->lexicon(\'msd_err_no_sales\')
		: \'\';
}

if (empty($scriptProperties[\'prepareSnippet\'])) {
	$scriptProperties[\'prepareSnippet\'] = \'msdGetDiscount\';
}

$scriptProperties[\'parents\'] = 0;
if (!empty($scriptProperties[\'where\'])) {
	$where = !is_array($scriptProperties[\'where\'])
		? $modx->fromJSON($scriptProperties[\'where\'])
		: $scriptProperties[\'where\'];
}
else {
	$where = array();
}
if (!$all) {
	$depth = (isset($config[\'depth\']) && $config[\'depth\'] !== \'\')
		? (integer)$config[\'depth\']
		: 10;
	if (!empty($depth) && $depth > 0) {
		$pids = array();
		$q = $modx->newQuery(\'modResource\', array(\'id:IN\' => array_merge($parents_in, $parents_out)));
		$q->select(\'id,context_key\');
		$tstart = microtime(true);
		if ($q->prepare() && $q->stmt->execute()) {
			$modx->queryTime += microtime(true) - $tstart;
			$modx->executedQueries++;
			while ($row = $q->stmt->fetch(PDO::FETCH_ASSOC)) {
				$pids[$row[\'id\']] = $row[\'context_key\'];
			}
		}
		foreach ($pids as $k => $v) {
			if (!is_numeric($k)) {
				continue;
			}
			elseif (in_array($k, $parents_in)) {
				$parents_in = array_merge($parents_in, $modx->getChildIds($k, $depth, array(\'context\' => $v)));
			}
			else {
				$parents_out = array_merge($parents_out, $modx->getChildIds($k, $depth, array(\'context\' => $v)));
			}
		}
		if (empty($parents_in)) {
			$parents_in = $modx->getChildIds(0, $depth, array(\'context\' => $this->config[\'context\']));
		}
		// Support of miniShop2 categories
		$members = array();
		if (!empty($parents_in) || !empty($parents_out)) {
			$q = $modx->newQuery(\'msCategoryMember\');
			if (!empty($parents_in)) {
				$q->where(array(\'category_id:IN\' => $parents_in));
			}
			if (!empty($parents_out)) {
				$q->where(array(\'category_id:NOT IN\' => $parents_out));
			}
			$q->select(\'product_id\');
			$tstart = microtime(true);
			if ($q->prepare() && $q->stmt->execute()) {
				$modx->queryTime += microtime(true) - $tstart;
				$modx->executedQueries++;
				$members = $q->stmt->fetchAll(PDO::FETCH_COLUMN);
			}
		}
		// Add parent to conditions
		if (!empty($parents_in) && !empty($members)) {
			$members = array_merge($members, $parents_in);
			$where[] = array(
				\'parent:IN\' => $parents_in,
				\'OR:id:IN\' => $members,
			);
		}
		elseif (!empty($parents_in)) {
			$where[] = array(
				\'parent:IN\' => $parents_in,
				\'OR:id:IN\' => $parents_in,
			);
		}
		if (!empty($parents_out)) {
			$where[] = array(
				\'parent:NOT IN\' => $parents_out,
				\'AND:id:NOT IN\' => $parents_out,
			);
		}
	}
}
$scriptProperties[\'where\'] = $modx->toJSON($where);

return $modx->runSnippet(\'msProducts\', $scriptProperties);',
      'locked' => 0,
      'properties' => 'a:5:{s:4:"sale";a:7:{s:4:"name";s:4:"sale";s:4:"desc";s:20:"msdiscount_prop_sale";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:0:"";s:7:"lexicon";s:21:"msdiscount:properties";s:4:"area";s:0:"";}s:3:"tpl";a:7:{s:4:"name";s:3:"tpl";s:4:"desc";s:19:"msdiscount_prop_tpl";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:27:"tpl.msProducts.discount.row";s:7:"lexicon";s:21:"msdiscount:properties";s:4:"area";s:0:"";}s:12:"frontend_css";a:7:{s:4:"name";s:12:"frontend_css";s:4:"desc";s:28:"msdiscount_prop_frontend_css";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:30:"[[+assetsUrl]]css/web/main.css";s:7:"lexicon";s:21:"msdiscount:properties";s:4:"area";s:0:"";}s:11:"frontend_js";a:7:{s:4:"name";s:11:"frontend_js";s:4:"desc";s:27:"msdiscount_prop_frontend_js";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:31:"[[+assetsUrl]]js/web/default.js";s:7:"lexicon";s:21:"msdiscount:properties";s:4:"area";s:0:"";}s:10:"force_date";a:7:{s:4:"name";s:10:"force_date";s:4:"desc";s:26:"msdiscount_prop_force_date";s:4:"type";s:13:"combo-boolean";s:7:"options";a:0:{}s:5:"value";b:1;s:7:"lexicon";s:21:"msdiscount:properties";s:4:"area";s:0:"";}}',
      'moduleguid' => '',
      'static' => 0,
      'static_file' => 'core/components/msdiscount/elements/snippets/snippet.msdbuynow.php',
      'content' => '/** @var array $scriptProperties */
/** @var pdoTools $pdoTools */
$pdoTools = $modx->getService(\'pdoTools\');
/** @var msDiscount $msDiscount */
$msDiscount = $modx->getService(\'msDiscount\');
if (!empty($frontend_css)) {
	$frontend_css = str_replace(\'[[+assetsUrl]]\', $msDiscount->config[\'assetsUrl\'], $frontend_css);
	$modx->regClientCSS($frontend_css);
}
if (!empty($frontend_js)) {
	$frontend_js = str_replace(\'[[+assetsUrl]]\', $msDiscount->config[\'assetsUrl\'], $frontend_js);
	$modx->regClientScript($frontend_js);
}

$date = date(\'Y-m-d H:i:s\');
$pdoTools->setStore(\'msd_date\', $date);
$usergroups = array_keys($msDiscount->getUserGroups($modx->user->id));
$sales = $msDiscount->getSales($date, !empty($scriptProperties[\'force_date\']));
if (!empty($sale)) {
	$pdoTools->setStore(\'msd_sale\', $sale);
	$tmp = array_map(\'trim\', explode(\',\', $sale));
	foreach ($sales as $id => $sale) {
		if (!in_array($id, $tmp)) {
			unset($sales[$id]);
		}
	}
}
if (empty($sales)) {
	return !empty($showLog) && $modx->user->hasSessionContext(\'mgr\')
		? $modx->lexicon(\'msd_err_no_sales\')
		: \'\';
}
$all = false;
$parents_in = array();
$parents_out = array();
foreach ($sales as $idx => $sale) {
	// Check user groups
	if (!empty($sale[\'users\'])) {
		$required = array();
		foreach ($sale[\'users\'] as $gid => $type) {
			if ($type == \'out\' && in_array($gid, $usergroups)) {
				unset($sales[$idx]);
				continue(2);
			}
			if ($type == \'in\') {
				$required[] = $gid;
			}
		}
		if (!empty($required) && !array_intersect($required, $usergroups)) {
			unset($sales[$idx]);
			continue;
		}
	}
	// Check product groups
	if (!empty($sale[\'products\'])) {
		foreach ($sale[\'products\'] as $gid => $type) {
			$c = $modx->newQuery(\'modResourceGroupResource\', array(\'document_group\' => $gid));
			$c->select(\'document\');
			$tstart = microtime(true);
			if ($c->prepare() && $c->stmt->execute()) {
				$modx->queryTime += microtime(true) - $tstart;
				$modx->executedQueries++;
				if ($ids = $c->stmt->fetchAll(PDO::FETCH_COLUMN)) {
					if ($type == \'in\') {
						$parents_in = array_merge($parents_in, $ids);
					}
					else {
						$parents_out = array_merge($parents_out, $ids);
					}
				}
			}
		}
	}
	// All products
	else {
		$all = true;
		break;
	}
}

if (!$parents_in && !$parents_out && !$all) {
	return !empty($showLog) && $modx->user->hasSessionContext(\'mgr\')
		? $modx->lexicon(\'msd_err_no_sales\')
		: \'\';
}

if (empty($scriptProperties[\'prepareSnippet\'])) {
	$scriptProperties[\'prepareSnippet\'] = \'msdGetDiscount\';
}

$scriptProperties[\'parents\'] = 0;
if (!empty($scriptProperties[\'where\'])) {
	$where = !is_array($scriptProperties[\'where\'])
		? $modx->fromJSON($scriptProperties[\'where\'])
		: $scriptProperties[\'where\'];
}
else {
	$where = array();
}
if (!$all) {
	$depth = (isset($config[\'depth\']) && $config[\'depth\'] !== \'\')
		? (integer)$config[\'depth\']
		: 10;
	if (!empty($depth) && $depth > 0) {
		$pids = array();
		$q = $modx->newQuery(\'modResource\', array(\'id:IN\' => array_merge($parents_in, $parents_out)));
		$q->select(\'id,context_key\');
		$tstart = microtime(true);
		if ($q->prepare() && $q->stmt->execute()) {
			$modx->queryTime += microtime(true) - $tstart;
			$modx->executedQueries++;
			while ($row = $q->stmt->fetch(PDO::FETCH_ASSOC)) {
				$pids[$row[\'id\']] = $row[\'context_key\'];
			}
		}
		foreach ($pids as $k => $v) {
			if (!is_numeric($k)) {
				continue;
			}
			elseif (in_array($k, $parents_in)) {
				$parents_in = array_merge($parents_in, $modx->getChildIds($k, $depth, array(\'context\' => $v)));
			}
			else {
				$parents_out = array_merge($parents_out, $modx->getChildIds($k, $depth, array(\'context\' => $v)));
			}
		}
		if (empty($parents_in)) {
			$parents_in = $modx->getChildIds(0, $depth, array(\'context\' => $this->config[\'context\']));
		}
		// Support of miniShop2 categories
		$members = array();
		if (!empty($parents_in) || !empty($parents_out)) {
			$q = $modx->newQuery(\'msCategoryMember\');
			if (!empty($parents_in)) {
				$q->where(array(\'category_id:IN\' => $parents_in));
			}
			if (!empty($parents_out)) {
				$q->where(array(\'category_id:NOT IN\' => $parents_out));
			}
			$q->select(\'product_id\');
			$tstart = microtime(true);
			if ($q->prepare() && $q->stmt->execute()) {
				$modx->queryTime += microtime(true) - $tstart;
				$modx->executedQueries++;
				$members = $q->stmt->fetchAll(PDO::FETCH_COLUMN);
			}
		}
		// Add parent to conditions
		if (!empty($parents_in) && !empty($members)) {
			$members = array_merge($members, $parents_in);
			$where[] = array(
				\'parent:IN\' => $parents_in,
				\'OR:id:IN\' => $members,
			);
		}
		elseif (!empty($parents_in)) {
			$where[] = array(
				\'parent:IN\' => $parents_in,
				\'OR:id:IN\' => $parents_in,
			);
		}
		if (!empty($parents_out)) {
			$where[] = array(
				\'parent:NOT IN\' => $parents_out,
				\'AND:id:NOT IN\' => $parents_out,
			);
		}
	}
}
$scriptProperties[\'where\'] = $modx->toJSON($where);

return $modx->runSnippet(\'msProducts\', $scriptProperties);',
    ),
  ),
  'c0716c3e7c9b6acf86a08df145e92611' => 
  array (
    'criteria' => 
    array (
      'name' => 'msdGetDiscount',
    ),
    'object' => 
    array (
      'id' => 37,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'msdGetDiscount',
      'description' => '',
      'editor_type' => 0,
      'category' => 7,
      'cache_type' => 0,
      'snippet' => '/** @var msDiscount $msDiscount */
/** @var pdoTools $pdoTools */
$pdoTools = $modx->getService(\'pdoTools\');
$msDiscount = $modx->getService(\'msDiscount\');
$date = $pdoTools->getStore(\'msd_date\');
$usergroups = array_keys($msDiscount->getUserGroups($modx->user->id));
$sales = !empty($date)
	? $msDiscount->getSales($date, true)
	: $msDiscount->getSales();
if (empty($sale)) {
	$sale = $pdoTools->getStore(\'msd_sale\');
}
if (!empty($sale)) {
	$tmp = array_map(\'trim\', explode(\',\', $sale));
	foreach ($sales as $id => $sale) {
		if (!in_array($id, $tmp)) {
			unset($sales[$id]);
		}
	}
}
if (!empty($row) && is_array($row)) {
	$mode = \'prepare\';
	if (!empty($row[\'id\'])) {
		$id = $row[\'id\'];
	}
}
else {
	$mode = \'standalone\';
	if (!empty($frontend_css)) {
		$frontend_css = str_replace(\'[[+assetsUrl]]\', $msDiscount->config[\'assetsUrl\'], $frontend_css);
		$modx->regClientCSS($frontend_css);
	}
	if (!empty($frontend_js)) {
		$frontend_js = str_replace(\'[[+assetsUrl]]\', $msDiscount->config[\'assetsUrl\'], $frontend_js);
		$modx->regClientScript($frontend_js);
	}
	if (empty($id)) {
		$id = $modx->resource->id;
	}
}

$remains = $discount = 0;
if (!empty($id) && !empty($sales)) {
	foreach ($sales as $sale) {
		// Check user groups
		if (!empty($sale[\'users\'])) {
			$required = array();
			foreach ($sale[\'users\'] as $gid => $type) {
				if ($type == \'out\' && in_array($gid, $usergroups)) {
					unset($sales[$idx]);
					continue(2);
				}
				if ($type == \'in\') {
					$required[] = $gid;
				}
			}
			if (!empty($required) && !array_intersect($required, $usergroups)) {
				unset($sales[$idx]);
				continue;
			}
		}
		// Check product groups
		if (!empty($sale[\'products\'])) {
			$groups_in = $groups_out = array();
			foreach ($sale[\'products\'] as $gid => $type) {
				if ($type == \'out\') {
					$groups_out[] = $gid;
					unset($sale[\'products\'][$gid]);
				}
				else {
					$groups_in[] = $gid;
				}
			}
		}

		if (!empty($groups_out) || !empty($groups_in)) {
			$ids = $modx->getParentIds($id);
			$ids[] = $id;

			$q = $modx->newQuery(\'msCategoryMember\', array(\'product_id\' => $id));
			$q->select(\'category_id\');
			$tstart = microtime(true);
			if ($q->prepare() && $q->stmt->execute()) {
				$modx->queryTime += microtime(true) - $tstart;
				$modx->executedQueries++;
				if ($tmp = $q->stmt->fetchAll(PDO::FETCH_COLUMN)) {
					$ids = array_merge($ids, $tmp);
				}
			}
			$ids = array_unique($ids);
			$where = count($ids) > 1
				? array(\'document:IN\' => $ids)
				: array(\'document\' => $ids[0]);

			$q = $modx->newQuery(\'modResourceGroupResource\', $where);
			$q->select(\'document_group\');
			$tstart = microtime(true);
			if ($q->prepare() && $q->stmt->execute()) {
				$modx->queryTime += microtime(true) - $tstart;
				$modx->executedQueries++;
				$groups = $q->stmt->fetchAll(PDO::FETCH_COLUMN);
				if (!empty($groups_out) && array_intersect($groups_out, $groups)) {
					continue;
				}
				elseif (!empty($groups_in) && !array_intersect($groups_in, $groups)) {
					continue;
				}
			}
		}

		// Product match
		$tmp_remains = ($sale[\'ends\'] != \'0000-00-00 00:00:00\')
			? strtotime($sale[\'ends\']) - time()
			: 0;
		if (strpos($sale[\'discount\'], \'%\') !== false && (empty($discount) || strpos($discount, \'%\') !== false)) {
			if ($sale[\'discount\'] > $discount) {
				$discount = $sale[\'discount\'];
				$remains = $tmp_remains;
			}
		}
		elseif (is_numeric($sale[\'discount\']) && is_numeric($discount)) {
			if ($sale[\'discount\'] > $discount) {
				$discount = $sale[\'discount\'];
				$remains = $tmp_remains;
			}
		}
		else {
			$discount = $sale[\'discount\'];
			$remains = $tmp_remains;
		}
	}
}

$arr = array(
	\'sale_discount\' => $discount,
	\'remains\' => $remains,
);
if ($mode == \'standalone\') {
	$pdoTools->config[\'nestedChunkPrefix\'] = \'minishop2_\';

	return !empty($tpl)
		? $pdoTools->getChunk($tpl, $arr)
		: print_r($arr, true);
}
elseif (!empty($row)) {
	$row = array_merge($row, $arr);

	return $modx->toJSON($row);
}',
      'locked' => 0,
      'properties' => 'a:5:{s:2:"id";a:7:{s:4:"name";s:2:"id";s:4:"desc";s:18:"msdiscount_prop_id";s:4:"type";s:11:"numberfield";s:7:"options";a:0:{}s:5:"value";s:0:"";s:7:"lexicon";s:21:"msdiscount:properties";s:4:"area";s:0:"";}s:4:"sale";a:7:{s:4:"name";s:4:"sale";s:4:"desc";s:20:"msdiscount_prop_sale";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:0:"";s:7:"lexicon";s:21:"msdiscount:properties";s:4:"area";s:0:"";}s:3:"tpl";a:7:{s:4:"name";s:3:"tpl";s:4:"desc";s:19:"msdiscount_prop_tpl";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:22:"tpl.msProduct.discount";s:7:"lexicon";s:21:"msdiscount:properties";s:4:"area";s:0:"";}s:12:"frontend_css";a:7:{s:4:"name";s:12:"frontend_css";s:4:"desc";s:28:"msdiscount_prop_frontend_css";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:30:"[[+assetsUrl]]css/web/main.css";s:7:"lexicon";s:21:"msdiscount:properties";s:4:"area";s:0:"";}s:11:"frontend_js";a:7:{s:4:"name";s:11:"frontend_js";s:4:"desc";s:27:"msdiscount_prop_frontend_js";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:31:"[[+assetsUrl]]js/web/default.js";s:7:"lexicon";s:21:"msdiscount:properties";s:4:"area";s:0:"";}}',
      'moduleguid' => '',
      'static' => 0,
      'static_file' => 'core/components/msdiscount/elements/snippets/snippet.msdgetdiscount.php',
      'content' => '/** @var msDiscount $msDiscount */
/** @var pdoTools $pdoTools */
$pdoTools = $modx->getService(\'pdoTools\');
$msDiscount = $modx->getService(\'msDiscount\');
$date = $pdoTools->getStore(\'msd_date\');
$usergroups = array_keys($msDiscount->getUserGroups($modx->user->id));
$sales = !empty($date)
	? $msDiscount->getSales($date, true)
	: $msDiscount->getSales();
if (empty($sale)) {
	$sale = $pdoTools->getStore(\'msd_sale\');
}
if (!empty($sale)) {
	$tmp = array_map(\'trim\', explode(\',\', $sale));
	foreach ($sales as $id => $sale) {
		if (!in_array($id, $tmp)) {
			unset($sales[$id]);
		}
	}
}
if (!empty($row) && is_array($row)) {
	$mode = \'prepare\';
	if (!empty($row[\'id\'])) {
		$id = $row[\'id\'];
	}
}
else {
	$mode = \'standalone\';
	if (!empty($frontend_css)) {
		$frontend_css = str_replace(\'[[+assetsUrl]]\', $msDiscount->config[\'assetsUrl\'], $frontend_css);
		$modx->regClientCSS($frontend_css);
	}
	if (!empty($frontend_js)) {
		$frontend_js = str_replace(\'[[+assetsUrl]]\', $msDiscount->config[\'assetsUrl\'], $frontend_js);
		$modx->regClientScript($frontend_js);
	}
	if (empty($id)) {
		$id = $modx->resource->id;
	}
}

$remains = $discount = 0;
if (!empty($id) && !empty($sales)) {
	foreach ($sales as $sale) {
		// Check user groups
		if (!empty($sale[\'users\'])) {
			$required = array();
			foreach ($sale[\'users\'] as $gid => $type) {
				if ($type == \'out\' && in_array($gid, $usergroups)) {
					unset($sales[$idx]);
					continue(2);
				}
				if ($type == \'in\') {
					$required[] = $gid;
				}
			}
			if (!empty($required) && !array_intersect($required, $usergroups)) {
				unset($sales[$idx]);
				continue;
			}
		}
		// Check product groups
		if (!empty($sale[\'products\'])) {
			$groups_in = $groups_out = array();
			foreach ($sale[\'products\'] as $gid => $type) {
				if ($type == \'out\') {
					$groups_out[] = $gid;
					unset($sale[\'products\'][$gid]);
				}
				else {
					$groups_in[] = $gid;
				}
			}
		}

		if (!empty($groups_out) || !empty($groups_in)) {
			$ids = $modx->getParentIds($id);
			$ids[] = $id;

			$q = $modx->newQuery(\'msCategoryMember\', array(\'product_id\' => $id));
			$q->select(\'category_id\');
			$tstart = microtime(true);
			if ($q->prepare() && $q->stmt->execute()) {
				$modx->queryTime += microtime(true) - $tstart;
				$modx->executedQueries++;
				if ($tmp = $q->stmt->fetchAll(PDO::FETCH_COLUMN)) {
					$ids = array_merge($ids, $tmp);
				}
			}
			$ids = array_unique($ids);
			$where = count($ids) > 1
				? array(\'document:IN\' => $ids)
				: array(\'document\' => $ids[0]);

			$q = $modx->newQuery(\'modResourceGroupResource\', $where);
			$q->select(\'document_group\');
			$tstart = microtime(true);
			if ($q->prepare() && $q->stmt->execute()) {
				$modx->queryTime += microtime(true) - $tstart;
				$modx->executedQueries++;
				$groups = $q->stmt->fetchAll(PDO::FETCH_COLUMN);
				if (!empty($groups_out) && array_intersect($groups_out, $groups)) {
					continue;
				}
				elseif (!empty($groups_in) && !array_intersect($groups_in, $groups)) {
					continue;
				}
			}
		}

		// Product match
		$tmp_remains = ($sale[\'ends\'] != \'0000-00-00 00:00:00\')
			? strtotime($sale[\'ends\']) - time()
			: 0;
		if (strpos($sale[\'discount\'], \'%\') !== false && (empty($discount) || strpos($discount, \'%\') !== false)) {
			if ($sale[\'discount\'] > $discount) {
				$discount = $sale[\'discount\'];
				$remains = $tmp_remains;
			}
		}
		elseif (is_numeric($sale[\'discount\']) && is_numeric($discount)) {
			if ($sale[\'discount\'] > $discount) {
				$discount = $sale[\'discount\'];
				$remains = $tmp_remains;
			}
		}
		else {
			$discount = $sale[\'discount\'];
			$remains = $tmp_remains;
		}
	}
}

$arr = array(
	\'sale_discount\' => $discount,
	\'remains\' => $remains,
);
if ($mode == \'standalone\') {
	$pdoTools->config[\'nestedChunkPrefix\'] = \'minishop2_\';

	return !empty($tpl)
		? $pdoTools->getChunk($tpl, $arr)
		: print_r($arr, true);
}
elseif (!empty($row)) {
	$row = array_merge($row, $arr);

	return $modx->toJSON($row);
}',
    ),
  ),
  '70e7b28635326926be1e972b98883e97' => 
  array (
    'criteria' => 
    array (
      'name' => 'msDiscount',
    ),
    'object' => 
    array (
      'id' => 8,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'msDiscount',
      'description' => '',
      'editor_type' => 0,
      'category' => 7,
      'cache_type' => 0,
      'plugincode' => '/** @var msDiscount $msDiscount */
$msDiscount = $modx->getService(\'msDiscount\');

switch ($modx->event->name) {

	case \'msOnGetProductPrice\':
		if ($modx->context->key == \'mgr\') {return;}
		/**
		 * Counts discount of current product for current user, based on rules in msDiscount component
		 * New price must be set in $modx->event->returnedValues[\'price\']
		 *
		 * @var msProductData $product Object with product properties
		 * @var array $data Array with product properties. Can be empty!
		 * @var float $price Current price of product
		 */
		if (!isset($modx->event->returnedValues[\'price\'])) {
			$modx->event->returnedValues[\'price\'] = $price;
		}
		// Get link to product price
		$price = & $modx->event->returnedValues[\'price\'];
		$new_price = $msDiscount->getNewPrice($product->id, $price);
		if ($new_price !== false) {
			$price = $new_price;
		}
		break;

	case \'msOnChangeOrderStatus\':
		/**
		 * Add user to discounts group if he spent required sum for join
		 *
		 * @var msOrder $order
		 * @var integer $status
		 */
		if ($status != 2) {return;}

		/** @var modUser $user */
		if ($user = $order->getOne(\'User\')) {
			if ($profile = $modx->getObject(\'msCustomerProfile\', $user->id)) {
				$spent = $profile->spent;
				if ($spent > 0) {
					$q = $modx->newQuery(\'msdUserGroup\');
					$q->where(\'joinsum > 0\');
					$q->select(\'id,joinsum\');
					if ($q->prepare() && $q->stmt->execute()) {
						$groups = $msDiscount->getUserGroups($user->id);
						while ($row = $q->stmt->fetch(PDO::FETCH_ASSOC)) {
							if ($spent > $row[\'joinsum\'] && !isset($groups[$row[\'id\']])) {
								$user->joinGroup((integer) $row[\'id\'], 1);
							}
						}
					}
				}
			}
		}
		break;

	case \'msOnBeforeAddToOrder\':
		/** @var string $key */
		if ($key == \'coupon_code\' && !empty($value)) {
			$check = $msDiscount->checkCoupon($value);
			if ($check !== true) {
				$modx->event->output($check);
			}
		}
		break;

	case \'msOnGetOrderCost\':
		/** @var float $cost */
		if (!empty($with_cart) && !empty($cost)) {
			/**@var msOrderInterface $order */
			if ($data = $order->get()) {
				if (!empty($data[\'coupon_code\']) && $msDiscount->checkCoupon($data[\'coupon_code\']) === true) {
					$order_cost = $cost;
					if ($modx->getOption(\'msd_coupon_only_products\', null, true)) {
						/** @var msCartHandler $cart */
						$tmp = $cart->status();
						$order_cost = $tmp[\'total_cost\'];
					}
					if ($discount = $msDiscount->getCouponDiscount($data[\'coupon_code\'], $order_cost)) {
						$cost -= $discount;
					}
					if ($cost >= 0) {
						$modx->event->returnedValues[\'cost\'] = $cost;
					}
				}
			}
		}
		break;

	case \'msOnCreateOrder\':
		/**@var msOrderInterface $order */
		if ($data = $order->get()) {
			/**@var msdCoupon $coupon */
			if (!empty($data[\'coupon_code\']) && $coupon = $modx->getObject(\'msdCoupon\', array(\'code\' => $data[\'coupon_code\']))) {
				/**@var msOrder $msOrder */
				$coupon->fromArray(array(
					\'active\' => false,
					\'activatedon\' => date(\'Y-m-d H:i:s\'),
					\'order_id\' => $msOrder->get(\'id\'),
				));
				$coupon->save();
				$properties = $msOrder->get(\'properties\');
				if (!is_array($properties)) {
					$properties = array();
				}
				$properties[\'coupon_code\'] = $coupon->get(\'code\');
				if ($group = $coupon->getOne(\'Group\')) {
					$properties[\'coupon_discount\'] = $group->get(\'discount\');
				}
				$msOrder->set(\'properties\', $properties);
				$msOrder->save();
			}
		}
		break;

	case \'OnWebLogin\':
	case \'OnWebLogout\':
		/** Set flag for cart reload */
		$_SESSION[\'minishop2\'][\'cart_reload\'] = true;
		break;

	case \'OnLoadWebDocument\':
		/**
		 * Recalculate cart of user if flag is set
		 * @var miniShop2 $miniShop2
		 */
		if (empty($_SESSION[\'minishop2\'][\'cart_reload\'])) {return;}

		$miniShop2 = $modx->getService(\'miniShop2\');
		$miniShop2->initialize($modx->context->key);

		$cart = $miniShop2->cart->get();
		if (!empty($cart)) {
			foreach ($cart as $key => $item) {
				/** @var msProduct $product */
				if ($product = $modx->getObject(\'msProductData\', $item[\'id\'])) {
					$cart[$key][\'price\'] = $product->getPrice();
				}
			}
			$miniShop2->cart->set($cart);
		}
		unset($_SESSION[\'minishop2\'][\'cart_reload\']);
		break;
}',
      'locked' => 0,
      'properties' => NULL,
      'disabled' => 0,
      'moduleguid' => '',
      'static' => 0,
      'static_file' => 'core/components/msdiscount/elements/plugins/plugin.msdiscount.php',
      'content' => '/** @var msDiscount $msDiscount */
$msDiscount = $modx->getService(\'msDiscount\');

switch ($modx->event->name) {

	case \'msOnGetProductPrice\':
		if ($modx->context->key == \'mgr\') {return;}
		/**
		 * Counts discount of current product for current user, based on rules in msDiscount component
		 * New price must be set in $modx->event->returnedValues[\'price\']
		 *
		 * @var msProductData $product Object with product properties
		 * @var array $data Array with product properties. Can be empty!
		 * @var float $price Current price of product
		 */
		if (!isset($modx->event->returnedValues[\'price\'])) {
			$modx->event->returnedValues[\'price\'] = $price;
		}
		// Get link to product price
		$price = & $modx->event->returnedValues[\'price\'];
		$new_price = $msDiscount->getNewPrice($product->id, $price);
		if ($new_price !== false) {
			$price = $new_price;
		}
		break;

	case \'msOnChangeOrderStatus\':
		/**
		 * Add user to discounts group if he spent required sum for join
		 *
		 * @var msOrder $order
		 * @var integer $status
		 */
		if ($status != 2) {return;}

		/** @var modUser $user */
		if ($user = $order->getOne(\'User\')) {
			if ($profile = $modx->getObject(\'msCustomerProfile\', $user->id)) {
				$spent = $profile->spent;
				if ($spent > 0) {
					$q = $modx->newQuery(\'msdUserGroup\');
					$q->where(\'joinsum > 0\');
					$q->select(\'id,joinsum\');
					if ($q->prepare() && $q->stmt->execute()) {
						$groups = $msDiscount->getUserGroups($user->id);
						while ($row = $q->stmt->fetch(PDO::FETCH_ASSOC)) {
							if ($spent > $row[\'joinsum\'] && !isset($groups[$row[\'id\']])) {
								$user->joinGroup((integer) $row[\'id\'], 1);
							}
						}
					}
				}
			}
		}
		break;

	case \'msOnBeforeAddToOrder\':
		/** @var string $key */
		if ($key == \'coupon_code\' && !empty($value)) {
			$check = $msDiscount->checkCoupon($value);
			if ($check !== true) {
				$modx->event->output($check);
			}
		}
		break;

	case \'msOnGetOrderCost\':
		/** @var float $cost */
		if (!empty($with_cart) && !empty($cost)) {
			/**@var msOrderInterface $order */
			if ($data = $order->get()) {
				if (!empty($data[\'coupon_code\']) && $msDiscount->checkCoupon($data[\'coupon_code\']) === true) {
					$order_cost = $cost;
					if ($modx->getOption(\'msd_coupon_only_products\', null, true)) {
						/** @var msCartHandler $cart */
						$tmp = $cart->status();
						$order_cost = $tmp[\'total_cost\'];
					}
					if ($discount = $msDiscount->getCouponDiscount($data[\'coupon_code\'], $order_cost)) {
						$cost -= $discount;
					}
					if ($cost >= 0) {
						$modx->event->returnedValues[\'cost\'] = $cost;
					}
				}
			}
		}
		break;

	case \'msOnCreateOrder\':
		/**@var msOrderInterface $order */
		if ($data = $order->get()) {
			/**@var msdCoupon $coupon */
			if (!empty($data[\'coupon_code\']) && $coupon = $modx->getObject(\'msdCoupon\', array(\'code\' => $data[\'coupon_code\']))) {
				/**@var msOrder $msOrder */
				$coupon->fromArray(array(
					\'active\' => false,
					\'activatedon\' => date(\'Y-m-d H:i:s\'),
					\'order_id\' => $msOrder->get(\'id\'),
				));
				$coupon->save();
				$properties = $msOrder->get(\'properties\');
				if (!is_array($properties)) {
					$properties = array();
				}
				$properties[\'coupon_code\'] = $coupon->get(\'code\');
				if ($group = $coupon->getOne(\'Group\')) {
					$properties[\'coupon_discount\'] = $group->get(\'discount\');
				}
				$msOrder->set(\'properties\', $properties);
				$msOrder->save();
			}
		}
		break;

	case \'OnWebLogin\':
	case \'OnWebLogout\':
		/** Set flag for cart reload */
		$_SESSION[\'minishop2\'][\'cart_reload\'] = true;
		break;

	case \'OnLoadWebDocument\':
		/**
		 * Recalculate cart of user if flag is set
		 * @var miniShop2 $miniShop2
		 */
		if (empty($_SESSION[\'minishop2\'][\'cart_reload\'])) {return;}

		$miniShop2 = $modx->getService(\'miniShop2\');
		$miniShop2->initialize($modx->context->key);

		$cart = $miniShop2->cart->get();
		if (!empty($cart)) {
			foreach ($cart as $key => $item) {
				/** @var msProduct $product */
				if ($product = $modx->getObject(\'msProductData\', $item[\'id\'])) {
					$cart[$key][\'price\'] = $product->getPrice();
				}
			}
			$miniShop2->cart->set($cart);
		}
		unset($_SESSION[\'minishop2\'][\'cart_reload\']);
		break;
}',
    ),
  ),
  '91824ed58649e75c10c5c94a56714a72' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 8,
      'event' => 'msOnGetProductPrice',
    ),
    'object' => 
    array (
      'pluginid' => 8,
      'event' => 'msOnGetProductPrice',
      'priority' => 0,
      'propertyset' => 0,
    ),
  ),
  '92ba8e59e22855455b339a6988173a62' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 8,
      'event' => 'msOnChangeOrderStatus',
    ),
    'object' => 
    array (
      'pluginid' => 8,
      'event' => 'msOnChangeOrderStatus',
      'priority' => 10,
      'propertyset' => 0,
    ),
  ),
  '6c6c78fbb706b4bb6bb5c12058a6a5a6' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 8,
      'event' => 'msOnBeforeAddToOrder',
    ),
    'object' => 
    array (
      'pluginid' => 8,
      'event' => 'msOnBeforeAddToOrder',
      'priority' => 0,
      'propertyset' => 0,
    ),
  ),
  '7cc6102e8f99442609c59d780d619e7d' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 8,
      'event' => 'msOnGetOrderCost',
    ),
    'object' => 
    array (
      'pluginid' => 8,
      'event' => 'msOnGetOrderCost',
      'priority' => 10,
      'propertyset' => 0,
    ),
  ),
  'ba32dbaf59eba7d6ee8bbcdbfe102db4' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 8,
      'event' => 'msOnCreateOrder',
    ),
    'object' => 
    array (
      'pluginid' => 8,
      'event' => 'msOnCreateOrder',
      'priority' => 0,
      'propertyset' => 0,
    ),
  ),
  'cbeaa7a0e2250bc750aeb45003191d6e' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 8,
      'event' => 'OnWebLogin',
    ),
    'object' => 
    array (
      'pluginid' => 8,
      'event' => 'OnWebLogin',
      'priority' => 0,
      'propertyset' => 0,
    ),
  ),
  '14a34121cf7ed89fd716966c94ee8d0a' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 8,
      'event' => 'OnWebLogout',
    ),
    'object' => 
    array (
      'pluginid' => 8,
      'event' => 'OnWebLogout',
      'priority' => 0,
      'propertyset' => 0,
    ),
  ),
  '39e8cae2afebdc833f5b8b4083a490c2' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 8,
      'event' => 'OnLoadWebDocument',
    ),
    'object' => 
    array (
      'pluginid' => 8,
      'event' => 'OnLoadWebDocument',
      'priority' => 0,
      'propertyset' => 0,
    ),
  ),
);