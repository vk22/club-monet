<?php

//ini_set('display_errors', 1);
//ini_set('error_reporting', -1);

/*
 * тест оплаты https://yookassa.ru/developers/using-api/testing
 */

require_once MODX_CORE_PATH . 'components/mspyookassa/vendor/autoload.php';

class mspYooKassa
{
    const CALLBACK_IP_LIST
        = [
            '185.71.76.0/27',
            '185.71.77.0/27',
            '77.75.153.0/25',
            '77.75.154.128/25',

            '2a02:5180:0:1509::/64',
            '2a02:5180:0:2655::/64',
            '2a02:5180:0:1533::/64',
            '2a02:5180:0:2669::/64',

            //'176.112.71.192/27'// test
        ];

    /* @var modX $modx */
    public $modx;
    /** @var mixed|null $namespace */
    public $namespace = 'mspyookassa';
    /** @var string $partner */
    public $partner = 'MODX.VGRISH';
    /** @var array $config */
    public $config = [];
    /** @var array $initialized */
    public $initialized = [];
    /** @var miniShop2 $miniShop2 */
    public $miniShop2;
    public $version = '1.0.9-pl';
    /** @var array $clientConfig */
    protected $clientConfig = [];
    /** @var array $errors */
    protected $errors = [];

    /**
     * @param modX $modx
     * @param array $config
     */
    function __construct(modX &$modx, array $config = [])
    {
        $this->modx =& $modx;

        $corePath = $this->getOption('core_path', $config,
            $this->modx->getOption('core_path', null, MODX_CORE_PATH) . 'components/mspyookassa/'
        );
        $assetsPath = $this->getOption('assets_path', $config,
            $this->modx->getOption('assets_path', null, MODX_ASSETS_PATH) . 'components/mspyookassa/'
        );
        $assetsUrl = $this->getOption('assets_url', $config,
            $this->modx->getOption('assets_url', null, MODX_ASSETS_URL) . 'components/mspyookassa/'
        );
        $connectorUrl = $assetsUrl . 'connector.php';

        $this->config = array_merge([
            'namespace' => $this->namespace,
            'connectorUrl' => $connectorUrl,
            'assetsBasePath' => MODX_ASSETS_PATH,
            'assetsBaseUrl' => MODX_ASSETS_URL,
            'assetsPath' => $assetsPath,
            'assetsUrl' => $assetsUrl,
            'cssUrl' => $assetsUrl . 'css/',
            'jsUrl' => $assetsUrl . 'js/',
            'corePath' => $corePath,
            'modelPath' => $corePath . 'model/',
            "vendorsPath" => $corePath . 'vendor/',
            'processorsPath' => $corePath . 'processors/',
            'templatesPath' => $corePath . 'elements/templates/mgr/',
            'jsonResponse' => true,
            'showLog' => false,
        ], $config);

        $this->modx->addPackage('mspyookassa', $this->getOption('modelPath'));
        $this->modx->lexicon->load('mspyookassa:default');

        if (!$this->miniShop2 = $modx->getService('miniShop2') or !($this->miniShop2 instanceof miniShop2)) {
            return;
        }

        $this->checkStat();
    }

    /**
     * @param         $n
     * @param array $p
     */
    public function __call($n, array $p)
    {
        echo __METHOD__ . ' says: ' . $n;
    }

    public function getOption($key, $config = [], $default = null, $skipEmpty = false)
    {
        $option = $default;
        if (!empty($key) and is_string($key)) {
            if ($config != null and array_key_exists($key, $config)) {
                $option = $config[$key];
            } else {
                if (array_key_exists($key, $this->config)) {
                    $option = $this->config[$key];
                } else {
                    if (array_key_exists("{$this->namespace}_{$key}", $this->modx->config)) {
                        $option = $this->modx->getOption("{$this->namespace}_{$key}");
                    }
                }
            }
        }
        if ($skipEmpty and empty($option)) {
            $option = $default;
        }

        return $option;
    }

    public function initialize($ctx = 'web', $scriptProperties = [])
    {
        $this->config = array_merge($this->config, $scriptProperties, ['ctx' => $ctx]);

        if (!empty($this->initialized[$ctx])) {
            return true;
        }

        switch ($ctx) {
            case 'mgr':
                break;
            default:
                if (!defined('MODX_API_MODE') or !MODX_API_MODE) {

                    $this->initialized[$ctx] = true;
                }
                break;
        }

        return true;
    }

