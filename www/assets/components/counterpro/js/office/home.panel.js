counterPro.panel.Home = function (config) {
    config = config || {};
    Ext.apply(config, {
        baseCls: 'modx-formpanel',
        layout: 'anchor',
        /*
         stateful: true,
         stateId: 'counterpro-panel-home',
         stateEvents: ['tabchange'],
         getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
         */
        hideMode: 'offsets',
        items: [{
            xtype: 'modx-tabs',
            defaults: {border: false, autoHeight: true},
            border: false,
            hideMode: 'offsets',
            items: [{
                title: _('counterpro_items'),
                layout: 'anchor',
                items: [{
                    html: _('counterpro_intro_msg'),
                    cls: 'panel-desc',
                }, {
                    xtype: 'counterpro-grid-items',
                    cls: 'main-wrapper',
                }]
            }]
        }]
    });
    counterPro.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(counterPro.panel.Home, MODx.Panel);
Ext.reg('counterpro-panel-home', counterPro.panel.Home);
