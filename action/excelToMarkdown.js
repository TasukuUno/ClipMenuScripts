// custom action for ClipMenu
// convert excel to markdown

var lines = clipText.split('\r'); 
var header = lines.shift().split('\t');
var border = makeBorder();
var result = [];
var sep = ' | ';

result.push(addSideBar(header.join(sep)));
result.push(addSideBar(border.join(sep)));

if (lines.length > 0) {
  result = result.concat(lines.map(function (line) {
    var columns = line.split('\t');
    return addSideBar(columns.join(sep));
  }));
}

function addSideBar(txt) {
  return '| ' + txt + ' |';
}

function makeBorder() {
  return header.map(function () {
    return '---';
  });
}

return result.join('\n');