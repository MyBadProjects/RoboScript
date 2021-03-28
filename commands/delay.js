const time = require('timers')
module.exports = {
    name : "delay",

    execute : function(Line) {
        time.setTimeout(function () {
        }, Number(`${Line}`.toLowerCase().replace('delay ', '')))
    }
}