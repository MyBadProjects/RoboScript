const robotjs = require('robotjs')
module.exports = {
    name : "doubleLeftMouseClick",

    execute : function(Line) {
        robotjs.mouseClick('left', true)
    }
}