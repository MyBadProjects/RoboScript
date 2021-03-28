const robotjs = require('robotjs');
module.exports = {
    name : "mouseToggleMiddle",

    execute : function(Line) {
        if (`${Line}`.toLocaleLowerCase().endsWith('true')){
            robotjs.mouseToggle('up','middle');
        } else if (`${Line}`.toLowerCase().endsWith('false')){
            robotjs.mouseToggle('down','middle');
        } else {
            console.error('Invalid mode!');
        };
    }
};