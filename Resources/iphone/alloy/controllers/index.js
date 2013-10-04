function Controller() {
    function initArticles() {
        url = "https://getpocket.com/v3/get";
        var ajax = Ti.Network.createHTTPClient();
        ajax.onerror = function() {
            alert("Error");
        };
        ajax.onload = function() {
            var data = this.responseText;
            var jdata = JSON.parse(data);
            var articles = Alloy.createCollection("Article");
            articles.fetch();
            articles.map(function(article) {
                article.destroy();
            });
            for (var key in jdata.list) {
                var article = Alloy.createModel("Article", {
                    article_id: key,
                    url: jdata.list[key].resolved_url,
                    title: jdata.list[key].resolved_title,
                    excerpt: jdata.list[key].excerpt
                });
                article.save();
            }
            var articles = Alloy.createCollection("Article");
            articles.fetch();
            var row_data = [];
            articles.map(function(article) {
                var title = article.get("title");
                var url = article.get("url");
                var article_data = {
                    title: title,
                    url: url
                };
                var row = Alloy.createController("article_row", article_data).getView();
                row_data.push(row);
            });
            $.table.setData(row_data);
        };
        ajax.open("POST", url);
        ajax.send({
            consumer_key: "18945-f60a569d5c48b90f81b3a086",
            access_token: "a8e5702d-5a4b-815e-db54-831333"
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.listview = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "listview",
        title: "List"
    });
    $.__views.table = Ti.UI.createTableView({
        id: "table"
    });
    $.__views.listview.add($.__views.table);
    $.__views.root = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.listview,
        id: "root"
    });
    $.__views.root && $.addTopLevelView($.__views.root);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.CFG.root = $.root;
    initArticles();
    $.root.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;