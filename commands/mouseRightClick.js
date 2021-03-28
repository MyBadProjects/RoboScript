const robotjs = require('robotjs');
module.exports = {
    name : "mouseRightClick",

    execute : function(Line) {
        robotjs.mouseClick('right');
    }
};