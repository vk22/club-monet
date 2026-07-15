<?php
/**
 * @package orderprint
 * @subpackage controllers
 */
require_once dirname(dirname(__FILE__)).'/model/orderprint/index.class.php';
$orderprint = new OrderPrint($modx);
return $orderprint->initialize('mgr');