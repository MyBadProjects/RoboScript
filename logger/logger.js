/*
    RoboScript Logger

    Made by MyBadProjects
*/

const process = require('process')
const fs = require('fs')
const loadSettings = require('./loadSettings')

/* Logger 
    Please note that this is based off my package '@mybadprojects/easyconsolelog'
    If you want to use that logger check it out on NPM or GitHub
*/
    /* Variables */
logsLocationToSave = "logs.log".replace('%(time)s', Date.now())
logsLevel = 1
logsLevelWarns = ["Log:\n","Warning:\n","ERROR:\n     "]
logs = ""
_cLog = true

    /* Load Settings */
var ReadSettings = loadSettings.ini.reader.readFile('logger/settings/settings.roboset')
logsLocationToSave = ReadSettings.log.settings.name.replace('%(time)s', Date.now())
logsLevel = ReadSettings.log.settings.level
logsLevelWarns = [
    ReadSettings.log.output.log,
    ReadSettings.log.output.warn,
    ReadSettings.log.output.error
]
console.log(logsLocationToSave)

    /* Functions */
        /* Call Log 
            This adds the input to the logs
        */
function callLog(String, Level) {
    /* Check if level > required level */
    if (Level >= logsLevel) {
        /*  Add to logs */
        if (logs != "") {
            logs += `\n${logsLevelWarns[Level-1]+String}`
        } else {
            logs += logsLevelWarns[Level-1]+String
        }
    }
    
    /* Autosave logs */
    fs.writeFile(logsLocationToSave, logs, 'utf8', function (e) {
        if (e) return console.log(e)
    })
}
            /* Write Text
                This displays the text as a replacement for console
            */
function writeText(InString, Level) {
    if(_cLog) {
        process.stdout.write(`${InString}`)
        _cLog=false
    } else {
        process.stdout.write('\n'+`${InString}`)
    }
}    

/* Redirections */
    /* 
        console.error() 
        Redirection 
    */
console.error = function(String) {
    writeText(String, 3)
    callLog(String, 3)   
}
    /* 
        console.warn() 
        Redirection 
    */
console.warn = function(String) {
    writeText(String, 2)
    callLog(String, 2)
}
    /* 
        console.log() 
        Redirection 
    */
console.log = function(String) {
    writeText(String, 1)
    callLog(String, 1)
}
    /* 
        console.print() 
        Creation 
    */
console.print = function(String) {
    writeText(String, 1)
    callLog(String, 1)
}
    /* 
        print() 
        Creation 
    */
print = function(String) {
    writeText(String, 1)
    callLog(String, 1)
}
        
        
/* Exported Redirections */
    /* Level 1s */
exports.print = function(String) {
    writeText(String, 1)
    callLog(String, 1)
}
exports.info = function(String) {
    writeText(String, 1)
    callLog(String, 1)
}
    /* Level 2s */
exports.warn = function(String) {
    writeText(String, 2)
    callLog(String, 2)
}
    /* Level 3s */
exports.error = function(String) {
    writeText(String, 3)
    callLog(String, 3)
}


/* Extras */
module.exports.extras = {}
module.exports.extras.loadExtraRedirections = function() {
    const redirections = require('./extras/redirections')
}