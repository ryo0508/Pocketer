var args = arguments[0] || {};

$.article_row.addEventListener('click', function() { 
  var next_page = Alloy.createController('webview', {url: args.url});
  next_page.webview_window.setTitle("hello");
  Alloy.CFG.root.openWindow(next_page.getView());  
});

$.article_row.title = args.title;