    public function lexicon($message, $placeholders = [])
    {
        $key = '';
        if ($this->modx->lexicon->exists($message)) {
            $key = $message;
        } else {
            if ($this->modx->lexicon->exists($this->namespace . '_' . $message)) {
                $key = $this->namespace . '_' . $message;
            }
        }
        if ($key !== '') {
            $message = $this->modx->lexicon->process($key, $placeholders);
        }

        return $message;
    }

    public function errors()
    {
        return $this->errors;
    }

    public function setError($msg = '')
    {
        return $this->errors[] = $msg;
    }

    public function hasErrors()
    {
        return (bool)count($this->errors());
    }

    public function setClientConfig(array $config)
    {
        $this->clientConfig = $config;
    }

    public function getClientConfig()
    {
        return $this->clientConfig;
    }

    public function getString($value)
    {
        return str_replace(['<', '>'], ['&lt;', '&gt;'], html_entity_decode($value));
    }

    public function getNumber($value)
    {
        return number_format(str_replace([' ', ' ', ','], ['', '', '.'], $value), 2, '.', '');
    }

    public function getIterableValue()
    {
        $args = func_get_args();
        $iterable = array_shift($args);

        $value = null;
        if ($args and $iterable) {
            foreach ($args as $arg) {
                if (is_array($iterable)) {
                    $iterable = isset($iterable[$arg]) ? $iterable[$arg] : null;
                } else {
                    $iterable = null;
                    break;
                }
            }
            $value = $iterable;
        }

        return $value;
    }

    public function getArrayValue($array)
    {
        $args = func_get_args();
        array_shift($args);
        array_unshift($args, $array);

        return call_user_func_array([$this, 'getIterableValue'], $args);
    }

    public function prepareReceiptItem($item, $data = [])
    {
        $response = $this->miniShop2->invokeEvent('mspYooKassaOnPreparePaymentReceiptItem', [
            'item' => $item,
            'data' => $data,
            'mspYooKassa' => $this,
        ]);
        if ($response['success']) {
            $item = $response['data']['item'];
        }

        return $item;
    }

    public function checkOrderStatus($status)
    {
        return !in_array((int)$status, [2, 4]);
    }

    public function changeOrderStatus($id, $status)
    {
        if (!$this->miniShop2) {
            $this->miniShop2 = $this->modx->getService('miniShop2');
        }

        return $this->miniShop2->changeOrderStatus($id, $status);
    }

    public function changeOrderPayment($id, $payment)
    {
        $id = (int)$id;
        /** @var msOrder $order */
        if (!$order = $this->modx->getObject('msOrder', $id, false)) {
            return false;
        }
        /** @var mspYooKassaOrderPayment $OrderPayment */
        if (!$OrderPayment = $this->modx->getObject('mspYooKassaOrderPayment', $id)) {
            $this->log('Could not get order payment "' . $id . '"', true);

            return false;
        }
        if ($OrderPayment->get('processed')) {
            return false;
        }

        $metadata = $payment->getMetadata()->toArray();
        $tested = isset($metadata['test']) ? (int)$metadata['test'] : 0;
        //$payment = $notification->getObject();

        $object = json_decode(json_encode($payment, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE), true);
        //$object['test'] = $notification->getTest();
        $OrderPayment->set('object', $object);
        if (!$OrderPayment->get('tested')) {
            $OrderPayment->set('tested', $tested);
        }
        switch ($payment->getStatus()) {
            // платёж был отменён
            case YooKassa\Model\PaymentStatus::CANCELED:
                // платёж уже был подтверждён
            case YooKassa\Model\PaymentStatus::SUCCEEDED:
                $OrderPayment->set('processed', 1);
                break;
        }

        if (!$OrderPayment->save()) {
            $this->log('Could not update order payment "' . $id . '"' . "\n" . print_r($OrderPayment->toArray(), 1), true);

            return false;
        }

        return true;
    }

    public function client($config = [])
    {
        $client = null;
        if (class_exists('YooKassa\Client')) {// YooKassa
            $client = new YooKassa\Client();
            $config = array_merge($this->getClientConfig(), $config);
            $this->log([__CLASS__, __LINE__, 'config' => $config]);
            if (!empty($config['auth'])) {
                @list($login, $password) = $config['auth'];
                $client->setAuth($login, $password);
            }
        }

        return $client;
    }

