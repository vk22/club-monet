var Orderprint = function(config) {
    config = config || {};
    Orderprint.superclass.constructor.call(this,config);
};
Ext.extend(Orderprint,Ext.Component,{
    page:{},window:{},grid:{},tree:{},panel:{},combo:{},config: {}
});
Ext.reg('orderprint',Orderprint);

Orderprint = new Orderprint();