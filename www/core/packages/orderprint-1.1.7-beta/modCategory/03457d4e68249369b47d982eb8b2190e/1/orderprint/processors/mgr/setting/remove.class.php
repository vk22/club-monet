<?php

/**
 * Remove an Item
 */
class orderPrintSettingRemoveProcessor extends modObjectRemoveProcessor {
	public $permission = 'orderprint_manage';

    public $checkRemovePermission = true;
    public $objectType = 'OprSettings';
    public $classKey = 'OprSettings';
    public $languageTopics = array('orderprint');

    public function beforeSet() {
        $isDeletable = $this->getProperty('undeletable');
        if ($isDeletable == 1) {
            //$this->modx->error->addField('undeletable', $this->modx->lexicon('orderprint_setting_err_ud'));
            $this->modx->error($this->modx->lexicon('orderprint_setting_err_ud'));
        }
        return !$this->hasErrors();
    }

}

return 'orderPrintSettingRemoveProcessor';