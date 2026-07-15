counterPro.page.Home = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        components: [{
            xtype: 'counterpro-panel-home',
            renderTo: 'counterpro-panel-home-div'
        }]
    });
    counterPro.page.Home.superclass.constructor.call(this, config);
};
Ext.extend(counterPro.page.Home, MODx.Component);
Ext.reg('counterpro-page-home', counterPro.page.Home);