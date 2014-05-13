// custom action for ClipMenu
// insert idx at the begining of each line

var lines = clipText.split('\n');
var digit = ('' + lines.length).length;
var num = digit;
var spaces = '';

while (num > 0) {
  spaces = ' ' + spaces;
  num--;
}

return lines.map(function (line, i) {
  return (spaces + (i + 1)).substr(-digit, digit) + '. ' + line;
}).join('\n');