    public function getShopInfo($config = [])
    {
        if ($client = $this->client($config)) {
            $this->log([__CLASS__, __LINE__, 'data' => []]);
            try {
                return $client->getWebhooks();
            } catch (Exception $e) {
                $this->log($e->getMessage(), true);
            }
        }

        return null;
    }

    public function createPayment(array $data, $config = [])
    {
        $response = $this->miniShop2->invokeEvent('mspYooKassaOnCreatePayment', [
            'payment' => $data,
            'config' => $config,
            'mspYooKassa' => $this,
        ]);
        if ($response['success']) {
            $data = $response['data']['payment'];
        }

        if ($client = $this->client($config)) {
            $this->log([__CLASS__, __LINE__, 'data' => $data]);
            try {
                return $client->createPayment($data, uniqid('', true));
            } catch (Exception $e) {
                $this->log($e->getMessage(), true);
            }
        }

        return null;
    }

    public function getPayment(array $data, $config = [])
    {
        if ($client = $this->client($config)) {
            $this->log([__CLASS__, __LINE__, 'data' => $data]);
            try {
                return $client->getPaymentInfo($data['id']);
            } catch (Exception $e) {
                $this->log($e->getMessage(), true);
            }
        }

        return null;
    }

    public function cancelPayment(array $data, $config = [])
    {
        if ($client = $this->client($config)) {
            $this->log([__CLASS__, __LINE__, 'data' => $data]);
            try {
                return $client->cancelPayment($data['id'], uniqid('', true));
            } catch (Exception $e) {
                $this->log($e->getMessage(), true);
            }
        }

        return null;
    }

    public function refundPayment(array $data, $config = [])
    {
        if ($client = $this->client($config)) {
            $this->log([__CLASS__, __LINE__, 'data' => $data]);
            try {
                return $client->createRefund(['amount' => $data['amount'], 'payment_id' => $data['payment_id']], uniqid('', true));
            } catch (Exception $e) {
                $this->log($e->getMessage(), true);
            }
        }
    }

    public function confirmPayment(array $data, $config = [])
    {
        if ($client = $this->client($config)) {
            $this->log([__CLASS__, __LINE__, 'data' => $data]);
            try {
                return $client->capturePayment(['amount' => $data['amount']], $data['id'], uniqid('', true));
            } catch (Exception $e) {
                $this->log($e->getMessage(), true);
            }
        }

        return null;
    }

    public function getNotification(array $data, $config = [])
    {
        if ($this->client($config)) {
            $this->log([__CLASS__, __LINE__, 'data' => $data]);
            try {
                return new mspYooKassaNotification($data);
                // return new YooKassa\Model\Notification\NotificationWaitingForCapture($data);
            } catch (Exception $e) {
                $this->log($e->getMessage(), true);
            }
        }

        return null;
    }

    public function log($message, $showLog = false)
    {
        if ($this->getOption('showLog', null, $showLog, true)) {
            $this->modx->log(modX::LOG_LEVEL_ERROR, print_r($message, 1));
        }
        if ($showLog) {
            $this->setError(print_r($message, 1));
        }
    }

    public function processEvent(modSystemEvent $event, array $scriptProperties)
    {
        $event_class = 'mspYooKassa' . $event->name;

        if (!class_exists($event_class)) {
            $this->log('Could not get event handler class: "' . $event_class . '"', true);

            return false;
        }

        $handler = new $event_class($this, $event, $scriptProperties);
        $result = $handler->run();

        return $result;
    }

    /**
     * @param          $array
     * @param string $delimiter
     *
     * @return array
     */
    public function explodeAndClean($array, $delimiter = ',')
    {
        $array = explode($delimiter, $array);     // Explode fields to array
        $array = array_map('trim', $array);       // Trim array's values
        $array = array_keys(array_flip($array));  // Remove duplicate fields
        $array = array_filter($array);            // Remove empty values from array

        return $array;
    }

    /**
     * @param          $array
     * @param string $delimiter
     *
     * @return array|string
     */
    public function cleanAndImplode($array, $delimiter = ',')
    {
        $array = array_map('trim', $array);       // Trim array's values
        $array = array_keys(array_flip($array));  // Remove duplicate fields
        $array = array_filter($array);            // Remove empty values from array
        $array = implode($delimiter, $array);

        return $array;
    }


