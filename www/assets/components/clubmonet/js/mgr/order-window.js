(function () {
    'use strict';

    if (typeof miniShop2 === 'undefined' || !miniShop2.window || !miniShop2.window.UpdateOrder) {
        return;
    }

    var originalGetOrderFields = miniShop2.window.UpdateOrder.prototype.getOrderFields;

    miniShop2.window.UpdateOrder.prototype.getOrderFields = function (config) {
        var fields = originalGetOrderFields.call(this, config);

        function customize(items) {
            if (!items) {
                return;
            }

            for (var i = items.length - 1; i >= 0; i--) {
                var field = items[i];

                if (field.name === 'delivery_cost') {
                    field.xtype = 'numberfield';
                } else if (field.name === 'weight') {
                    field.xtype = 'textfield';
                    field.name = 'comment';
                    field.fieldLabel = _('ms2_delivery_tracking');
                } else if (field.name === 'comment' && field.xtype === 'textarea') {
                    items.splice(i, 1);
                    continue;
                }

                customize(field.items);
            }
        }

        customize(fields);
        return fields;
    };
})();
