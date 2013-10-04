exports.definition = {
	config: {
		columns: {
		    "article_id": "INTEGER",
		    "url": "TEXT",
		    "title": "TEXT",
		    "excerpt": "TEXT"
		},
		adapter: {
			type: "sql",
			collection_name: "Articles",
			"idAttribute":   "article_id"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};