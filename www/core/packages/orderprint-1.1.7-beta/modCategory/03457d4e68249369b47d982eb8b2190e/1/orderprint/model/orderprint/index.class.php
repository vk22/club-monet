<?php

/**
 * @package orderprint
 */
class OrderPrint {

    /**
     * Constructs the Orderprint object
     *
     * @param modX &$modx A reference to the modX object
     * @param array $config An array of configuration options
     */
    function __construct(modX &$modx, array $config = array()) {
        $this->modx = & $modx;

        $basePath = $this->modx->getOption('orderprint.core_path', $config, $this->modx->getOption('core_path') . 'components/orderprint/');
        $assetsUrl = $this->modx->getOption('orderprint.assets_url', $config, $this->modx->getOption('assets_url') . 'components/orderprint/');
        $this->config = array_merge(array(
            'basePath' => $basePath,
            'corePath' => $basePath,
            'modelPath' => $basePath . 'model/',
            'processorsPath' => $basePath . 'processors/',
            'chunksPath' => $basePath . 'elements/chunks/',
            'jsUrl' => $assetsUrl . 'js/',
            'cssUrl' => $assetsUrl . 'css/',
            'assetsUrl' => $assetsUrl,
            'connectorUrl' => $assetsUrl . 'connector.php',
                ), $config);

        $this->modx->addPackage('orderprint', $this->config['modelPath']);
    }

    /**
     * Initializes the class into the proper context
     *
     * @access public
     * @param string $ctx
     */
    public function initialize($ctx = 'web') {
        switch ($ctx) {
            case 'mgr':
                $this->modx->lexicon->load('orderprint:default');

                if (!$this->modx->loadClass('orderPrintControllerRequest', $this->config['modelPath'] . 'orderprint/request/', true, true)) {
                    return 'Could not load controller request handler.';
                }
                $this->request = new orderprintControllerRequest($this);
                return $this->request->handleRequest();
                break;
        }
        return true;
    }

    public function getMenu() {
        $res = array();
        $i = 0;
        $documents = $this->modx->getCollection('OprDocuments');
        foreach ($documents as $doc) {
            $res[$i]['docid'] = $doc->id;
            $res[$i]['text'] = $doc->name;
            $res[$i]['handler'] = 'this.printDocument';
            $i++;
        }
        return $this->modx->toJson($res);
    }

}