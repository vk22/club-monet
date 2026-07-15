<?php
/**
 * Update an Item
 */
class orderPrintDocumentUpdateProcessor extends modObjectUpdateProcessor {
	public $objectType = 'OprDocuments';
	public $classKey = 'OprDocuments';
	public $languageTopics = array('orderprint');
	public $permission = 'orderprint_manage';
    
	public function beforeSet() {
		if ($this->modx->getObject('OprDocuments',array('name' => $this->getProperty('name'), 'id:!=' => $this->getProperty('id') ))) {
			$this->modx->error->addField('name', $this->modx->lexicon('orderprint_document_err_ud'));
		}
		return !$this->hasErrors();
	}
    
}

return 'orderPrintDocumentUpdateProcessor';