    public function getPaymentIds($class = '')
    {
        $class = $class ? $class : $this->getPaymentClass();

        if (!is_array($class)) {
            $class = $this->explodeAndClean($class);
        }

        $data = [];
        $q = $this->modx->newQuery('msPayment');
        $q->where(['class:IN' => $class]);
        $q->select('id');
        $q->limit(0);
        if ($q->prepare() && $q->stmt->execute()) {
            $data = $q->stmt->fetchAll(PDO::FETCH_COLUMN);
        }

        return $data;
    }

    public function getPaymentClass()
    {
        return $this->explodeAndClean($this->getOption('payment_class', null, 'mspYooKassaPaymentHandler', true));
    }


    public function loadControllerJsCss(modManagerController &$controller, array $setting = [])
    {
        $controller->addLexiconTopic('mspyookassa:default');

        $config = $this->config;
        foreach (['controller'] as $key) {
            if (isset($config[$key])) {
                unset($config[$key]);
            }
        }

        $config = json_encode(array_merge($config, [
            'connector_url' => $this->config['connectorUrl'],
            'miniShop2' => [
                'payment' => [
                    'ids' => $this->getPaymentIds(),
                    'class' => $this->getPaymentClass(),
                ],
            ],
        ]), true
        );

        $cssUrl = isset($this->config['cssUrl']) ? $this->config['cssUrl'] : '';
        $jsUrl = isset($this->config['jsUrl']) ? $this->config['jsUrl'] : '';

        if (!empty($setting['config'])) {
            $controller->addHtml("<script type='text/javascript'>mspyookassa.config={$config};</script>");
        }
        if (!empty($setting['tools'])) {
            $controller->addJavascript($jsUrl . 'mgr/mspyookassa.js?version=' . $this->version);
            $controller->addJavascript($jsUrl . 'mgr/misc/tools.js?version=' . $this->version);
        }
        if (!empty($setting['payment/inject'])) {
            $controller->addLastJavascript($jsUrl . 'mgr/payment/inject/inject.tab.js?version=' . $this->version);
        }
        if (!empty($setting['order/inject'])) {
            $controller->addLastJavascript($jsUrl . 'mgr/order/inject/inject.grid.js?version=' . $this->version);
        }
    }

    public function getRemoteIpAddress()
    {
        if ($_SERVER['HTTP_X_FORWARDED_FOR'] != '') {
            $client_ip = (!empty($_SERVER['REMOTE_ADDR'])) ? $_SERVER['REMOTE_ADDR'] : ((!empty($_ENV['REMOTE_ADDR'])) ? $_ENV['REMOTE_ADDR'] : "unknown");

            // los proxys van añadiendo al final de esta cabecera
            // las direcciones ip que van "ocultando". Para localizar la ip real
            // del usuario se comienza a mirar por el principio hasta encontrar
            // una dirección ip que no sea del rango privado. En caso de no
            // encontrarse ninguna se toma como valor el REMOTE_ADDR
            $entries = preg_split('/[, ]/', $_SERVER['HTTP_X_FORWARDED_FOR']);

            reset($entries);
            while (list(, $entry) = each($entries)) {
                $entry = trim($entry);
                if (preg_match("/^([0-9]+\.[0-9]+\.[0-9]+\.[0-9]+)/", $entry, $ip_list)) {
                    // http://www.faqs.org/rfcs/rfc1918.html
                    $private_ip = ['/^0\./', '/^127\.0\.0\.1/', '/^192\.168\..*/', '/^172\.((1[6-9])|(2[0-9])|(3[0-1]))\..*/', '/^10\..*/'];
                    $found_ip = preg_replace($private_ip, $client_ip, $ip_list[1]);

                    if ($client_ip != $found_ip) {
                        $client_ip = $found_ip;
                        break;
                    }
                }
            }
        } else {
            $client_ip = (!empty($_SERVER['REMOTE_ADDR'])) ? $_SERVER['REMOTE_ADDR'] : ((!empty($_ENV['REMOTE_ADDR'])) ? $_ENV['REMOTE_ADDR'] : "unknown");
        }

        return $client_ip;
    }

