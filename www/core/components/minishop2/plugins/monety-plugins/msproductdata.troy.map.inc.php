<?php
return array(
	'fields' => array(
		'nominal' => NULL
		,'year' => 0
		,'metal' => NULL
		,'theme' => NULL
		,'remains' => 0

	)
	,'fieldMeta' => array(
		'nominal' => array(
			'dbtype' => 'varchar'
			,'precision' => '5'
			,'phptype' => 'string'
			,'null' => true
			,'default' => NULL
		),
		'year' => array(
			'dbtype' => 'decimal',
			'precision' => '12,2',
			'phptype' => 'float',
			'null' => false,
			'default' => 0
		),
		'metal' => array(
			'dbtype' => 'varchar'
			,'precision' => '5'
			,'phptype' => 'string'
			,'null' => true
			,'default' => NULL
		),
		'theme' => array(
			'dbtype' => 'varchar'
			,'precision' => '255'
			,'phptype' => 'json'
			,'null' => true
			,'default' => NULL
		),
		'remains' => array(
			'dbtype' => 'decimal',
			'precision' => '12,2',
			'phptype' => 'float',
			'null' => false,
			'default' => 1
		)						

	)
	,'indexes' => array(
		'nominal' => array (
			'alias' => 'nominal'
			,'primary' => false
			,'unique' => false
			,'type' => 'BTREE'
			,'columns' => array (
				'action' => array (
					'length' => ''
					,'collation' => 'A'
					,'null' => false
				)
			)	
		),
		'year' => array (
			'alias' => 'year'
			,'primary' => false
			,'unique' => false
			,'type' => 'BTREE'
			,'columns' => array (
				'action' => array (
					'length' => ''
					,'collation' => 'A'
					,'null' => false
				)
			)
		),
		'metal' => array (
			'alias' => 'metal'
			,'primary' => false
			,'unique' => false
			,'type' => 'BTREE'
			,'columns' => array (
				'action' => array (
					'length' => ''
					,'collation' => 'A'
					,'null' => false
				)
			)	
		),
		'theme' => array (
			'alias' => 'theme'
			,'primary' => false
			,'unique' => false
			,'type' => 'BTREE'
			,'columns' => array (
				'action' => array (
					'length' => ''
					,'collation' => 'A'
					,'null' => false
				)
			)	
		),
		'remains' => array (
			'alias' => 'remains'
			,'primary' => false
			,'unique' => false
			,'type' => 'BTREE'
			,'columns' => array (
				'action' => array (
					'length' => ''
					,'collation' => 'A'
					,'null' => false
				)
			)
		)	

	)
		
);
