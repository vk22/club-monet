<?php

/**
 * The home manager controller for counterPro.
 *
 */
class counterProHomeManagerController extends modExtraManagerController
{
    /** @var counterPro $counterPro */
    public $counterPro;


    /**
     *
     */
    public function initialize()
    {
        $path = $this->modx->getOption('counterpro_core_path', null,
                $this->modx->getOption('core_path') . 'components/counterpro/') . 'model/counterpro/';
        $this->counterPro = $this->modx->getService('counterpro', 'counterPro', $path);
        parent::initialize();
    }


    /**
     * @return array
     */
    public function getLanguageTopics()
    {
        return array('counterpro:default');
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
        return $this->modx->lexicon('counterpro');
    }


    /**
     * @return void
     */
    public function loadCustomCssJs()
    {
        $this->addCss($this->counterPro->config['cssUrl'] . 'mgr/main.css');
        $this->addCss($this->counterPro->config['cssUrl'] . 'mgr/bootstrap.buttons.css');
        $this->addJavascript($this->counterPro->config['jsUrl'] . 'mgr/counterpro.js');
        $this->addJavascript($this->counterPro->config['jsUrl'] . 'mgr/misc/utils.js');
        $this->addJavascript($this->counterPro->config['jsUrl'] . 'mgr/misc/combo.js');
        $this->addJavascript($this->counterPro->config['jsUrl'] . 'mgr/widgets/items.grid.js');
        $this->addJavascript($this->counterPro->config['jsUrl'] . 'mgr/widgets/items.windows.js');
        $this->addJavascript($this->counterPro->config['jsUrl'] . 'mgr/widgets/home.panel.js');
        $this->addJavascript($this->counterPro->config['jsUrl'] . 'mgr/sections/home.js');

        $this->addHtml('<script type="text/javascript">
        counterPro.config = ' . json_encode($this->counterPro->config) . ';
        counterPro.config.connector_url = "' . $this->counterPro->config['connectorUrl'] . '";
        Ext.onReady(function() {
            MODx.load({ xtype: "counterpro-page-home"});
        });
        </script>
        ');
    }


    /**
     * @return string
     */
    public function getTemplateFile()
    {
        return $this->counterPro->config['templatesPath'] . 'home.tpl';
    }
}