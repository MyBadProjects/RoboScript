const robotjs = require('robotjs');
module.exports = {
    name : "mouseMiddleClick",

    execute : function(Line) {
        robotjs.mouseClick('middle');
    }
};