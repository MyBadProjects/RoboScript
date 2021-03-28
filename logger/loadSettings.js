/*
    RoboScript Logger
        - Load Settings

    Made by MyBadProjects
*/

const fs = require('fs')
const ini = require('ini')

/* Exports */
    /* JSON */
module.exports.json = {}
        /* Writer */
module.exports.json.writer = {}
module.exports.json.writer.string = {}
module.exports.json.writer.string.writeFile = function(String, Path) {
    fs.writeFileSync(Path, String, function(err) {
        if (err) throw err
    })
}
module.exports.json.writer.json = {}
module.exports.json.writer.json.writeFile = function(JSONData, Path) {
    fs.writeFileSync(Path, JSON.stringify(JSONData), function(err) {
        if (err) throw err
    })
}
        /* Reader */
module.exports.json.reader = {}
module.exports.json.reader.readFile = function(Path) {
    jsonData = fs.readFileSync(Path, function (err) {
        if (err) throw err
    })
    return JSON.parse(jsonData)
}
module.exports.json.reader.readString = function(Path) {
    jsonData = JSON.parse(Path)
    return jsonData
}
    /* INI */
module.exports.ini = {}
        /* Writer */
module.exports.ini.writer = {}
module.exports.ini.writer.string = {}
module.exports.ini.writer.string.writeFile = function(String, Path) {
    fs.writeFileSync(Path, String, function(err) {
        if (err) throw err
    })
}
module.exports.ini.writer.ini = {}
module.exports.ini.writer.ini.writeFile = function(INIData, Path) {
    fs.writeFileSync(Path, ini.stringify(INIData), function(err) {
        if (err) throw err
    })
}

        /* Reader */
module.exports.ini.reader = {}
module.exports.ini.reader.readFile = function(Path) {
    iniData = fs.readFileSync(Path, function (err) {
        if (err) throw err
    })
    return ini.parse(`${iniData}`)
}
module.exports.ini.reader.readString = function(String) {
    iniData = String
    return ini.parse(`${iniData}`)
}