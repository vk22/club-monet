miniShop2.plugin.pluginname = {
	getFields: function(config) {
		return {
			nominal: {xtype: 'textfield', description: '<b>[[+nominal]]</b><br />'+_('ms2_product_nominal_help')},
			year: {xtype: 'numberfield', decimalPrecision: 2, description: '<b>[[+year]]</b><br />'+_('ms2_product_year_help')},
			metal: {xtype: 'textfield', description: '<b>[[+metal]]</b><br />'+_('ms2_product_metal_help')},
			theme: {xtype: 'minishop2-combo-options', description: '<b>[[+theme]]</b><br />'+_('ms2_product_theme_help')},
			remains: {xtype: 'numberfield', decimalPrecision: 2, description: '<b>[[+year]]</b><br />'+_('ms2_product_year_help')}
			
		}
	}
	,getColumns: function() {
		return {
			nominal: {width:50, sortable:false, editor: {xtype:'textfield', name: 'nominal'}},
			year: {width:20, sortable:false, editor: {xtype:'numberfield', decimalPrecision: 2, name: 'year'}},
			metal: {width:50, sortable:false, editor: {xtype: 'textfield', name: 'metal'}},
			theme: {width:50, sortable:false, editor: {xtype: 'minishop2-combo-options', name: 'theme'}},
			remains: {width:20, sortable:false, editor: {xtype:'numberfield', decimalPrecision: 2, name: 'year'}}		
		}
	}
};