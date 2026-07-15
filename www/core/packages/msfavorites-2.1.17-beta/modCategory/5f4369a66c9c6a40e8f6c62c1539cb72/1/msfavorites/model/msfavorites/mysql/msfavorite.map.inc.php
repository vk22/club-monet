<?php
$xpdo_meta_map['msFavorite']= array (
  'package' => 'msfavorites',
  'version' => '1.1',
  'table' => 'ms_favorites',
  'extends' => 'xPDOObject',
  'tableMeta' => 
  array (
    'engine' => 'MyISAM',
  ),
  'fields' => 
  array (
    'uid' => '',
    'rid' => NULL,
    'list' => NULL,
    'temporary' => 0,
    'timestamp' => 'CURRENT_TIMESTAMP',
    'properties' => '',
  ),
  'fieldMeta' => 
  array (
    'uid' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '40',
      'phptype' => 'string',
      'null' => false,
      'index' => 'pk',
      'default' => '',
    ),
    'rid' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'attributes' => 'unsigned',
      'phptype' => 'integer',
      'null' => false,
      'index' => 'pk',
    ),
    'list' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '75',
      'phptype' => 'string',
      'null' => false,
      'index' => 'pk',
    ),
    'temporary' => 
    array (
      'dbtype' => 'tinyint',
      'precision' => '1',
      'attributes' => 'unsigned',
      'phptype' => 'boolean',
      'null' => false,
      'default' => 0,
      'index' => 'index',
    ),
    'timestamp' => 
    array (
      'dbtype' => 'timestamp',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 'CURRENT_TIMESTAMP',
    ),
    'properties' => 
    array (
      'dbtype' => 'text',
      'phptype' => 'json',
      'null' => false,
      'default' => '',
    ),
  ),
  'indexes' => 
  array (
    'favorite' => 
    array (
      'alias' => 'favorite',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'uid' => 
        array (
          'length' => '40',
          'collation' => 'A',
          'null' => false,
        ),
        'rid' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
        'list' => 
        array (
          'length' => '75',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
    'uid' => 
    array (
      'alias' => 'uid',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'uid' => 
        array (
          'length' => '40',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
    'rid' => 
    array (
      'alias' => 'rid',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'rid' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
    'list' => 
    array (
      'alias' => 'list',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'list' => 
        array (
          'length' => '75',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
    'temporary' => 
    array (
      'alias' => 'temporary',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'temporary' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
  ),
);
