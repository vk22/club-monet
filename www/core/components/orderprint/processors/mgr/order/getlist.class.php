<?php

/**
 * Get a list of Items
 */
/* номер, дата, покупатель, сумма, статус */


class orderPrintOrderGetListProcessor extends modObjectGetListProcessor {

    const TYPE_SHK = 'shk';
    const TYPE_MS2 = 'ms2';
    const TYPE_SHK3 = 'shk3';

    public $type;
    public $defaultSortField = 'id';
    public $defaultSortDirection = 'DESC';
    public $renderers = '';
    public $properties = array();
    public $objectType;
    public $classKey;
	public $permission = 'orderprint_manage';
    
    function __construct(modX & $modx, array $properties = array()) {
// проверка передан ли modx
        $this->modx = & $modx;
        $this->properties = $properties;
        $this->type = $this->modx->getOption('opr_type');
        switch ($this->type) {
            case self::TYPE_MS2:
                $this->objectType = 'msOrder';
                $this->classKey = 'msOrder';
                break;
            case self::TYPE_SHK:
                $this->objectType = 'SHKorder';
                $this->classKey = 'SHKorder';
                break;
            case self::TYPE_SHK3:
                $this->objectType = 'shk_order';
                $this->classKey = 'shk_order';
                break;
        }
    }

    public function process() {
        $beforeQuery = $this->beforeQuery();
        if ($beforeQuery !== true) {
            return $this->failure($beforeQuery);
        }
        $data = $this->getData();
        $list = $this->iterate($data);
        $res = $this->outputArray($list, $data['total']);
        $res = $this->convertJson($res);
        return $res;
    }
    
    /**
     * Get the data of the query
     * @return array
     */
    public function getData() {
        $data = array();
        $limit = intval($this->getProperty('limit'));
        $start = intval($this->getProperty('start'));

        /* query for chunks */
        $c = $this->modx->newQuery($this->classKey);
        $c = $this->prepareQueryBeforeCount($c);
        $data['total'] = $this->modx->getCount($this->classKey,$c);
        $c = $this->prepareQueryAfterCount($c);

        $sortClassKey = $this->getSortClassKey();
        $sortKey = $this->modx->getSelectColumns($sortClassKey,$this->getProperty('sortAlias',$sortClassKey),'',array($this->getProperty('sort')));
        if (empty($sortKey)) $sortKey = $this->getProperty('sort');
        switch ($this->type) {
            case self::TYPE_MS2:
                switch ($sortKey) {
                    case 'date':
                        $sortKey = 'createdon';
                        break;
                    case 'number':
                        $sortKey = 'id';
                        break;
                    case 'buyer':
                        $sortKey = 'user_id';
                        break;
                    case 'summ':
                        $sortKey = 'cost';
                        break;
                }
                break;
            case self::TYPE_SHK3:
            case self::TYPE_SHK:
                switch ($sortKey) {
                    case 'date':
                        $sortKey = 'date';
                        break;
                    case 'number':
                        $sortKey = 'id';
                        break;
                    case 'buyer':
                        $sortKey = 'userid';
                        break;
                    case 'summ':
                        $sortKey = 'price';
                        break;
                }
                break;
        }
        $c->sortby($sortKey,$this->getProperty('dir'));
        if ($limit > 0) {
            $c->limit($limit,$start);
        }

        $data['results'] = $this->modx->getCollection($this->classKey,$c);
        return $data;
    }
    
    private function convertJson($res) {
        //преобразуем результат работы стандартного процессора в массив и делаем подстановку нужных заголовков полей данных
        $res_arr = json_decode($res, TRUE);
        switch ($this->type) {
            case self::TYPE_MS2:
                for ($i = 0; $i < count($res_arr['results']); $i++) {
                    $res_arr['results'][$i]['number'] = $res_arr['results'][$i]['id'];
                    $res_arr['results'][$i]['date'] = date('d.m.Y',strtotime($res_arr['results'][$i]['createdon']));
                    $res_arr['results'][$i]['buyer'] = $this->getUserNameMS2($res_arr['results'][$i]['user_id']);
                    $res_arr['results'][$i]['summ'] = $res_arr['results'][$i]['cost'];
                    $res_arr['results'][$i]['status'] = $this->getStatusMS2($res_arr['results'][$i]['status']);
                }
                break;
            case self::TYPE_SHK:
                for ($i = 0; $i < count($res_arr['results']); $i++) {
                    $res_arr['results'][$i]['number'] = $res_arr['results'][$i]['id'];
                    $res_arr['results'][$i]['date'] = date('d.m.Y',strtotime($res_arr['results'][$i]['date']));
                    $res_arr['results'][$i]['buyer'] = $this->getUserNameSHK($res_arr['results'][$i]['userid'], $res_arr['results'][$i]['contacts'], $res_arr['results'][$i]['email']);
                    $res_arr['results'][$i]['summ'] = $res_arr['results'][$i]['price'];
                    $status = $this->getStatusSHK($res_arr['results'][$i]['status']);
                    $res_arr['results'][$i]['status'] = $status;
                }
                break;
            case self::TYPE_SHK3:
                for ($i = 0; $i < count($res_arr['results']); $i++) {
                    $res_arr['results'][$i]['number'] = $res_arr['results'][$i]['id'];
                    $res_arr['results'][$i]['date'] = date('d.m.Y',strtotime($res_arr['results'][$i]['date']));
                    $res_arr['results'][$i]['buyer'] = $this->getUserNameSHK($res_arr['results'][$i]['userid'], $res_arr['results'][$i]['contacts'], $res_arr['results'][$i]['email']);
                    $res_arr['results'][$i]['summ'] = $res_arr['results'][$i]['price'];
                    $status = $this->getStatusSHK3($res_arr['results'][$i]['status']);
                    $res_arr['results'][$i]['status'] = $status;
                }
                break;
        }
        $res = json_encode($res_arr);
        return $res;
    }

