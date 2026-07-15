<?php

/**
 * The home manager controller for mspyookassa.
 *
 */
class mspyookassaHomeManagerController extends modExtraManagerController
{
    /** @var mspyookassa $mspyookassa */
    public $mspyookassa;


    /**
     *
     */
    public function initialize()
    {
        $this->mspyookassa = $this->modx->getService('mspyookassa', 'mspyookassa', MODX_CORE_PATH . 'components/mspyookassa/model/');
        parent::initialize();
    }


    /**
     * @return array
     */
    public function getLanguageTopics()
    {
        return ['mspyookassa:default'];
    }


    /**
     * @return bool
     */
    public function checkPermissions()
    {
        return true;
    }


    /**
     * @return null|string
     */
    public function getPageTitle()
    {
        return $this->modx->lexicon('mspyookassa');
    }


    /**
     * @return void
     */
    public function loadCustomCssJs()
    {
        $this->addCss($this->mspyookassa->config['cssUrl'] . 'mgr/main.css');
        $this->addJavascript($this->mspyookassa->config['jsUrl'] . 'mgr/mspyookassa.js');
        $this->addJavascript($this->mspyookassa->config['jsUrl'] . 'mgr/misc/utils.js');
        $this->addJavascript($this->mspyookassa->config['jsUrl'] . 'mgr/misc/combo.js');
        $this->addJavascript($this->mspyookassa->config['jsUrl'] . 'mgr/widgets/items.grid.js');
        $this->addJavascript($this->mspyookassa->config['jsUrl'] . 'mgr/widgets/items.windows.js');
        $this->addJavascript($this->mspyookassa->config['jsUrl'] . 'mgr/widgets/home.panel.js');
        $this->addJavascript($this->mspyookassa->config['jsUrl'] . 'mgr/sections/home.js');

        $this->addHtml('<script type="text/javascript">
        mspyookassa.config = ' . json_encode($this->mspyookassa->config) . ';
        mspyookassa.config.connector_url = "' . $this->mspyookassa->config['connectorUrl'] . '";
        Ext.onReady(function() {MODx.load({ xtype: "mspyookassa-page-home"});});
        </script>'
        );
    }


    /**
     * @return string
     */
    public function getTemplateFile()
    {
        $this->content .= '<div id="mspyookassa-panel-home-div"></div>';

        return '';
    }
}