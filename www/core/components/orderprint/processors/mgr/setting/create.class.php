<?php

/**
 * Create an Item
 */
class orderPrintSettingCreateProcessor extends modObjectCreateProcessor {

    public $objectType = 'OprSettings';
    public $classKey = 'OprSettings';
    public $languageTopics = array('orderprint');
	public $permission = 'orderprint_manage';

    /**
     * @return bool
     */
    /* public function beforeSet() {
      $alreadyExists = $this->modx->getObject('OprSettings', array(
      'name' => $this->getProperty('name'),
      ));
      if ($alreadyExists) {
      $this->modx->error->addField('name', $this->modx->lexicon('orderprint_setting_err_ae'));
      }
      $this->setProperty('undeletable',1);
      return !$this->hasErrors();
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
            return 'orderprint_setting_err_incorect_name';
        }
        if ($this->modx->getObject('OprDocuments', array('name' => $name))) {
            return 'orderprint_setting_err_ae';
        }
          return '';
    }

}

return 'orderPrintSettingCreateProcessor';