const robotjs = require('robotjs')
module.exports = {
    name : "doubleMiddleMouseClick",

    execute : function(Line) {
        robotjs.mouseClick('middle', true)
    }
}