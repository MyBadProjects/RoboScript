const robotjs = require('robotjs')
module.exports = {
    name : "mouseToggleRight",

    execute : function(Line) {
        if (`${Line}`.toLocaleLowerCase().endsWith('true')){
            robotjs.mouseToggle('up','right')
        } else if (`${Line}`.toLowerCase().endsWith('false')){
            robotjs.mouseToggle('down','right')
        } else {
            console.error('Invalid mode!')
        }
    }
}