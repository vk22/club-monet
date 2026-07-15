Orderprint.grid.Orders = function(config) {
    config = config || {};
    Ext.applyIf(config, {
        id: 'orderprint-grid-orders'
                , url: Orderprint.config.connectorUrl
                , baseParams: {action: 'mgr/order/getList'}
                , fields: ['id', 'number', 'date', 'buyer', 'summ', 'status']
                , paging: true
                , remoteSort: true
                , anchor: '97%'
                , autoExpandColumn: 'name'
                , columns: [
            {
                header: _('orderprint_order_caption_number')
                        , dataIndex: 'number'
                        , sortable: true
                        , width: 30
            }, {
                header: _('orderprint_order_caption_date')
                        , dataIndex: 'date'
                        , sortable: true
                        , width: 60
            }, {
                header: _('orderprint_order_caption_buyer')
                        , dataIndex: 'buyer'
                        , sortable: true
                        , width: 250
            }, {
                header: _('orderprint_order_caption_summ')
                        , dataIndex: 'summ'
                        , sortable: true
                        , width: 70
            }, {
                header: _('orderprint_order_caption_status')
                        , dataIndex: 'status'
                        , sortable: true
                        , width: 150
            }
        ]
                , tbar: [{
                xtype: 'textfield'
                        , id: 'orderprint-search-filter'
                        , emptyText: _('orderprint_order_search')
                        , listeners: {
                    'change': {fn: this.search, scope: this}
                    , 'render': {fn: function(cmp) {
                            new Ext.KeyMap(cmp.getEl(), {
                                key: Ext.EventObject.ENTER
                                        , fn: function() {
                                    this.fireEvent('change', this);
                                    this.blur();
                                    return true;
                                }
                                , scope: cmp
                            });
                        }, scope: this}
                }
            }]
    });
    Orderprint.grid.Orders.superclass.constructor.call(this, config)
};
Ext.extend(Orderprint.grid.Orders, MODx.grid.Grid, {
    search: function(tf, nv, ov) {
        var s = this.getStore();
        s.baseParams.query = tf.getValue();
        this.getBottomToolbar().changePage(1);
        this.refresh();
    }
    , getMenu: function() {
        var m = mm;
        this.addContextMenuItem(m);
        return true;
    }
    , printDocument: function(btn, e, docid) {
        var printW = window.open(MODx.config.site_url + 'assets/components/orderprint/pdf/index.php?recordid=' + this.menu.record.id + '&docid=' + btn.options.docid, 'printWindow', 'width=800,height=700,menubar=0,location=noresizable=yes,scrollbars=yes');
    }
});
Ext.reg('orderprint-grid-orders', Orderprint.grid.Orders);