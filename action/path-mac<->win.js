// custom action for ClipMenu
// convert file server path of mac and windows
 
var isWin = clipText.indexOf('\\') > -1;
var isMac = clipText.indexOf('/') > -1;
 
if (isWin) {
  clipText = clipText.replace(/\\/g, '/');
  clipText = 'smb:' + clipText;
} else if (isMac) {
  clipText = clipText.replace(/^smb:\/\//, '\\\\');
  clipText = clipText.replace(/\//g, '\\');
}
 
return clipText;