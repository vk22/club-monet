Ext.onReady(function() {
    MODx.load({ xtype: 'orderprint-page-home'});
});

Orderprint.page.Home = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        components: [{
            xtype: 'orderprint-panel-home'
            ,renderTo: 'orderprint-panel-home-div'
        }]
    });
    Orderprint.page.Home.superclass.constructor.call(this,config);
};
Ext.extend(Orderprint.page.Home,MODx.Component);
Ext.reg('orderprint-page-home',Orderprint.page.Home);