if (OS_IOS || OS_MOBILEWEB) {
  Alloy.CFG.root = $.root;
}

function initArticles() {
  url = "https://getpocket.com/v3/get";
  var ajax = Ti.Network.createHTTPClient();
  ajax.onerror = function(e) {
    alert("Error");
  };
  ajax.onload = function(){
    var data = this.responseText;
    var jdata = JSON.parse(data);
    
    var articles = Alloy.createCollection("Article");
    articles.fetch();
    
    articles.map(function(article) {
      article.destroy();
    });
    
    for (var key in jdata.list) {
      var article = Alloy.createModel('Article', {
        article_id: key,
        url:   jdata.list[key].resolved_url,
        title: jdata.list[key].resolved_title,
        excerpt: jdata.list[key].excerpt
      });
      
      article.save();
    }
    // Titanium.API.info(jdata.list[0]);
    
    var articles = Alloy.createCollection("Article");
    articles.fetch();
    
    var row_data = [];
    
    articles.map(function(article) {
      
      var title = article.get("title");
      var url   = article.get("url");
      
      var article_data = {
        title: title,
        url:   url
      };
      
      // var row   = Ti.UI.createTableViewRow({"title": article.get("title") });
      
      var row = Alloy.createController('article_row', article_data).getView();
      
      row_data.push(row);  
    });
    
    $.table.setData(row_data);
  };
  
  ajax.open('POST', url);
  ajax.send({
    'consumer_key': '18945-f60a569d5c48b90f81b3a086',
    'access_token': 'a8e5702d-5a4b-815e-db54-831333' 
  });
}

initArticles();

$.root.open();
