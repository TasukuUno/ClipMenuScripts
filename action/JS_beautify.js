// custom action for ClipMenu
// beautify JS
// @require ../lib/JsDecoder.js

/*global
JsDecoder
*/

var JsDecoderLoaded = ClipMenu.require('JsDecoder');
if (!JsDecoderLoaded) {
    return clipText;
}

var decoder = new JsDecoder();
decoder.s = clipText;
try {
  return decoder.decode();
} catch (e) {
  return clipText;
}

