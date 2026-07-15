Ext.onReady(function () {
    counterPro.config.connector_url = OfficeConfig.actionUrl;

    var grid = new counterPro.panel.Home();
    grid.render('office-counterpro-wrapper');

    var preloader = document.getElementById('office-preloader');
    if (preloader) {
        preloader.parentNode.removeChild(preloader);
    }
});