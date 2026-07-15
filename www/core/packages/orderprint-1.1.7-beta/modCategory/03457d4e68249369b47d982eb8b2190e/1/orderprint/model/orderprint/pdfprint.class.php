<?php

class PdfPrint {

    public $modx;
    public $pdf;
    public $user;
    public $order;
    public $document;
    public $storeType;
    public $error = NULL;
    public $placeholders = array();

    public function __construct(modX &$modx, $orderid, $docid) {
        if (!$orderid || !$docid) {
            $this->error = $this->modx->lexicon('orderprint_bad_request');
            return;
        }
        $this->modx = & $modx;
        $this->modx->addPackage('orderprint', $this->modx->getOption('core_path') . 'components/orderprint/model/');
        $this->modx->lexicon->load('orderprint:default');
        $this->storeType = $this->modx->getOption('opr_type');
        switch ($this->storeType) {
            case 'shk':
                $this->modx->addPackage('shopkeeper', $modx->getOption('core_path') . 'components/shopkeeper/model/');
                break;
            case 'ms2':
                break;
        }
        $this->user = $this->modx->user;
        $this->order = $this->getOrder($orderid);
        if (!$document = $this->modx->getObject('OprDocuments', $docid)) {
            $this->error = $this->modx->lexicon('orderprint_document_not_found');
            return;
        }
        $this->document = $document;
        if (!$this->checkAccess()) {
            $this->error = $this->modx->lexicon('orderprint_access_deined');
            return;
        }
        $orientation = 'P';
        if ($document->orientation == 1)
            $orientation = 'L';
        $pdf = new MYPDF($orientation, 'pt', 'A4', true, 'UTF-8', false);
        $pdf->setPrintHeader(FALSE);
        $this->pdf = $pdf;
        $this->preparePage();
        $this->setPlaceholders();
        $this->render();
    }

    public function preparePage() {
        $margins = explode(',', $this->document->margins);
        $this->pdf->SetCreator('TCPDF');
        $this->pdf->SetAuthor('admin');
        $this->pdf->SetTitle($this->document->name);
        $this->pdf->SetSubject($this->document->name);
        $this->pdf->SetKeywords($this->document->name);
        $this->pdf->SetHeaderData(0, 0, 0, 0);
        $this->pdf->setHeaderFont(Array('helvetica', '', 6));
        $this->pdf->setFooterFont(Array('helvetica', '', 5));
        $this->pdf->SetDefaultMonospacedFont('courier');
        $this->pdf->SetMargins(intval($margins[3]), intval($margins[0]), intval($margins[1]));
        $this->pdf->SetHeaderMargin(0);
        $this->pdf->SetFooterMargin(0);
        $this->pdf->SetAutoPageBreak(TRUE, intval($margins[2]));
        $this->pdf->setImageScale(1.25);
        $this->pdf->setFontSubsetting(true);
        $this->pdf->SetFont('dejavusans', '', 14, '', true);
        $this->pdf->AddPage();
        $tagvs = array('p' => array(0 => array('h' => 0, 'n' => 0), 1 => array('h' => 0, 'n' => 0)));
        $this->pdf->setHtmlVSpace($tagvs);
    }

    public function getOrder($orderid) {
        switch ($this->storeType) {
            case 'shk':
                $order = $this->modx->getObject('SHKorder', $orderid);
                break;
            case 'ms2':
                $order = $this->modx->getObject('msOrder', $orderid);
                break;
        }
        if (!$order) {
            $this->error = $this->modx->lexicon('orderprint_order_not_found');
            return false;
        } else
            return $order;
    }

    public function checkAccess() {
        if (/*$this->user->isMember('Administrator') ||*/ $this->modx->hasPermission('orderprint_manage'))
            return true;
        else {
            if ($this->document->get('available_for_front') != 1)
                return false;
            switch ($this->storeType) {
                case 'shk':
                    $customer = $this->order->get('userid');
                    break;
                case 'ms2':
                    $customer = $this->order->get('user_id');
                    break;
            }
            if ($customer == $this->user->get('id'))
                return true;
            else
                return false;
        }
    }