    public function checkCallbackIpAddress()
    {
        $ipAddress = new mspYooKassaIpAddress('');

        return $ipAddress->checkIp($ipAddress->getRemoteIpAddress(), self::CALLBACK_IP_LIST);
    }

    protected function checkStat()
    {
        $key = strtolower(__CLASS__);
        /** @var modDbRegister $registry */
        $registry = $this->modx->getService('registry', 'registry.modRegistry')->getRegister('user', 'registry.modDbRegister');
        $registry->connect();
        $registry->subscribe('/modstore/' . md5($key));
        if ($res = $registry->read(['poll_limit' => 1, 'remove_read' => false])) {
            return;
        }
        $c = $this->modx->newQuery('transport.modTransportProvider', ['service_url:LIKE' => '%modstore%']);
        $c->select('username,api_key');
        /** @var modRest $rest */
        $rest = $this->modx->getService('modRest', 'rest.modRest', '', [
            'baseUrl' => 'https://modstore.pro/extras',
            'suppressSuffix' => true,
            'timeout' => 1,
            'connectTimeout' => 1,
        ]);

        if ($rest) {
            $level = $this->modx->getLogLevel();
            $this->modx->setLogLevel(modX::LOG_LEVEL_FATAL);
            $rest->post('stat', [
                'package' => $key,
                'version' => $this->version,
                'keys' => ($c->prepare() and $c->stmt->execute()) ? $c->stmt->fetchAll(PDO::FETCH_ASSOC) : [],
                'uuid' => $this->modx->uuid,
                'database' => $this->modx->config['dbtype'],
                'revolution_version' => $this->modx->version['code_name'] . '-' . $this->modx->version['full_version'],
                'supports' => $this->modx->version['code_name'] . '-' . $this->modx->version['full_version'],
                'http_host' => $this->modx->getOption('http_host'),
                'php_version' => XPDO_PHP_VERSION,
                'language' => $this->modx->getOption('manager_language'),
            ]);
            $this->modx->setLogLevel($level);
        }
        $registry->subscribe('/modstore/');
        $registry->send('/modstore/', [md5($key) => true], ['ttl' => 3600 * 24]);
    }

}


abstract class mspYooKassaPlugin
{
    /** @var modX $modx */
    protected $modx;
    /** @var mspYooKassa $mspYooKassa */
    protected $mspYooKassa;
    /** @var array $scriptProperties */
    protected $scriptProperties;

    public function __construct(mspYooKassa $mspYooKassa, modSystemEvent $event, &$scriptProperties)
    {
        $this->mspYooKassa = &$mspYooKassa;
        $this->modx = &$mspYooKassa->modx;
        $this->scriptProperties =& $scriptProperties;
    }

    public function getProperty($key, $default = null)
    {
        if (isset($this->scriptProperties[$key])) {
            return $this->scriptProperties[$key];
        }

        return $default;
    }

    abstract public function run();
}


class mspYooKassaMsOnManagerCustomCssJs extends mspYooKassaPlugin
{
    public function run()
    {
        $page = $this->getProperty('page');
        switch ($page) {
            case 'settings':
                $this->mspYooKassa->loadControllerJsCss($this->modx->controller, [
                    'config' => true,
                    'tools' => true,
                    'payment/inject' => true,
                ]);
                break;
            case 'orders':
                $this->mspYooKassa->loadControllerJsCss($this->modx->controller, [
                    'config' => true,
                    'tools' => true,
                    'order/inject' => true,
                ]);
                break;
        }
    }
}


class mspYooKassaNotification extends YooKassa\Model\Notification\AbstractNotification
{
    private $_object;

    private $_test;

    public function __construct(array $source)
    {
        //YooKassa\Client
        $this->_setType(YooKassa\Model\NotificationType::NOTIFICATION);
        $this->_setEvent($source['event']);
        if (!empty($source['type'])) {
            if ($this->getType() !== $source['type']) {
                throw new Exception(
                    'Invalid value for "type" parameter in Notification', 0, 'notification.type', $source['type']
                );
            }
        }
        if (!empty($source['event'])) {
            if ($this->getEvent() !== $source['event']) {
                throw new Exception(
                    'Invalid value for "event" parameter in Notification_111', 0, 'notification.event', $source['event']
                );
            }
        }
        if (empty($source['object'])) {
            throw new Exception('Parameter object in NotificationWaitingForCapture is empty');
        }
        $this->_object = new YooKassa\Request\Payments\PaymentResponse($source['object']);

        $this->_setTest($source['object']);
    }

