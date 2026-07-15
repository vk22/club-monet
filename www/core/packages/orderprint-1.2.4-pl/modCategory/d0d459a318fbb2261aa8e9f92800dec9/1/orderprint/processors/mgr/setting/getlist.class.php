<?php
/**
 * Get a list of Items
 */
class orderPrintSettingGetListProcessor extends modObjectGetListProcessor {
	public $objectType = 'OprSettings';
	public $classKey = 'OprSettings';
	public $defaultSortField = 'id';
	public $defaultSortDirection = 'DESC';
	public $renderers = '';
	public $permission = 'orderprint_manage';


	/**
	 * @param xPDOQuery $c
	 *
	 * @return xPDOQuery
	 */
	public function prepareQueryBeforeCount(xPDOQuery $c) {
		return $c;
	}


	/**
	 * @param xPDOObject $object
	 *
	 * @return array
	 */
	public function prepareRow(xPDOObject $object) {
		$array = $object->toArray();

		return $array;
	}

}

return 'orderPrintSettingGetListProcessor';