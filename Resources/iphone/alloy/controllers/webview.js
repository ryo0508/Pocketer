function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "webview";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.webview_window = Ti.UI.createWindow({
        id: "webview_window",
        touchEnabled: "true"
    });
    $.__views.webview_window && $.addTopLevelView($.__views.webview_window);
    $.__views.more_info = Ti.UI.createWebView({
        id: "more_info",
        willHandleTouches: "false"
    });
    $.__views.webview_window.add($.__views.more_info);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.more_info.url = args.url;
    $.more_info.addEventListener("click", function() {
        Titanium.API.info("higehige");
        $.webview_window.close();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;