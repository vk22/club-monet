var counterPro = function (config) {
    config = config || {};
    counterPro.superclass.constructor.call(this, config);
};
Ext.extend(counterPro, Ext.Component, {
    page: {}, window: {}, grid: {}, tree: {}, panel: {}, combo: {}, config: {}, view: {}, utils: {}
});
Ext.reg('counterpro', counterPro);

counterPro = new counterPro();