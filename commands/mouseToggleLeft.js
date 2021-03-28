const robotjs = require('robotjs');
module.exports = {
    name : "mouseToggleLeft",

    execute : function(Line) {
        if (`${Line}`.toLocaleLowerCase().endsWith('true')){
            robotjs.mouseToggle('up','left');
        } else if (`${Line}`.toLowerCase().endsWith('false')){
            robotjs.mouseToggle('down','left');
        } else {
            throw console.error('Invalid mode!');
        };
    }
};