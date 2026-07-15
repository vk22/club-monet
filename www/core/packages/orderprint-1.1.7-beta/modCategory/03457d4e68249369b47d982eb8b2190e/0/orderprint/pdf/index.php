<?php
header('Content-Type: text/html; charset=UTF-8');
if(!$_GET['recordid'] || !$_GET['docid']) die('Bad request');
$order_id = $_GET['recordid'];
$id_doc = $_GET['docid'];
define('MODX_CORE_PATH', dirname(dirname(dirname(dirname(dirname(__FILE__))))).'/core/');
define('MODX_API_MODE', true);
@include(dirname(__FILE__) . MODX_CORE_PATH . 'config/config.core.php');
if (!@include_once (MODX_CORE_PATH . "model/modx/modx.class.php")) {
    $errorMessage = 'Site temporarily unavailable';
    @include(MODX_CORE_PATH . 'error/unavailable.include.php');
    header('HTTP/1.1 503 Service Unavailable');
    echo "<html><title>Error 503: Site temporarily unavailable</title><body><h1>Error 503</h1><p>{$errorMessage}</p></body></html>";
    exit();
}
$mtime= microtime();
$mtime= explode(" ", $mtime);
$mtime= $mtime[1] + $mtime[0];
$tstart= $mtime;
ob_start();
$modx = new modX();
$modx->startTime= $tstart;
$modx->initialize();

require_once('tcpdf_include.php');
class MYPDF extends TCPDF {
    public function Header() {
    }
    public function Footer() {
        $this->SetY(-15);
    }
}
require_once(MODX_CORE_PATH . 'components/orderprint/model/orderprint/pdfprint.class.php');
$pdfprint = new PdfPrint($modx,$order_id,$id_doc);
if($pdfprint->error) print $pdfprint->error;