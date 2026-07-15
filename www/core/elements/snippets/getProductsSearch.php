<?php

$query = isset($_REQUEST['query']) ? trim((string) $_REQUEST['query']) : '';
if ($query === '') {
    return '';
}

if (
    !$modx->addPackage('msearch2', MODX_CORE_PATH . 'components/msearch2/model/')
    || !$modx->loadClass('msearch2', MODX_CORE_PATH . 'components/msearch2/model/msearch2/', false, true)
) {
    return '';
}

$query = $modx->stripTags($query);
$query = preg_replace('/[^_-а-яёa-z0-9\s\.\/]+/iu', ' ', $query);
$mSearch2 = new mSearch2($modx, $scriptProperties);
$baseForms = $mSearch2->getBaseForms($query, false);
$formsByTerm = array();
$termByForm = array();

foreach ($baseForms as $form => $term) {
    $form = mb_strtoupper(trim((string) $form), 'UTF-8');
    $term = mb_strtoupper(trim((string) $term), 'UTF-8');

    if ($form === '' || $term === '') {
        continue;
    }

    if (!preg_match('/^[0-9]{1,}$/', $form) && mb_strlen($form, 'UTF-8') < 2) {
        continue;
    }

    if (!preg_match('/^[0-9A-ZА-ЯЁ_\.\/-]+$/u', $term)) {
        continue;
    }

    if (!isset($formsByTerm[$term])) {
        $formsByTerm[$term] = array();
    }
    $formsByTerm[$term][$form] = true;
    $termByForm[$form] = $term;
}

if (!$formsByTerm) {
    return '';
}

$queryTokens = preg_split('/\s+/u', mb_strtoupper($query, 'UTF-8'), -1, PREG_SPLIT_NO_EMPTY);
$strictNominalTerms = array();
$isDenominationToken = function ($token) {
    return preg_match('/^(КОП|РУБ|ЕВРО|КРОН|ПЕННИ|ПЕНС|ЦЕНТ|ДОЛЛ|МАРК|ФРАНК|ГРОШ|ШИЛЛИНГ|ПФЕННИГ)/u', $token);
};

foreach ($queryTokens as $idx => $token) {
    if (!preg_match('/^[0-9]+$/', $token)) {
        continue;
    }

    $prev = isset($queryTokens[$idx - 1]) ? $queryTokens[$idx - 1] : '';
    $next = isset($queryTokens[$idx + 1]) ? $queryTokens[$idx + 1] : '';
    $denominationToken = '';

    if ($next !== '' && $isDenominationToken($next)) {
        $denominationToken = $next;
    } elseif ($prev !== '' && $isDenominationToken($prev)) {
        $denominationToken = $prev;
    }

    if ($denominationToken === '') {
        continue;
    }

    $numberTerm = isset($termByForm[$token]) ? $termByForm[$token] : $token;
    $denominationTerm = isset($termByForm[$denominationToken]) ? $termByForm[$denominationToken] : $denominationToken;

    if (isset($formsByTerm[$numberTerm])) {
        $strictNominalTerms[$numberTerm] = true;
    }
    if (isset($formsByTerm[$denominationTerm])) {
        $strictNominalTerms[$denominationTerm] = true;
    }
}

$words = array();
foreach ($formsByTerm as $term => $forms) {
    $formsByTerm[$term] = array_keys($forms);
    foreach ($formsByTerm[$term] as $form) {
        $words[$form] = true;
    }
}
$words = array_keys($words);

$fields = array(
    'year' => 3,
    'nominal' => 3,
    'theme' => 3,
    'metal' => 2,
    'made_in' => 2,
    'pagetitle' => 5,
    'longtitle' => 3,
);

$wordPlaceholders = array();
$fieldPlaceholders = array();
$params = array();

foreach ($words as $idx => $word) {
    $key = ':word' . $idx;
    $wordPlaceholders[] = $key;
    $params[$key] = $word;
}

foreach (array_keys($fields) as $idx => $field) {
    $key = ':field' . $idx;
    $fieldPlaceholders[] = $key;
    $params[$key] = $field;
}

$weightSql = 'CASE `field`';
foreach ($fields as $field => $weight) {
    $weightSql .= ' WHEN ' . $modx->quote($field) . ' THEN ' . (int) $weight;
}
$weightSql .= ' ELSE 1 END';

$termSql = 'CASE';
foreach ($formsByTerm as $term => $forms) {
    $quotedForms = array();
    foreach ($forms as $form) {
        $quotedForms[] = $modx->quote($form);
    }
    $termSql .= ' WHEN `word` IN (' . implode(',', $quotedForms) . ') THEN ' . $modx->quote($term);
}
$termSql .= ' END';

$strictNominalHaving = '';
if ($strictNominalTerms) {
    $quotedStrictTerms = array();
    foreach (array_keys($strictNominalTerms) as $term) {
        $quotedStrictTerms[] = $modx->quote($term);
    }
    $strictNominalHaving = '
        AND COUNT(DISTINCT CASE
            WHEN `field` = "nominal" AND (' . $termSql . ') IN (' . implode(',', $quotedStrictTerms) . ')
            THEN ' . $termSql . '
        END) = ' . count($strictNominalTerms);
}

$sql = '
    SELECT `resource`
    FROM ' . $modx->getTableName('mseWord') . '
    WHERE `word` IN (' . implode(',', $wordPlaceholders) . ')
        AND `field` IN (' . implode(',', $fieldPlaceholders) . ')
    GROUP BY `resource`
    HAVING COUNT(DISTINCT ' . $termSql . ') = ' . count($formsByTerm) . '
        ' . $strictNominalHaving . '
    ORDER BY SUM(' . $weightSql . ' * `count`) DESC
    LIMIT 5000
';

$stmt = $modx->prepare($sql);
if (!$stmt) {
    return '';
}

foreach ($params as $key => $value) {
    $stmt->bindValue($key, $value);
}

if (!$stmt->execute()) {
    return '';
}

$ids = $stmt->fetchAll(PDO::FETCH_COLUMN);

return $ids ? implode(',', $ids) : '';
