const robotjs = require('robotjs');
module.exports = {
    name : "doubleRightMouseClick",

    execute : function(Line) {
        robotjs.mouseClick('right', true);
    }
};