    public function getObject()
    {
        return $this->_object;
    }

    public function getTest()
    {
        return $this->_test;
    }

    public function _setTest($paymentInfo)
    {
        $this->_test = isset($paymentInfo['test']) ? (bool)$paymentInfo['test'] : false;
    }
}


class mspYooKassaUri implements \JsonSerializable
{
    protected $scheme;
    protected $host;
    protected $port;
    protected $user;
    protected $pass;
    protected $path;
    protected $query;
    protected $fragment;

    /**
     * @param string $url
     */
    public function __construct($url)
    {
        if (mb_strpos($url, "/") === 0) {
            //we don't support "current scheme" e.g. "//host/path"
            $url = "/" . ltrim($url, "/");
        }

        $parsedUrl = parse_url($url);

        if ($parsedUrl !== false) {
            $this->scheme = (isset($parsedUrl["scheme"]) ? mb_strtolower($parsedUrl["scheme"]) : "http");
            $this->host = (isset($parsedUrl["host"]) ? $parsedUrl["host"] : "");
            if (isset($parsedUrl["port"])) {
                $this->port = $parsedUrl["port"];
            } else {
                $this->port = ($this->scheme == "https" ? 443 : 80);
            }
            $this->user = (isset($parsedUrl["user"]) ? $parsedUrl["user"] : "");
            $this->pass = (isset($parsedUrl["pass"]) ? $parsedUrl["pass"] : "");
            $this->path = (isset($parsedUrl["path"]) ? $parsedUrl["path"] : "/");
            $this->query = (isset($parsedUrl["query"]) ? $parsedUrl["query"] : "");
            $this->fragment = (isset($parsedUrl["fragment"]) ? $parsedUrl["fragment"] : "");
        }
    }

    /**
     * Extended parsing to allow dots and spaces in parameters names.
     *
     * @param string $params
     *
     * @return array
     */
    protected static function parseParams($params)
    {
        $data = preg_replace_callback(
            '/(?:^|(?<=&))[^=[]+/',
            function ($match) {
                return bin2hex(urldecode($match[0]));
            },
            $params
        );

        parse_str($data, $values);

        return array_combine(array_map('hex2bin', array_keys($values)), $values);
    }

    /**
     * @deprecated Use getLocator() or getUri().
     */
    public function getUrl()
    {
        return $this->getLocator();
    }

    /**
     * Return the URI without a fragment.
     *
     * @return string
     */
    public function getLocator()
    {
        $url = "";
        if ($this->host <> '') {
            $url .= $this->scheme . "://" . $this->host;

            if (($this->scheme == "http" && $this->port <> 80) || ($this->scheme == "https" && $this->port <> 443)) {
                $url .= ":" . $this->port;
            }
        }

        $url .= $this->getPathQuery();

        return $url;
    }

    /**
     * Return the URI with a fragment, if any.
     *
     * @return string
     */
    public function getUri()
    {
        $url = $this->getLocator();

        if ($this->fragment <> '') {
            $url .= "#" . $this->fragment;
        }

        return $url;
    }

    /**
     * Returns the fragment.
     *
     * @return string
     */
    public function getFragment()
    {
        return $this->fragment;
    }

    /**
     * Returns the host.
     *
     * @return string
     */
    public function getHost()
    {
        return $this->host;
    }

    /**
     * Sets the host
     *
     * @param string $host Host name.
     *
     * @return $this
     */
    public function setHost($host)
    {
        $this->host = $host;

        return $this;
    }

    /**
     * Returns the password.
     *
     * @return string
     */
    public function getPass()
    {
        return $this->pass;
    }

    /**
     * Sets the password.
     *
     * @param string $pass Password,
     *
     * @return $this
     */
    public function setPass($pass)
    {
        $this->pass = $pass;

        return $this;
    }

    /**
     * Returns the path.
     *
     * @return string
     */
    public function getPath()
    {
        return $this->path;
    }

    /**
     * Sets the path.
     *
     * @param string $path
     *
     * @return $this
     */
    public function setPath($path)
    {
        $this->path = $path;

        return $this;
    }

