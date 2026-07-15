Orderprint.grid.Documents = function(config) {
    config = config || {};
    Ext.applyIf(config, {
        id: 'orderprint-grid-documents'
                , url: Orderprint.config.connectorUrl
                , baseParams: {action: 'mgr/document/getList'}
        , save_action: 'mgr/document/updatefromgrid'
                , fields: ['id', 'name', 'description', 'chunk1', 'chunk2', 'available_for_front', 'orientation', 'margins']
                , paging: true
                , autosave: true
                , remoteSort: true
                , anchor: '97%'
                , autoExpandColumn: 'name'
                , columns: [
            {
                header: _('id')
                        , dataIndex: 'id'
                        , sortable: true
                        , width: 30
            }, {
                header: _('orderprint_document_caption_name')
                        , dataIndex: 'name'
                        , sortable: true
                        , width: 200
                        , editor: {xtype: 'textfield'}
            }, {
                header: _('orderprint_document_caption_description')
                        , dataIndex: 'description'
                        , sortable: false
                        , width: 350
                        , editor: {xtype: 'textfield'}
            }, {
                header: _('orderprint_document_caption_chunk1')
                        , dataIndex: 'chunk1'
                        , sortable: false
                        , width: 130
                        , editor: {xtype: 'textfield'}
            }, {
                header: _('orderprint_document_caption_chunk2')
                        , dataIndex: 'chunk2'
                        , sortable: false
                        , width: 130
                        , editor: {xtype: 'textfield'}
            }, {
                header: _('orderprint_document_caption_available_for_front')
                        , dataIndex: 'available_for_front'
                        , sortable: false
                        , width: 130
                        , editor: {xtype: 'combo-boolean', renderer: 'boolean'}
            }, {
                header: _('orderprint_document_caption_orientation')
                        , dataIndex: 'orientation'
                        , sortable: false
                        , width: 130
                        , editor: {xtype: 'combo-boolean', renderer: 'boolean'}
            }, {
                header: _('orderprint_document_caption_margins')
                        , dataIndex: 'margins'
                        , sortable: false
                        , width: 130
                        , editor: {xtype: 'textfield'}
            }
        ]
                , tbar: [
            {
                text: _('orderprint_document_create')
                        , handler: {xtype: 'orderprint-window-document-create', blankValues: true}
            }
        ]
    });
    Orderprint.grid.Documents.superclass.constructor.call(this, config)
};
Ext.extend(Orderprint.grid.Documents, MODx.grid.Grid, {
    getMenu: function() {
        var m = [{
                text: _('orderprint_document_update')
                        , handler: this.updateDocument
            }, '-', {
                text: _('orderprint_document_remove')
                        , handler: this.removeDocument
            }];
        this.addContextMenuItem(m);
        return true;
    }
    , updateDocument: function(btn, e) {
        if (!this.updateDocumentWindow) {
            this.updateDocumentWindow = MODx.load({
                xtype: 'orderprint-window-document-update'
                        , record: this.menu.record
                        , listeners: {
                    'success': {fn: this.refresh, scope: this}
                }
            });
        }
        
        this.updateDocumentWindow.setValues(this.menu.record);
        
        this.updateDocumentWindow.show(e.target);
    }

    , removeDocument: function() {
        MODx.msg.confirm({
            title: _('orderprint.document_remove')
                    , text: _('orderprint.Setting_remove_confirm')
                    , url: this.config.url
                    , params: {
                action: 'mgr/document/remove'
                        , id: this.menu.record.id
            }
            , listeners: {
                'success': {fn: this.refresh, scope: this}
            }
        });
    }
});
Ext.reg('orderprint-grid-documents', Orderprint.grid.Documents);


Orderprint.window.CreateDocument = function(config) {
    config = config || {};
    Ext.applyIf(config, {
        title: _('orderprint_document_create')
                , url: Orderprint.config.connectorUrl
                , baseParams: {
            action: 'mgr/document/create'
        }
        , fields: [
            {
                xtype: 'textfield'
                        , fieldLabel: _('orderprint_document_caption_name')
                        , name: 'name'
                        , width: 300
            }, {
                xtype: 'textarea'
                        , fieldLabel: _('orderprint_document_caption_description')
                        , name: 'description'
                        , width: 300
            }, {
                xtype: 'textfield'
                        , fieldLabel: _('orderprint_document_caption_chunk1')
                        , name: 'chunk1'
                        , width: 300
            }, {
                xtype: 'textfield'
                        , fieldLabel: _('orderprint_document_caption_chunk2')
                        , name: 'chunk2'
                        , width: 300
            }, {
                xtype: 'xcheckbox'
                        , fieldLabel: _('orderprint_document_caption_available_for_front')
                        , name: 'available_for_front'
                        , width: 300
            }
        ]
    });
    Orderprint.window.CreateDocument.superclass.constructor.call(this, config);
};
Ext.extend(Orderprint.window.CreateDocument, MODx.Window);
Ext.reg('orderprint-window-document-create', Orderprint.window.CreateDocument);


Orderprint.window.UpdateDocument = function(config) {
    config = config || {};
    Ext.applyIf(config, {
        title: _('orderprint_document_update')
                , url: Orderprint.config.connectorUrl
                , baseParams: {
            action: 'mgr/document/update'
        }
        , fields: [
            {
                xtype: 'hidden'
                        , name: 'id'
            }, {
                xtype: 'textfield'
                        , fieldLabel: _('orderprint_document_caption_name')
                        , name: 'name'
                        , width: 300
            }, {
                xtype: 'textarea'
                        , fieldLabel: _('orderprint_document_caption_description')
                        , name: 'description'
                        , width: 300
            }, {
                xtype: 'textfield'
                        , fieldLabel: _('orderprint_document_caption_chunk1')
                        , name: 'chunk1'
                        , width: 300
            }, {
                xtype: 'textfield'
                        , fieldLabel: _('orderprint_document_caption_chunk2')
                        , name: 'chunk2'
                        , width: 300
            }, {
                xtype: 'xcheckbox'
                        , fieldLabel: _('orderprint_document_caption_available_for_front')
                        , name: 'available_for_front'
                        , width: 300
            }
        ]
    });
    Orderprint.window.UpdateDocument.superclass.constructor.call(this, config);
};
Ext.extend(Orderprint.window.UpdateDocument, MODx.Window);
Ext.reg('orderprint-window-document-update', Orderprint.window.UpdateDocument);