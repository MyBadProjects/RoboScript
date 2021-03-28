const screenShot = require('screenshot-desktop');
module.exports = {
    name: "screenShot",

    execute: function (Line) {
        `${Line}`.toLowerCase().replace('screenshot ','');
        screenShot({ 
            filename: `${`${Line}`.toLowerCase().replace('screenshot ','')}\\screen-capture-${Date.now()}.bmp` 
        });
    }
};