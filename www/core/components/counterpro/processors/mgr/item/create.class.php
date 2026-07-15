<?php

class counterProItemCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'counterProItem';
    public $classKey = 'counterProItem';
    public $languageTopics = array('counterpro');
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('name'));
        if (empty($name)) {
            $this->modx->error->addField('name', $this->modx->lexicon('counterpro_item_err_name'));
        } elseif ($this->modx->getCount($this->classKey, array('name' => $name))) {
            $this->modx->error->addField('name', $this->modx->lexicon('counterpro_item_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'counterProItemCreateProcessor';