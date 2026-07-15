<?php

if (!$orderId)
    return;
$tpl = $modx->getOption('tpl', $csriptProperties, 'orderPrint.LinkTpl');
$docsData = array();
$modx->addPackage('orderprint', $modx->getOption('core_path') . 'components/orderprint/model/');
if (!$docs) {
    $q = $modx->newQuery('OprDocuments', array('available_for_front' => 1));
} else {
    $docs = explode(',', $docs);
    $q = $modx->newQuery('OprDocuments', array('available_for_front' => 1, 'id:IN' => $docs));
}
$q->select('id,name,description');
if ($q->prepare() && $q->stmt->execute()) {
    $output = '';
    $docsTmp = $q->stmt->fetchAll(PDO::FETCH_ASSOC);
    foreach ($docsTmp as $doc) {
        $link = $modx->getOption('site_url') . 'assets/components/orderprint/pdf/index.php?recordid=' . $orderId . '&docid=' . $doc['id'];
        $output .= $modx->parseChunk($tpl, array(
            'id' => $doc['id'],
            'name' => $doc['name'],
            'description' => $doc['description'],
            'link' => $link
        ));
    }
}
return $output;
