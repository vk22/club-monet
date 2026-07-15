<?php
class myCartHandler extends msCartHandler
{




    private $discountPercent5 = 5.0;
    private $discountPercent10 = 10.0;
    private $discountPercent15 = 15.0;
    private $discountPercent20 = 20.0;
    private $discountPercent25 = 25.0;

    // public function getContext(){

    //     $context = $modx->context->get('key');
    //     print_r($context);

    // }

    public function getDiscountPercent()
    {
        return $this->discountPercent;
    }

    /* @inheritdoc} */
    public function status($data = array())
    {
        $status = parent::status($data);

        // margin && discount
        $status['withoutAccessories'] = $this->calcWithoutAccessories();
        $status['discount'] = $this->getCartDiscount();
        $status['old_cost'] = $this->saveOldCostEx($status['total_cost']);
        $status['total_cost'] = $this->calcTotalCostEx($status['total_cost'], $status['discount']);

        $context = $this->modx->context->get('key');
        if ($context == 'web') {
            $status['user_discount'] = $this->getUserDiscount();
        }

        //print_r ($status);

        return $status;
    }

    public function calcTotalCostEx($total_cost, $discount)
    {
        $result = $total_cost;

        if (!empty($discount)) {
            //$result = $this->roundCost($total_cost - $discount);
            $result = $total_cost - $discount;
        }
        return $result;
    }

    public function saveOldCostEx($total_cost)
    {
        $result = $total_cost;
        return $result;
    }

    public function calcWithoutAccessories()
    {
        $context = $this->modx->context->get('key');
        if ($context == 'web') {
            $discountPercentUser = $this->getUserDiscount();
        } else {
            $discountPercentUser = $status['user_discount'];
        }

        $countSet = 0;
        $totalCost = 0;
        foreach ($this->cart as $item) {
            if (empty($item['ctx']) || $item['ctx'] == $this->modx->context->key) {
                if ($item['count'] >= 4) {
                    $countSet++;
                }
                ////

                $res = $this->modx->getObject('modResource', $item['id']);
                if ($res) {
                    $parentCat = $res->get('parent');
                }

                if ($parentCat) {
                    $res2 = $this->modx->getObject('modResource', $parentCat);
                }

                if ($res2) {
                    $parentCat2 = $res2->get('parent');
                }

                //print $parentCat2;


                if ($parentCat2 != 17) {
                    $totalCost += $item['price'] * $item['count'];
                }

                //$modx->log(modX::LOG_LEVEL_INFO, print_r($totalCost, true)); 
            }
        }

        //echo $totalCost;

        $result = $totalCost;

        return $result;
    }

    public function getUserName()
    {

        $userId = $this->modx->user->get('id');
        $objUser = $this->modx->getObject('modUser', $userId);
        $objProfile = $this->modx->getObject('modUserProfile', $userId);
        $userName = $objProfile->get('fullname');
        return $userName;
    }

    public function getUserDiscount()
    {

        $userId = $this->modx->user->get('id');

        if ($userId > 0 && $userId != 1 && $userId != 12) {
            $objUser = $this->modx->getObject('modUser', $userId);
            $objProfile = $this->modx->getObject('modUserProfile', $userId);
            $discountPercentUser = $objProfile->get('discount');
            $discountPercentUser = intval($discountPercentUser);
        } else {
            $discountPercentUser = 0;
        }

        return $discountPercentUser;
    }


