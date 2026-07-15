<?php

/**
 * Create an Item
 */
class orderPrintDocumentCreateProcessor extends modObjectCreateProcessor {

    public $objectType = 'OprDocuments';
    public $classKey = 'OprDocuments';
    public $languageTopics = array('orderprint');
	public $permission = 'orderprint_manage';

    /**
     * @return bool
     */
    /* public function beforeSet() {
      $name = $this->getProperty('name');
      if (!$this->checkName($name)) {
      $this->modx->error->addField('name', $this->modx->lexicon('orderprint_document_err_incorect_name'));
      return !$this->hasErrors();
      } else {
      $alreadyExists = $this->modx->getObject('OprDocuments', array('name' => $name));
      if ($alreadyExists) {
      $this->modx->error->addField('name', $this->modx->lexicon('orderprint_document_err_ae'));
      return !$this->hasErrors();
      }
      }
      $this->setProperty('undeletable', 1);
      return !$this->hasErrors();
      }

      private function checkName($name) {
      if (empty($name))
      return FALSE;
      if (is_integer($name))
      return FALSE;
      return TRUE;
      }

      } */

    public function beforeSet() {
        $name = $this->getProperty('name');
        $check = $this->checkName($name);
        if ($check) {
            $this->modx->error->addField('name', $this->modx->lexicon($check));
            return !$this->hasErrors();
        }
        $this->setProperty('undeletable', 1);
        return !$this->hasErrors();
    }

    private function checkName($name) {
        if (empty($name)) {
            return 'orderprint_document_err_incorect_name';
        }
        if ($this->modx->getObject('OprDocuments', array('name' => $name))) {
            return 'orderprint_document_err_ae';
        }
        return '';
    }

}
return 'orderPrintDocumentCreateProcessor';