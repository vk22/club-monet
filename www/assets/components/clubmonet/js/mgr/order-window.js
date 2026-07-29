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

    if (!miniShop2.grid || !miniShop2.grid.Orders || !miniShop2.utils) {
        return;
    }

    var documents = window.ClubMonetOrderPrintDocuments || [];

    miniShop2.grid.Orders.prototype.printOrderDocument = function (btn, event) {
        var orderId = this.menu && this.menu.record ? this.menu.record.id : 0;
        if (!orderId) {
            return;
        }

        var openDocument = function (documentId) {
            window.open(
                MODx.config.site_url
                    + 'assets/components/orderprint/pdf/index.php?recordid='
                    + encodeURIComponent(orderId)
                    + '&docid='
                    + encodeURIComponent(documentId),
                'orderPrintWindow',
                'width=800,height=700,menubar=0,location=no,resizable=yes,scrollbars=yes'
            );
        };

        var showDocumentMenu = function () {
            if (!documents.length) {
                MODx.msg.alert('Печать накладной', 'Не найдено ни одного шаблона документа.');
                return;
            }

            var items = [];
            for (var i = 0; i < documents.length; i++) {
                items.push({
                    text: documents[i].name,
                    documentId: documents[i].id,
                    handler: function (item) {
                        openDocument(item.documentId);
                    }
                });
            }

            new Ext.menu.Menu({items: items}).showAt(event.getXY());
        };

        if (documents.length) {
            if (documents.length === 1) {
                openDocument(documents[0].id);
            } else {
                showDocumentMenu();
            }
            return;
        }

        MODx.Ajax.request({
            url: MODx.config.assets_url + 'components/orderprint/connector.php',
            params: {
                action: 'mgr/document/getList',
                limit: 0
            },
            listeners: {
                success: {
                    fn: function (response) {
                        documents = response.results || response.object || [];
                        showDocumentMenu();
                    }
                },
                failure: {
                    fn: function (response) {
                        MODx.msg.alert(
                            'Печать накладной',
                            response.message || 'Не удалось загрузить шаблоны документов.'
                        );
                    }
                }
            }
        });
    };

    var originalRenderActions = miniShop2.utils.renderActions;
    miniShop2.utils.renderActions = function (value, props, row) {
        var actions = row.data.actions || [];
        var hasPrintAction = false;

        for (var i = 0; i < actions.length; i++) {
            if (actions[i].action === 'printOrderDocument') {
                hasPrintAction = true;
                break;
            }
        }

        if (!hasPrintAction) {
            actions = actions.slice(0);
            actions.splice(Math.max(actions.length - 1, 0), 0, {
                button: true,
                action: 'printOrderDocument',
                icon: 'icon icon-print',
                title: 'Печать накладной'
            });
            row.data.actions = actions;
        }

        return originalRenderActions(value, props, row);
    };

    var originalGetColumns = miniShop2.grid.Orders.prototype.getColumns;
    miniShop2.grid.Orders.prototype.getColumns = function () {
        var columns = originalGetColumns.call(this);
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].dataIndex === 'actions') {
                columns[i].width = Math.max(columns[i].width || 0, 100);
                break;
            }
        }
        return columns;
    };
})();
