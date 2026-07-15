<?php return array (
  'manifest-version' => '1.1',
  'manifest-attributes' => 
  array (
    'changelog' => 'Changelog file for orderPrint component.

orderPrint 1.0.0
====================================
Initial Version



orderPrint 1.1.1
====================================
Fixed a bug with the display address fields (indicated by the buyer in the form of reservation)



orderPrint 1.1.2
====================================
Add Shopkeeper\'s field address from order contacts. Placeholders [[+contacts.address]] from string or [[+contacts.address.address_field]] from array



orderPrint 1.1.3
====================================
Fix display information about the products removed from the system in MiniShop2



orderPrint 1.1.4
====================================
Added displaying the number of items in the cart and the order value in words



orderPrint 1.1.5
====================================
Added policies for access rights settings to printing documents in different groups of users



orderPrint 1.1.6
====================================
Fixed bug with rights to manage settings
Added placeholder with timestamp of order created time for both stores



orderPrint 1.1.7
====================================
Corrected conversion of the date of createdon order in miniShop2 to timestamp



orderPrint 1.2.0
====================================
Added support shopkeeper 3. For use it, system setting "opr_type" must be have "shk3" value.



orderPrint 1.2.1
====================================
Fixed bugs with API connection and processing of the tpl parameter in the orderPrint snippet
Fixed error when printing documents for orders without delivery and/or payment methods



orderPrint 1.2.2
====================================
Added support product options for MS2



orderPrint 1.2.3
====================================
Fenom template engine support added



orderPrint 1.2.4
====================================
Added placeholders from original products
Added total_count placeholder, with count of products in order',
    'license' => '',
    'readme' => '--------------------
Extra: orderPrint
--------------------
Version: 1.1.7
Since: Match 15th, 2016
Author: w-come <service@w-come.net>

Extra for creating documents in PDF.',
  ),
  'manifest-vehicles' => 
  array (
    0 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modNamespace',
      'guid' => 'bbf73e67db9605dd10d0d8c2f1a73155',
      'native_key' => 'orderprint',
      'filename' => 'modNamespace/7214f246a867f78d192803738c549ec1.vehicle',
      'namespace' => 'orderprint',
    ),
    1 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => '5e29f1a281aa0b710577758ca233184f',
      'native_key' => 'opr_type',
      'filename' => 'modSystemSetting/f7cf4d3d74aff8cea8f8d699cbbb17ca.vehicle',
      'namespace' => 'orderprint',
    ),
    2 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modAccessPolicy',
      'guid' => 'bfa13d9017062f6d6ceaf5689251c8af',
      'native_key' => NULL,
      'filename' => 'modAccessPolicy/754d022aa18f021a5c93027d65579b48.vehicle',
      'namespace' => 'orderprint',
    ),
    3 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modAccessPolicyTemplate',
      'guid' => '58c80788bd2e56de5b0ec75dea9098dc',
      'native_key' => NULL,
      'filename' => 'modAccessPolicyTemplate/3ee46d46c53008e1408684208c78baf6.vehicle',
      'namespace' => 'orderprint',
    ),
    4 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modMenu',
      'guid' => '5e398aed6ceb1d0ad922a1b7f242283d',
      'native_key' => 'orderprint_caption',
      'filename' => 'modMenu/a88e6ee1d9129319759d48c04dda4e21.vehicle',
      'namespace' => 'orderprint',
    ),
    5 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modCategory',
      'guid' => '1a68a01afd94873d84d2b7163d6a1a4e',
      'native_key' => NULL,
      'filename' => 'modCategory/d0d459a318fbb2261aa8e9f92800dec9.vehicle',
      'namespace' => 'orderprint',
    ),
  ),
);