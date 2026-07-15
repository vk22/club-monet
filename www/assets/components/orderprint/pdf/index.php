<?php
ini_set('display_errors', '1');
header('Content-Type: text/html; charset=UTF-8');
if(!$_GET['recordid'] || !$_GET['docid']) die('Bad request');
$order_id = $_GET['recordid'];
$id_doc = $_GET['docid'];
define('MODX_API_MODE', true);
require($_SERVER['DOCUMENT_ROOT'].'/index.php');

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