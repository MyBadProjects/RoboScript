/*
    RoboScript

    This is a basic scripting language. It controls the mouse and keyboard and has the ability of most stuff from chalk.

    Made by MyBadProjects
*/

// Load requires
const process = require('process')
const readline = require('readline')
const fs = require('fs')
const path = require('path')
const logger = require('./logger/logger')

// Redefine print
print = console.log
console.log('test')

// Load commands into array
var commands = []

    // Get files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

    // Go through files
for (const file of commandFiles) {
        // Check if the file is javascript
    var processFile = false
    if (path.extname(file).toLowerCase()=='.js') {
        processFile = true
    }
    
    if (processFile) {
            // Require file
        const command = require(`./commands/${file}`)

            // Push file into array
        commands.push(command)
    }
}

console.print(commands)

// Ask for script location
var rl = readline.createInterface({input:process.stdin,output:process.stdout})
rl.question('Where is the script located which you want to run? ', function(Answer) {
    // Process file extension
    var fileExtension = path.extname(Answer)
    var correctScript = false
    const JSONdata = require('./data/data.json')

        // Go through all file extension to try and validate file
    JSONdata.fileExtensions.forEach(fE => {
            // Check if the file extension match
        if (`${fE}`.toLowerCase()==fileExtension.toLowerCase()) {
            correctScript =  true
        }
    })

    // Read script
    readScript(Answer)

    // Close question ('rl')
    rl.close()
})

// Read script
function readScript(ScriptLocation) {
        // Open & read input
    var lineReader = readline.createInterface({
        input: fs.createReadStream(ScriptLocation)
    });
      
        // Read lines, line by line
    lineReader.on('line', function (line) {
        processLine(line)
    });
}

// Process line
function processLine(Line, i) {
    commands.forEach(element => {
        if (!`${Line}`.startsWith('//')) {
            if ((!`${Line}`.startsWith('#')) && `${Line}`.toLowerCase().startsWith(`${element.name}`.toLowerCase())) {
                try {
                    element.execute(Line)
                } catch (err) {
                    console.error(`An error occured whilst executing: ${Line}`)
                    console.error(err)
                }
            }    
        }
    });
}