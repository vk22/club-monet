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
Corrected conversion of the date of createdon order in miniShop2 to timestamp',
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
      'guid' => '1f54bd49f2f13368790d9fab351a9a88',
      'native_key' => 'orderprint',
      'filename' => 'modNamespace/a48dffba8ccc2692c41a2514a511ef7d.vehicle',
      'namespace' => 'orderprint',
    ),
    1 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => '67c11c8d33109be90f794c624add3040',
      'native_key' => 'opr_type',
      'filename' => 'modSystemSetting/a4298a58a5d8259f7c3c6e6268361afe.vehicle',
      'namespace' => 'orderprint',
    ),
    2 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modAccessPolicy',
      'guid' => 'e2935743d3082a175de89c3e7c4d9322',
      'native_key' => NULL,
      'filename' => 'modAccessPolicy/cd3ea63dee0572ffd3f95ae7a0230194.vehicle',
      'namespace' => 'orderprint',
    ),
    3 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modAccessPolicyTemplate',
      'guid' => '419bc5c9e0b9b41b2c617b024882d539',
      'native_key' => NULL,
      'filename' => 'modAccessPolicyTemplate/72d5bf29d5e25b374aa5a9ac0979d633.vehicle',
      'namespace' => 'orderprint',
    ),
    4 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modMenu',
      'guid' => '8c76f2e6e04c6425aaf0b08e41b78117',
      'native_key' => 'orderprint_caption',
      'filename' => 'modMenu/1a7f60dc4890976290526f799a405f46.vehicle',
      'namespace' => 'orderprint',
    ),
    5 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modCategory',
      'guid' => 'fa58352b133fdf0b5f842bdb87355b77',
      'native_key' => NULL,
      'filename' => 'modCategory/03457d4e68249369b47d982eb8b2190e.vehicle',
      'namespace' => 'orderprint',
    ),
  ),
);