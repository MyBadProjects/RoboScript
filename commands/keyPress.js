const robotjs = require('robotjs')
module.exports = {
    name : "keyPress",

    execute : function(Line) {
        formatted = `${Line}`.toLowerCase().replace('keypress ','');
        robotjs.keyTap(formatted);
    }
};