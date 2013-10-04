exports.definition = {
    config: {
        columns: {
            article_id: "INTEGER",
            url: "TEXT",
            title: "TEXT",
            excerpt: "TEXT"
        },
        adapter: {
            type: "sql",
            collection_name: "Articles",
            idAttribute: "article_id"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("Article", exports.definition, []);

collection = Alloy.C("Article", exports.definition, model);

exports.Model = model;

exports.Collection = collection;