    public function setPlaceholders() {
        $settings = $this->getCustomSettings();
        switch ($this->storeType) {
            case 'shk':
                $orderData = $this->getOrderDataSHK();
                break;
            case 'ms2':
                $orderData = $this->getOrderDataMS2();
                break;
        }
        $this->placeholders = array_merge($settings, $orderData);
    }

    public function getCustomSettings() {
        $settingsObject = $this->modx->getCollection('OprSettings');
        $settings = array();
        foreach ($settingsObject as $option) {
            $settings['settings.' . $option->get('name')] = $option->get('value');
        }
        return $settings;
    }

    public function getOrderDataSHK() {
        $orderData = array();
        $this->modx->addPackage('shopkeeper', $this->modx->getOption('core_path') . 'components/shopkeeper/model/');
        $q = $this->modx->newQuery('modUser');
        $q->where(array('id' => $this->order->get('userid')));
        $q->innerJoin('modUserProfile', 'Profile', 'Profile.internalKey = modUser.id');
        $q->select('modUser.username');
        $q->select('Profile.fullname,email,phone,mobilephone,dob,gender,address,country,city,state,zip,fax,photo,comment,website,extended');
        if ($q->prepare() && $q->stmt->execute()) {
            $user = $q->stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        foreach (json_decode($user[0]['extended']) as $exteadedField => $extendedValue) {
            $orderData['user.extended.' . $exteadedField] = $extendedValue;
        }
        unset($user[0]['extended']);
        foreach ($user[0] as $dataField => $dataValue) {
            $orderData['user.' . $dataField] = $dataValue;
        }
        $q = $this->modx->newQuery('SHKconfig');
        $q->where(array('setting' => 'statuses'));
        $q->select('value');
        if ($q->prepare() && $q->stmt->execute()) {
            $statuses = $q->stmt->fetchAll(PDO::FETCH_ASSOC);
            if ($statuses = unserialize($statuses[0]['value'])) {
                $orderData['status'] = $statuses[$this->order->get('status')][0];
            }
        }
        $order = $this->order->toArray();
        $contacts = unserialize($order["contacts"]);
        if(isset($contacts['address']) && is_array($contacts['address'])){
            foreach ($contacts['address'] as $contactField => $contactValue) {
                $orderData['contacts.address.' . $contactField] = $contactValue;
            }
            unset($contacts['address']);
        }
        if ($contacts['order'])
            unset($contacts['order']);
        foreach ($contacts as $contactField => $contactValue) {
            $orderData['contacts.' . $contactField] = $contactValue;
        }
        if ($contacts['address'])
            unset($contacts['address']);
        $i = 1;
        if ($tpl = $this->document->get('chunk2')) {
            $cart = '';
            foreach (unserialize($order["content"]) as $product) {
                if ($product['name'] === 'Доставка') {
                    $orderData['delivery_cost'] = $product['price'];
                    continue;
                }
                $productArray = array();
                $productArray['idx'] = $i;
                $productArray['id'] = $product['id'];
                $productArray['count'] = $product['count'];
                $productArray['price'] = $product['price'];
                $productArray['cost'] = $product['count'] * $product['price'];
                $productArray['link'] = $product['link'];
                $productArray['name'] = $product['name'];
                foreach ($product['tv'] as $tvName => $tvValue) {
                    $productArray['tv.' . $tvName] = $tvValue;
                }
                foreach ($product['tv_add'] as $tv_addName => $tv_addValue) {
                    $productArray['tv_add.' . $tv_addName] = $tv_addValue;
                }
                $cart .= $this->getChunk($tpl, $productArray);
                $i++;
            }
            $orderData['cart'] = $cart;
        }
		$orderData['cart_count'] = count($order["content"]);
        $orderData['date'] = date('d.m.Y', strtotime($order["date"]));
        $orderData['createdon_raw'] = strtotime($order["date"]);
        $orderData['sentdate'] = date('d.m.Y', strtotime($order["sentdate"]));
        unset($order["contacts"], $order["content"], $order["userid"], $order["addit"], $order["status"], $order["date"], $order["sentdate"]);
        foreach ($order as $field => $fieldValue) {
            $orderData[$field] = $fieldValue;
        }
		if($orderData['price'])
			$orderData['price_string'] = $this->num2str($orderData['price']);
	  	else
			$orderData['price_string'] = $this->num2str(0);
        $orderData['print_date'] = date('d.m.Y', time());
        $orderData['manager'] = $this->user->Profile->get('fullname');
        if (!isset($orderData['delivery']) || !$orderData['delivery']) {
            $conf = $this->modx->getObject('SHKconfig', array('setting' => 'delivery'));
            $conf = unserialize($conf->value);
            $orderData['delivery'] = $conf[0][0];
        }
        
        return $orderData;
    }

    public function getOrderDataMS2() {
        $orderData = array();
        $userData = $this->order->User->Profile->toArray();
        if(!empty($userData['extended'])){
            foreach ($userData['extended'] as $exteadedField => $extendedValue) {
                $orderData['user.extended.' . $exteadedField] = $extendedValue;
            }
        }
        unset($userData['extended'], $userData['blocked'], $userData['blockeduntil'], $userData['blockedafter'], $userData['logincount'], $userData['lastlogin'], $userData['thislogin'], $userData['failedlogincount'], $userData['sessionid']);
        foreach ($userData as $dataField => $dataValue) {
            $orderData['user.' . $dataField] = $dataValue;
        }
        $orderData['user.username'] = $this->order->User->get('username');
        $address = $this->order->Address->toArray();
        if(!empty($address['properties'])){
            foreach ($address['properties'] as $addressProperty => $addressPropertyValue) {
                $orderData['address.properties.' . $addressProperty] = $addressPropertyValue;
            }
        }
        unset($address['properties'], $address['id'], $address['user_id'], $address['createdon'], $address['updatedon']);
        
        foreach ($address as $addressField => $addressFieldValue) {
            if(!$addressFieldValue) continue;
            $orderData['address.' . $addressField] = $addressFieldValue;
        }
        $order = $this->order->toArray();
        if(!empty($order['properties'])){
            foreach ($order['properties'] as $propertyName => $propertyValue) {
                $orderData['properties.' . $propertyName] = $propertyValue;
            }
        }
        $orderData['createdon'] = date('d.m.Y', strtotime($order['createdon']));
        $orderData['createdon_raw'] = strtotime($order['createdon']);
        $orderData['delivery'] = $this->order->Delivery->get('name');
        $orderData['payment'] = $this->order->Payment->get('name');
        $orderData['payment_description'] = $this->order->Delivery->get('description');
        $orderData['payment_price'] = $this->order->Delivery->get('price');
        $orderData['status'] = $this->order->Status->get('name');
        unset($order['user_id'], $order['address'], $order['updatedon'], $order['properties'], $order['createdon'], $order['delivery'], $order['payment'], $order['status']);
        foreach ($order as $key => $value) {
            $orderData[$key] = $value;
        }

		if($orderData['cost'])
			$orderData['cost_string'] = $this->num2str($orderData['cost']);
	  	else
			$orderData['cost_string'] = $this->num2str(0);
            
        if ($tpl = $this->document->get('chunk2')) {
            $cart = '';
            $i = 1;
            foreach ($this->order->Products as $product) {
                $productArray = array();
                $productArray['idx'] = $i;
                $productArray['id'] = $product->get('id');
                $productArray['cost'] = $product->get('cost');
                $productArray['count'] = $product->get('count');
                $productArray['price'] = $product->get('price');
                $productArray['weight'] = $product->get('weight');
                if(isset($product->Product) && gettype($product->Product) == 'object'){
                    $productArray['pagetitle'] = $product->Product->get('pagetitle');
                    $productArray['thumb'] = $product->Product->Data->get('thumb');
                    $productArray['article'] = $product->Product->Data->get('article');
                }
                else{
                    $productArray['pagetitle'] = $product->get('name');
                    $productArray['thumb'] = '';
                    $productArray['article'] = '';
                }
                $productOptions = $product->get('options');
                if(!empty($productOptions)){
                    foreach ($productOptions as $option => $value) {
                        $productArray['options.' . $option] = $value;
                    }
                }
                $cart .= $this->getChunk($tpl, $productArray);
                $i++;
            }
            $orderData['cart'] = $cart;
			$orderData['cart_count'] = count($this->order->Products);
        }
        $orderData['print_date'] = date('d.m.Y', time());
        $orderData['manager'] = $this->user->Profile->get('fullname');
    
        return $orderData;
    }

    public function render() {
        if ($tpl = $this->document->get('chunk1')) {
            $content = $this->getChunk($tpl, $this->placeholders);
            $this->pdf->writeHTML($content, true, false, true, false, '');
            $this->pdf->Output('simple.pdf', 'I');
        }
    }
    
    public function getChunk($tpl, $pls){
      $chunk = $this->modx->getObject('modChunk', array('name' => $tpl));
      $begin = '\[\[\+';
		$end = ']]';
		preg_match_all("#".$begin."([0-1a-zA-Z\-\._]*?)".$end."#i",$chunk->snippet,$match);
		foreach($match[1] as $pl){
			if(!isset($pls[$pl]) && !$this->modx->getPlaceholder($pl)) $pls[$pl] = '';
		}
      return $this->modx->getChunk($tpl, $pls);
    }

	public function num2str($num) {
		$nul = $this->modx->lexicon('orderprint_nul');
		$ten=array(
			explode(',', $this->modx->lexicon('orderprint_count_units_masculine')),
			explode(',', $this->modx->lexicon('orderprint_count_units_feminine'))
		);
		$a20 = explode(',', $this->modx->lexicon('orderprint_count_20'));
		$tens = explode(',', $this->modx->lexicon('orderprint_count_dozens'));
		$hundred = explode(',', $this->modx->lexicon('orderprint_count_hundreds'));
		$unit=array( // Units
			explode(',', $this->modx->lexicon('orderprint_money_penny')),
			explode(',', $this->modx->lexicon('orderprint_money_base')),
			explode(',', $this->modx->lexicon('orderprint_money_thousands')),
			explode(',', $this->modx->lexicon('orderprint_money_millions')),
			explode(',', $this->modx->lexicon('orderprint_money_milliards'))
		);
		//
		list($rub,$kop) = explode('.',sprintf("%015.2f", floatval($num)));
		$out = array();
		if (intval($rub)>0) {
			foreach(str_split($rub,3) as $uk=>$v) { // by 3 symbols
				if (!intval($v)) continue;
				$uk = sizeof($unit)-$uk-1; // unit key
				$gender = $unit[$uk][3];
				list($i1,$i2,$i3) = array_map('intval',str_split($v,1));
				// mega-logic
				$out[] = $hundred[$i1]; # 1xx-9xx
				if ($i2>1) $out[]= $tens[$i2].' '.$ten[$gender][$i3]; # 20-99
				else $out[]= $i2>0 ? $a20[$i3] : $ten[$gender][$i3]; # 10-19 | 1-9
				// units without rub & kop
				if ($uk>1) $out[]= $this->morph($v,$unit[$uk][0],$unit[$uk][1],$unit[$uk][2]);
			} //foreach
		}
		else $out[] = $nul;
		$out[] = $this->morph(intval($rub), $unit[1][0],$unit[1][1],$unit[1][2]); // rub
		$out[] = $kop.' '.$this->morph($kop,$unit[0][0],$unit[0][1],$unit[0][2]); // kop
		return trim(preg_replace('/ {2,}/', ' ', join(' ',$out)));
	}
	
	public function morph($n, $f1, $f2, $f5) {
		$n = abs(intval($n)) % 100;
		if ($n>10 && $n<20) return $f5;
		$n = $n % 10;
		if ($n>1 && $n<5) return $f2;
		if ($n==1) return $f1;
		return $f5;
	}
}

?>