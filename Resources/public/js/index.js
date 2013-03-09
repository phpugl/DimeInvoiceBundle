'use strict';

/**
 * Dime - index.js
 */
(function ($, Backbone, _, App) {

    App.menu.add({
        id:"invoice",
        title:"Invoice",
        url:"invoice",
        weight: 0,
        callback:function () {
            App.menu.activateItem('invoice');
            App.router.switchView(new App.Views.Invoice.Index());
        }
    });
})(jQuery, Backbone, _, Dime);
