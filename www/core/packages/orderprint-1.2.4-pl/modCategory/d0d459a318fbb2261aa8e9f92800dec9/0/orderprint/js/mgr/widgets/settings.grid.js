Orderprint.grid.Settings = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        id: 'orderprint-grid-settings'
        ,url: Orderprint.config.connectorUrl
        ,baseParams: { action: 'mgr/setting/getList' }
        ,save_action: 'mgr/setting/updatefromgrid'
        ,fields: ['id','name','value','description']
        ,paging: true
        ,autosave: true
        ,remoteSort: true
        ,anchor: '97%'
        ,autoExpandColumn: 'name'
        ,columns: [{
            header: _('id')
            ,dataIndex: 'id'
            ,sortable: true
            ,width: 30
        },{
            header: _('orderprint_setting_caption_name')
            ,dataIndex: 'name'
            ,sortable: true
            ,width: 120
        },{
            header: _('orderprint_setting_caption_value')
            ,dataIndex: 'value'
            ,sortable: true
            ,width: 150
            ,editor: { xtype: 'textfield' }
        },{
            header: _('orderprint_setting_caption_description')
            ,dataIndex: 'description'
            ,sortable: false
            ,width: 350
            ,editor: { xtype: 'textfield' }
        }]
        ,tbar: [{
            text: _('orderprint_setting_create')
            ,handler: { xtype: 'orderprint-window-setting-create' ,blankValues: true }
        }]
    });
    Orderprint.grid.Settings.superclass.constructor.call(this,config)
};
Ext.extend(Orderprint.grid.Settings,MODx.grid.Grid,{
    getMenu: function() {
        var m = [{
            text: _('orderprint_setting_update')
            ,handler: this.updateSetting
        },'-',{
            text: _('orderprint_setting_remove')
            ,handler: this.removeSetting
        }];
        this.addContextMenuItem(m);
        return true;
    }
    ,updateSetting: function(btn,e) {
        if (!this.updateSettingWindow) {
            this.updateSettingWindow = MODx.load({
                xtype: 'orderprint-window-setting-update'
                ,record: this.menu.record
                ,listeners: {
                    'success': {fn:this.refresh,scope:this}
                }
            });
        } else {
            this.updateSettingWindow.setValues(this.menu.record);
        }
        this.updateSettingWindow.show(e.target);
    }

    ,removeSetting: function() {
        MODx.msg.confirm({
            title: _('orderprint_setting_remove')
            ,text: _('orderprint_setting_remove_confirm')
            ,url: this.config.url
            ,params: {
                action: 'mgr/setting/remove'
                ,id: this.menu.record.id
            }
            ,listeners: {
                'success': {fn:this.refresh,scope:this}
            }
        });
    }
});
Ext.reg('orderprint-grid-settings',Orderprint.grid.Settings);


Orderprint.window.CreateSetting = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        title: _('orderprint_setting_create')
        ,url: Orderprint.config.connectorUrl
        ,baseParams: {
            action: 'mgr/setting/create'
        }
        ,fields: [{
            xtype: 'textfield'
            ,fieldLabel: _('orderprint_setting_caption_name')
            ,name: 'name'
            ,width: 300
        },{
            xtype: 'textfield'
            ,fieldLabel: _('orderprint_setting_caption_value')
            ,name: 'value'
            ,width: 300
        },{
            xtype: 'textarea'
            ,fieldLabel: _('orderprint_setting_caption_description')
            ,name: 'description'
            ,width: 300
        }]
    });
    Orderprint.window.CreateSetting.superclass.constructor.call(this,config);
};
Ext.extend(Orderprint.window.CreateSetting,MODx.Window);
Ext.reg('orderprint-window-setting-create',Orderprint.window.CreateSetting);


Orderprint.window.UpdateSetting = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        title: _('orderprint_setting_update')
        ,url: Orderprint.config.connectorUrl
        ,baseParams: {
            action: 'mgr/setting/update'
        }
        ,fields: [{
            xtype: 'hidden'
            ,name: 'id'
        },{
            xtype: 'textfield'
            ,fieldLabel: _('orderprint_setting_value')
            ,name: 'value'
            ,width: 300
        },{
            xtype: 'textarea'
            ,fieldLabel: _('orderprint_setting_description')
            ,name: 'description'
            ,width: 300
        }]
    });
    Orderprint.window.UpdateSetting.superclass.constructor.call(this,config);
};
Ext.extend(Orderprint.window.UpdateSetting,MODx.Window);
Ext.reg('orderprint-window-setting-update',Orderprint.window.UpdateSetting);