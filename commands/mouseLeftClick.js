const robotjs = require('robotjs');
module.exports = {
    name : "mouseLeftClick",

    execute : function(Line) {
        robotjs.mouseClick('left');
    }
};