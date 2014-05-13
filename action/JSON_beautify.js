// custom action for ClipMenu
// beautify JSON

try{
    return JSON.stringify(JSON.parse(clipText), '', 2);
} catch(e) {
    return clipText;
}
