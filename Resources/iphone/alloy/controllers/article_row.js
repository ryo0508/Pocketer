function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "article_row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.article_row = Ti.UI.createTableViewRow({
        id: "article_row"
    });
    $.__views.article_row && $.addTopLevelView($.__views.article_row);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.article_row.addEventListener("click", function() {
        var next_page = Alloy.createController("webview", {
            url: args.url
        });
        next_page.webview_window.setTitle("hello");
        Alloy.CFG.root.openWindow(next_page.getView());
    });
    $.article_row.title = args.title;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;