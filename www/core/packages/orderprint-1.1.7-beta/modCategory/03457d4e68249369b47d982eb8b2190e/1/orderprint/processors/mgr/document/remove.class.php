<?php

/**
 * Remove an Item
 */
class orderPrintDocumentRemoveProcessor extends modObjectRemoveProcessor {

    public $checkRemovePermission = true;
    public $objectType = 'OprDocuments';
    public $classKey = 'OprDocuments';
    public $languageTopics = array('orderprint');
	public $permission = 'orderprint_manage';

    public function beforeSet() {
        $isDeletable = $this->getProperty('undeletable');
        if ($isDeletable == 1) {
            //$this->modx->error->addField('undeletable', $this->modx->lexicon('orderprint_document_err_ud'));
            $this->modx->error($this->modx->lexicon('orderprint_document_err_ud'));
        }
        return !$this->hasErrors();
    }

}

return 'orderPrintDocumentRemoveProcessor';