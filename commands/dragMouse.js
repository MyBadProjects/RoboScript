const robotjs = require('robotjs')
module.exports = {
    name : "moveMouse",

    execute : function(Line) {
        var nums = `${Line}`.split(',')
        x = nums[0].replace(/\D/g,'')
        y = nums[1].replace(/\D/g,'')
        robotjs.dragMouse(x,y)
    }
}