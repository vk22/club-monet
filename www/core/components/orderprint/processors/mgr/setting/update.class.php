<?php
/**
 * Update an Item
 */
class orderPrintSettingUpdateProcessor extends modObjectUpdateProcessor {
	public $objectType = 'OprSettings';
	public $classKey = 'OprSettings';
	public $languageTopics = array('orderprint');
	public $permission = 'orderprint_manage';
    
	public function beforeSet() {
		if ($this->modx->getObject('OprSettings',array('name' => $this->getProperty('name'), 'id:!=' => $this->getProperty('id') ))) {
			$this->modx->error->addField('name', $this->modx->lexicon('orderprint_setting_err_ud'));
		}
		return !$this->hasErrors();
	}
    
}

return 'orderPrintSettingUpdateProcessor';