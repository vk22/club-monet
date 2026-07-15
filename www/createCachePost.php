<?php 
if(isset($_POST)){
    $content = $_POST['data'];

    define('MODX_API_MODE', true);
    require_once($_SERVER['DOCUMENT_ROOT'].'/index.php');
    global $modx;
    $modx->initialize('mgr');
    // $modx->invokeEvent('myEventForCache');

    $res = $modx->runSnippet('createMyCache__NewLotsIndex');
    //$res = $modx->runSnippet('createMyCache__NewLots');
    $res = $modx->runSnippet('createMyCache__LotsTop');
    $res = $modx->runSnippet('createMyCache__LotsCarousel');
      
    echo json_encode($content);
      // do whatever we want with the users array.
   }