    public function beforeQuery() {
        if (empty($this->type)) {
            return $this->modx->lexicon('orderprint_order_err_type_empty');
        }
        if ($this->type != self::TYPE_SHK && $this->type != self::TYPE_MS2 && $this->type != self::TYPE_SHK3) {
            return $this->modx->lexicon('orderprint_order_err_type_incorrect');
        }
        return true;
    }

    /**
     * @param xPDOQuery $c
     *
     * @return xPDOQuery
     */
    /*public function prepareQueryBeforeCount(xPDOQuery $c) {
        return $c;
    }*/
    public function prepareQueryBeforeCount(xPDOQuery $c) {
        $query = $this->getProperty('query');
        if (!empty($query)) {
        $c->where(array(
            'id' => $query
        ));
        }
        return $c;
    }

    /**
     * @param xPDOObject $object
     *
     * @return array
     */
    public function prepareRow(xPDOObject $object) {
        $array = $object->toArray();

        return $array;
    }
    
    // additional methods
    public function getUserNameSHK($userid = NULL, $contacts = array(), $default = NULL) {$contacts = unserialize($contacts);
        if($contacts && is_array($contacts) && count($contacts) && isset($contacts['fullname']) && $contacts['fullname'])
            $userName = $contacts['fullname'];
        else if($userid){
            $q = $this->modx->newQuery('modUser');
            $q->where(array('id'=>$userid));
            $q->innerJoin('modUserProfile', 'Profile', 'Profile.internalKey = modUser.id');
            $q->select('modUser.username, Profile.fullname');
            if($q->prepare() && $q->stmt->execute()){
                $user = $q->stmt->fetchAll(PDO::FETCH_ASSOC);
                if($user[0]['fullname']) $userName = $user[0]['fullname'];
                else $userName = $user[0]['username'];
            }
        }
        else $userName = $default;
        if(!$userName) $userName = $this->modx->lexicon('orderprint_user_not_defined');
        return $userName;
    }
    
    public function getUserNameMS2($userid){
        if($userid){
            $q = $this->modx->newQuery('modUser');
            $q->where(array('id'=>$userid));
            $q->innerJoin('modUserProfile', 'Profile', 'Profile.internalKey = modUser.id');
            $q->select('modUser.username, Profile.fullname');
            if($q->prepare() && $q->stmt->execute()){
                $user = $q->stmt->fetchAll(PDO::FETCH_ASSOC);
                if($user[0]['fullname']) $userName = $user[0]['fullname'];
                else $userName = $user[0]['username'];
                //return '1';
            }
                //return $q->toSQL();
        }
        if(!isset($userName) || !$userName) $userName = $this->modx->lexicon('orderprint_user_not_defined');
        return $userName;
    }
    
    public function getStatusSHK($statusId){
        $q = $this->modx->newQuery('SHKconfig');
        $q->where(array('setting'=>'statuses'));
        $q->select('value');
        if($q->prepare() && $q->stmt->execute()){
            $statuses = $q->stmt->fetchAll(PDO::FETCH_ASSOC);
            if($statuses = unserialize($statuses[0]['value'])){
                $status = $statuses[$statusId][0];
            }
            else $status = $this->modx->lexicon('orderprint_status_not_defined');
        }
        else $status = $this->modx->lexicon('orderprint_status_not_defined');
        return $status;
    }
    
    public function getStatusSHK3($statusId){
        $q = $this->modx->newQuery('shk_config');
        $q->where(array('setting'=>'statuses'));
        $q->select('value');
        if ($q->prepare() && $q->stmt->execute()) {
            $statuses = $q->stmt->fetchAll(PDO::FETCH_ASSOC);
            if ($statuses = json_decode($statuses[0]['value'], true)){
                foreach ($statuses as $status_arr) {
                    if ($status_arr['id'] != $statusId) {
                        continue;
                    }
                    $status = $status_arr['label'];
                    break;
                }
            }
        }
        if (empty($status)) {
            $status = $this->modx->lexicon('orderprint_status_not_defined');
        }
        return $status;
    }
    
    public function getStatusMS2($statusId){
        $q = $this->modx->newQuery('msOrderStatus');
        $q->where(array('id'=>$statusId));
        $q->select('name');
        if($q->prepare() && $q->stmt->execute()){
            $statuses = $q->stmt->fetchAll(PDO::FETCH_ASSOC);
            $status = $statuses[0]['name'];
        }
        else $status = $this->modx->lexicon('orderprint_status_not_defined');
        return $status;
    }
}

return 'orderPrintOrderGetListProcessor';