Orderprint.panel.Home = function(config) {
    config = config || {};
    Ext.apply(config, {
        border: false
                , baseCls: 'modx-formpanel'
                , items: [{
                html: '<h2>' + _('orderprint_caption') + '</h2>'
                        , border: false
                        , cls: 'modx-page-header'
            }, {
                xtype: 'modx-tabs'
                        , bodyStyle: 'padding: 10px'
                        , defaults: {border: false, autoHeight: true}
                , border: true
                        , items: [
                    {
                        title: _('orderprint_order_caption')
                                , defaults: {autoHeight: true}
                        , items: [{
                                html: '<p>' + _('orderprint_orders_shk_desc') + '</p><br />'
                                        , border: false
                            }, {
                                xtype: 'orderprint-grid-orders'
                                        , preventRender: true
                            }]
                    },
                    {
                        title: _('orderprint_setting_caption')
                                , defaults: {autoHeight: true}
                        , items: [{
                                html: '<p>' + _('orderprint_settings_desc') + '</p><br />'
                                        , border: false
                            }, {
                                xtype: 'orderprint-grid-settings'
                                        , preventRender: true
                            }]
                    },
                    {
                        title: _('orderprint_document_caption')
                                , defaults: {autoHeight: true}
                        , items: [{
                                html: '<p>' + _('orderprint_document_desc') + '</p><br />'
                                        , border: false
                            }, {
                                xtype: 'orderprint-grid-documents'
                                        , preventRender: true
                            }]
                    }
                ]
            }]
    });
    Orderprint.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(Orderprint.panel.Home, MODx.Panel);
Ext.reg('orderprint-panel-home', Orderprint.panel.Home);
