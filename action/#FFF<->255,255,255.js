// custom action for ClipMenu
// convert color codes
var r3hex = /^#?[0-9a-fA-f]{3}$/;
var r6hex = /^#?[0-9a-fA-f]{6}$/;

// こちらの正規表現はこの記事を参考にさせて頂きました。
// http://qiita.com/kubosho_/items/eb7ee54c78146eb26565
var rRGB = /^((2[0-4]\d|25[0-5]|1\d{1,2}|[1-9]\d|\d)( ?, ?)){2}(2[0-4]\d|25[0-5]|1\d{1,2}|[1-9]\d|\d)/;

if (r3hex.test(clipText)) {
  clipText = clipText.replace(/#/, '');
  return toRGB(clipText.split(''));
} else if (r6hex.test(clipText)) {
  clipText = clipText.replace(/#/, '');
  return toRGB(clipText.match(/.{2}/g));
} else if (rRGB.test(clipText)) {
  return toHex(clipText.match(/\d{1,3}/g));
} else {
  return clipText;
}

function toRGB (arr){
  var result = arr.map(function (str) {
    if (str.length === 1) str += str;
    return parseInt(str, 16);
  });
  return result.join(', ');
}

function toHex (arr) {
  var result = arr.map(function (str) {
    var num = Number(str);
    if (num > 255) num = 255;
    var hex = num.toString(16);
    return hex.length === 1 ? 0 + hex : hex;
  });
  return '#' + result.join('');
}