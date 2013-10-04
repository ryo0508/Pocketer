function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Resources/app";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    Titanium.UI.setBackgroundColor("#000");
    var tabGroup = Titanium.UI.createTabGroup();
    var win1 = Titanium.UI.createWindow({
        title: "Tab 1",
        backgroundColor: "#fff"
    });
    var tab1 = Titanium.UI.createTab({
        icon: "KS_nav_views.png",
        title: "Tab 1",
        window: win1
    });
    var label1 = Titanium.UI.createLabel({
        color: "#999",
        text: "I am Window 1",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        width: "auto"
    });
    win1.add(label1);
    var win2 = Titanium.UI.createWindow({
        title: "Tab 2",
        backgroundColor: "#fff"
    });
    var tab2 = Titanium.UI.createTab({
        icon: "KS_nav_ui.png",
        title: "Tab 2",
        window: win2
    });
    var label2 = Titanium.UI.createLabel({
        color: "#999",
        text: "I am Window 2",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        width: "auto"
    });
    win2.add(label2);
    tabGroup.addTab(tab1);
    tabGroup.addTab(tab2);
    tabGroup.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;