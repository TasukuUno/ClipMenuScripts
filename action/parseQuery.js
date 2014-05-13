// custom action for ClipMenu
// parse query string of url

var result = [];
var query = '';

if (clipText.charAt(0) === '?') {
  query = clipText.substring(1);
} else if (clipText.indexOf('?') > -1) {
  var sp = clipText.split('?');
  result.push(sp.shift());
  query = sp.join('?');
} else if (clipText.indexOf('&') > -1) {
  query = clipText;
}

if (!query) {
  return clipText;
}

if (query) {
  var obj = {};
  query.split('&').forEach(function (item) {
    var idx = item.indexOf('=');
    var kv = [item.substring(0, idx), item.substring(idx + 1)];
    if (kv.length === 2) {
      obj[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]);
    }
  });
  if (Object.keys(obj).length > 0) {
    result.push(JSON.stringify(obj , '', 2));
  }
}

return result.join('\n');
