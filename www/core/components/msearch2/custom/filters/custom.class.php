<?php
class customFiltersHandler extends mse2FiltersHandler
{
    /**
     * @param array $keys
     * @param array $ids
     *
     * @return array
     */
    public function getMsOptionValues(array $keys, array $ids)
    {
        $filters = array();
        $fields = $this->modx->getFields('msProductData');
        $q = $this->modx->newQuery('msProductOption');
        if (array_key_exists('sku_id', $fields)) {
            $q->innerJoin('msProductData', 'Data', 'Data.sku_id = msProductOption.product_id');
            $q->where(array('Data.id:IN' => $ids, 'key:IN' => $keys));
            $q->select('Data.id as product_id, key, value');
        } else {
            $q->where(array('key:IN' => $keys));
            $q->select('product_id, key, value');
        }
        $tstart = microtime(true);
        if ($q->prepare() && $q->stmt->execute()) {
            $this->modx->queryTime += microtime(true) - $tstart;
            $this->modx->executedQueries++;
            if ($rows = $q->stmt->fetchAll(PDO::FETCH_ASSOC)) {
                $ids_flip = array_flip($ids);
                foreach ($rows as $row) {
                    if (!isset($ids_flip[$row['product_id']])) {
                        continue;
                    }
                    $value = str_replace('"', '"', trim($row['value']));
                    $key = $row['key'];
                    
                    // Get ready for the special options in "key==value" format
                    if (strpos($value, '==')) {
                        list($key, $value) = explode('==', $value);
                        $key = preg_replace('/\s+/', '_', $key);
                    }
                    if (isset($filters[$key][$value])) {
                        $filters[$key][$value][$row['product_id']] = $row['product_id'];
                    } else {
                        $filters[$key][$value] = array($row['product_id'] => $row['product_id']);
                    }
                }
            }
        } else {
            $this->modx->log(modX::LOG_LEVEL_ERROR, "[mSearch2] Error on get filter params.\nQuery: " . $q->toSQL() . "\nResponse: " . print_r($q->stmt->errorInfo(), 1));
        }
        
        return $filters;
    }
}