    /**
     * Returns the path with the query.
     *
     * @return string
     */
    public function getPathQuery()
    {
        $pathQuery = $this->path;
        if ($this->query <> "") {
            $pathQuery .= '?' . $this->query;
        }

        return $pathQuery;
    }

    /**
     * Returns the port number.
     *
     * @return string
     */
    public function getPort()
    {
        return $this->port;
    }

    /**
     * Returns the query.
     *
     * @return string
     */
    public function getQuery()
    {
        return $this->query;
    }

    /**
     * Returns the scheme.
     *
     * @return string
     */
    public function getScheme()
    {
        return $this->scheme;
    }

    /**
     * Returns the user.
     *
     * @return string
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * Sets the user.
     *
     * @param string $user User.
     *
     * @return $this
     */
    public function setUser($user)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Deletes parameters from the query.
     *
     * @param array $params Parameters to delete.
     * @param bool $preserveDots Special treatment of dots and spaces in the parameters names.
     *
     * @return $this
     */
    public function deleteParams(array $params, $preserveDots = false)
    {
        if ($this->query <> '') {
            if ($preserveDots) {
                $currentParams = static::parseParams($this->query);
            } else {
                $currentParams = [];
                parse_str($this->query, $currentParams);
            }

            foreach ($params as $param) {
                unset($currentParams[$param]);
            }

            $this->query = http_build_query($currentParams, "", "&");
        }

        return $this;
    }

    /**
     * Adds parameters to query or replaces existing ones.
     *
     * @param array $params Parameters to add.
     * @param bool $preserveDots Special treatment of dots and spaces in the parameters names.
     *
     * @return $this
     */
    public function addParams(array $params, $preserveDots = false)
    {
        $currentParams = [];
        if ($this->query <> '') {
            if ($preserveDots) {
                $currentParams = static::parseParams($this->query);
            } else {
                parse_str($this->query, $currentParams);
            }
        }

        $currentParams = array_replace($currentParams, $params);

        $this->query = http_build_query($currentParams, "", "&");

        return $this;
    }

    public function __toString()
    {
        return $this->getUri();
    }

    /**
     * Specify data which should be serialized to JSON
     *
     * @link  http://php.net/manual/en/jsonserializable.jsonserialize.php
     * @return mixed data which can be serialized by <b>json_encode</b>,
     * which is a value of any type other than a resource.
     * @since 5.4.0
     */
    public function jsonSerialize()
    {
        return $this->getUri();
    }

}


class mspYooKassaIpAddress
{
    protected $ip;

    /**
     * @param string $ip
     */
    public function __construct($ip)
    {
        if (empty($ip)) {
            $ip = $this->getRemoteIpAddress();
        }

        $this->ip = $ip;
    }

    /**
     * Creates the object by a host name.
     *
     * @param string $name
     *
     * @return static
     */
    public static function createByName($name)
    {
        $ip = gethostbyname($name);

        return new static($ip);
    }

    /**
     * Creates the object by an Uri.
     *
     * @param Uri $uri
     *
     * @return static
     */
    public static function createByUri(mspYooKassaUri $uri)
    {
        return static::createByName($uri->getHost());
    }


    /**
     * Returns address's value.
     *
     * @return string
     */
    public function get()
    {
        return $this->ip;
    }

    /**
     * Retuns true if the address is incorrect or private.
     *
     * @return bool
     */
    public function isPrivate()
    {
        return (filter_var($this->ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 | FILTER_FLAG_IPV6 | FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) === false);
    }

    /**
     * Check IPv4 address is within an IP range
     *
     * @param string $cidr a valid IPv4 subnet[/mask]
     *
     * @return bool
     */
    public function matchRange($cidr = '')
    {
        if (strpos($cidr, '/') !== false) {
            list($subnet, $mask) = explode('/', $cidr);
        } else {
            $subnet = $cidr;
            $mask = 32;
        }

        return (ip2long($this->ip) & ~((1 << (32 - $mask)) - 1)) === ip2long($subnet);
    }

