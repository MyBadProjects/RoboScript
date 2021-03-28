const screenShot = require('screenshot-desktop')
module.exports = {
    name: "screenShot",

    execute: function (Line) {
        // Create and save screen-shot
        screenShot({ 
            filename: `screen-capture-${Date.now()}.bmp` 
        })
    }
}
