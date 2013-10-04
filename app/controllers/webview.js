var args = arguments[0] || {};

$.more_info.url = args.url;

$.more_info.addEventListener('click', function() {
  Titanium.API.info("higehige");
  
  $.webview_window.close();
});