    public function getRemoteIpAddress()
    {
        if (isset($_SERVER['HTTP_X_FORWARDED_FOR']) and $_SERVER['HTTP_X_FORWARDED_FOR'] != '') {
            $client_ip = (!empty($_SERVER['REMOTE_ADDR'])) ? $_SERVER['REMOTE_ADDR'] : ((!empty($_ENV['REMOTE_ADDR'])) ? $_ENV['REMOTE_ADDR'] : "unknown");

            // los proxys van añadiendo al final de esta cabecera
            // las direcciones ip que van "ocultando". Para localizar la ip real
            // del usuario se comienza a mirar por el principio hasta encontrar
            // una dirección ip que no sea del rango privado. En caso de no
            // encontrarse ninguna se toma como valor el REMOTE_ADDR
            $entries = preg_split('/[, ]/', $_SERVER['HTTP_X_FORWARDED_FOR']);

            reset($entries);
            while (list(, $entry) = each($entries)) {
                $entry = trim($entry);
                if (preg_match("/^([0-9]+\.[0-9]+\.[0-9]+\.[0-9]+)/", $entry, $ip_list)) {
                    // http://www.faqs.org/rfcs/rfc1918.html
                    $private_ip = ['/^0\./', '/^127\.0\.0\.1/', '/^192\.168\..*/', '/^172\.((1[6-9])|(2[0-9])|(3[0-1]))\..*/', '/^10\..*/'];
                    $found_ip = preg_replace($private_ip, $client_ip, $ip_list[1]);

                    if ($client_ip != $found_ip) {
                        $client_ip = $found_ip;
                        break;
                    }
                }
            }
        } else {
            $client_ip = (!empty($_SERVER['REMOTE_ADDR'])) ? $_SERVER['REMOTE_ADDR'] : ((!empty($_ENV['REMOTE_ADDR'])) ? $_ENV['REMOTE_ADDR'] : "unknown");
        }

        return $client_ip;
    }

    public function checkIp($requestIp, $ips)
    {
        if (empty($requestIp)) {
            $requestIp = $this->ip;
        }

        if (!\is_array($ips)) {
            $ips = [$ips];
        }

        $method = substr_count($requestIp, ':') > 1 ? 'checkIp6' : 'checkIp4';
        foreach ($ips as $ip) {
            if (self::$method($requestIp, $ip)) {
                return true;
            }
        }

        return false;
    }

    public function checkIp4($requestIp = '', $ip = '')
    {
        if (empty($requestIp)) {
            $requestIp = $this->ip;
        }

        if (!filter_var($requestIp, \FILTER_VALIDATE_IP, \FILTER_FLAG_IPV4)) {
            return false;
        }

        if (false !== strpos($ip, '/')) {
            list($address, $netmask) = explode('/', $ip, 2);

            if ('0' === $netmask) {
                return filter_var($address, \FILTER_VALIDATE_IP, \FILTER_FLAG_IPV4);
            }
            if ($netmask < 0 || $netmask > 32) {
                return false;
            }
        } else {
            $address = $ip;
            $netmask = 32;
        }

        if (false === ip2long($address)) {
            return false;
        }

        return 0 === substr_compare(sprintf('%032b', ip2long($requestIp)), sprintf('%032b', ip2long($address)), 0, $netmask);
    }

    public function checkIp6($requestIp = '', $ip = '')
    {
        if (empty($requestIp)) {
            $requestIp = $this->ip;
        }

        if (!((\extension_loaded('sockets') && \defined('AF_INET6')) || @inet_pton('::1'))) {
            throw new \RuntimeException('Unable to check Ipv6. Check that PHP was not compiled with option "disable-ipv6".');
        }

        if (false !== strpos($ip, '/')) {
            list($address, $netmask) = explode('/', $ip, 2);

            if ('0' === $netmask) {
                return (bool)unpack('n*', @inet_pton($address));
            }

            if ($netmask < 1 || $netmask > 128) {
                return false;
            }
        } else {
            $address = $ip;
            $netmask = 128;
        }

        $bytesAddr = unpack('n*', @inet_pton($address));
        $bytesTest = unpack('n*', @inet_pton($requestIp));

        if (!$bytesAddr || !$bytesTest) {
            return false;
        }

        for ($i = 1, $ceil = ceil($netmask / 16); $i <= $ceil; ++$i) {
            $left = $netmask - 16 * ($i - 1);
            $left = ($left <= 16) ? $left : 16;
            $mask = ~(0xffff >> $left) & 0xffff;
            if (($bytesAddr[$i] & $mask) != ($bytesTest[$i] & $mask)) {
                return false;
            }
        }

        return true;
    }


}
