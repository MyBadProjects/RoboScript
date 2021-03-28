const robotjs = require('robotjs')
module.exports = {
    name : "keyWrite",

    execute : function(Line) {
        // Format
        formatted = `${Line}`.substring(
            `${Line}`.length
            -
            `${Line}`.toLowerCase().replace('keywrite ','').length
            )
        robotjs.typeString(formatted)
    }
}