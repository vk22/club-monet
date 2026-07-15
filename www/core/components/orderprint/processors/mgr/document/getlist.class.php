<?php
/**
 * Get a list of Items
 */
class orderPrintDocumentGetListProcessor extends modObjectGetListProcessor {
	public $objectType = 'OprDocuments';
	public $classKey = 'OprDocuments';
	public $defaultSortField = 'id';
	public $defaultSortDirection = 'DESC';
	public $renderers = '';
	public $permission = 'orderprint_manage';


	/**
	 * @param xPDOQuery $c
	 *
	 * @return xPDOQuery
	 */

}

return 'orderPrintDocumentGetListProcessor';