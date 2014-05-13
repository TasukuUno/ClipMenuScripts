// custom action for ClipMenu
// insert Quotation mark(> ) at the begining of each line

return clipText.split('\n').map(function (line) {
  return '> ' + line;
}).join('\n');