    public function getCartDiscount()
    {

        //персональная скидка если есть

        $context = $this->modx->context->get('key');
        if ($context == 'web') {
            $discountPercentUser = $this->getUserDiscount();
        } else {
            $discountPercentUser = $status['user_discount'];
        }


        // $this->modx->log(MODX_LOG_LEVEL_ERROR, 'context >>');
        // $this->modx->log(MODX_LOG_LEVEL_ERROR, $context);

        // $this->modx->log(MODX_LOG_LEVEL_ERROR, 'userName >>');
        // $this->modx->log(MODX_LOG_LEVEL_ERROR, $userName);

        // $this->modx->log(MODX_LOG_LEVEL_ERROR, 'discountPercentUser >>');
        // $this->modx->log(MODX_LOG_LEVEL_ERROR, $discountPercentUser);

        $countSet = 0;
        $totalCost = 0;
        foreach ($this->cart as $item) {
            if (empty($item['ctx']) || $item['ctx'] == $this->modx->context->key) {
                if ($item['count'] >= 4) {
                    $countSet++;
                }
                ////

                $res = $this->modx->getObject('modResource', $item['id']);
                // $parentCat = $res->get('parent');
                // $res2 = $this->modx->getObject('modResource',$parentCat);
                // $parentCat2 = $res2->get('parent');
                // //print $parentCat2;
                if ($res) {
                    $parentCat = $res->get('parent');
                }

                if ($parentCat) {
                    $res2 = $this->modx->getObject('modResource', $parentCat);
                }

                if ($res2) {
                    $parentCat2 = $res2->get('parent');
                }

                if ($parentCat2 != 17) {
                    $totalCost += $item['price'] * $item['count'];
                }

                //$modx->log(modX::LOG_LEVEL_INFO, print_r($totalCost, true)); 
            }
        }

        //echo $totalCost;

        if ($discountPercentUser <= $this->discountPercent5) {

            //echo "Скидка меньше 5";

            if ($totalCost > 0 && $totalCost < 5000) {
                return $this->roundCost($totalCost * ($discountPercentUser / 100.0));
            } else if ($totalCost >= 5000 && $totalCost < 10000) {
                return $this->roundCost($totalCost * ($this->discountPercent5 / 100.0));
            } else if ($totalCost >= 10000 && $totalCost < 15000) {
                return $this->roundCost($totalCost * ($this->discountPercent10 / 100.0));
            } else if ($totalCost >= 15000 && $totalCost < 150000) {
                return $this->roundCost($totalCost * ($this->discountPercent15 / 100.0));
            } else if ($totalCost >= 150000 && $totalCost < 500000) {
                return $this->roundCost($totalCost * ($this->discountPercent20 / 100.0));
            } else if ($totalCost >= 500000) {
                return $this->roundCost($totalCost * ($this->discountPercent25 / 100.0));
            }
        } else if ($discountPercentUser > $this->discountPercent5 && $discountPercentUser <= $this->discountPercent10) {

            //       //echo "Скидка между 5 и 10";

            if ($totalCost > 0 && $totalCost < 10000) {
                return $this->roundCost($totalCost * ($discountPercentUser / 100.0));
            } else if ($totalCost >= 10000 && $totalCost < 15000) {
                return $this->roundCost($totalCost * ($this->discountPercent10 / 100.0));
            } else if ($totalCost >= 15000 && $totalCost < 150000) {
                return $this->roundCost($totalCost * ($this->discountPercent15 / 100.0));
            } else if ($totalCost >= 150000 && $totalCost < 500000) {
                return $this->roundCost($totalCost * ($this->discountPercent20 / 100.0));
            } else if ($totalCost >= 500000) {
                return $this->roundCost($totalCost * ($this->discountPercent25 / 100.0));
            }
        } else if ($discountPercentUser > $this->discountPercent10 && $discountPercentUser <= $this->discountPercent15) {
            //   //echo "Скидка между 10 и 15";

            if ($totalCost > 0 && $totalCost < 15000) {
                return $this->roundCost($totalCost * ($discountPercentUser / 100.0));
            } else if ($totalCost >= 15000 && $totalCost < 150000) {
                return $this->roundCost($totalCost * ($this->discountPercent15 / 100.0));
            } else if ($totalCost >= 150000 && $totalCost < 500000) {
                return $this->roundCost($totalCost * ($this->discountPercent20 / 100.0));
            } else if ($totalCost >= 500000) {
                return $this->roundCost($totalCost * ($this->discountPercent25 / 100.0));
            }
        } else if ($discountPercentUser > $this->discountPercent15 && $discountPercentUser <= $this->discountPercent20) {
            //   //echo "Скидка между 15 и 20";

            if ($totalCost > 0 && $totalCost < 150000) {
                return $this->roundCost($totalCost * ($discountPercentUser / 100.0));
            } else if ($totalCost >= 150000 && $totalCost < 500000) {
                return $this->roundCost($totalCost * ($this->discountPercent20 / 100.0));
            } else if ($totalCost >= 500000) {
                return $this->roundCost($totalCost * ($this->discountPercent25 / 100.0));
            }
        } else if ($discountPercentUser > $this->discountPercent20 && $discountPercentUser <= $this->discountPercent25) {
            //   //echo "Скидка больше 20";

            if ($totalCost > 0 && $totalCost < 500000) {
                return $this->roundCost($totalCost * ($discountPercentUser / 100.0));
                //return 0;
            } else if ($totalCost >= 500000) {
                return $this->roundCost($totalCost * ($this->discountPercent25 / 100.0));
            }
        } else if ($discountPercentUser > $this->discountPercent25) {
            //   //echo "Скидка больше 20";

            if ($totalCost > 0) {
                return $this->roundCost($totalCost * ($discountPercentUser / 100.0));
                //return 0;
            }
        }
    }

    public function roundCost($cost)
    {
        // return round($cost / 50) * 50;
        return $cost;
    }
}
