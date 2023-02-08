//npm packages are loaded in by putting the name in the string passed through require
//downloaded library chalk
const chalk = require('chalk')
const { demandOption } = require('yargs')
//loads in yargs library
const yargs = require('yargs')

//require here is loading in another file, aka notes.js
const notes = require('./notes.js')

//installed yargs to access raw arguements tha tsets up commands and arguements
// console.log(process.argv)

//customize yargs version
yargs.version('1.1.0')

//create add command that adds notes
yargs.command({
    command: "add",
    describe: "add a new note",
    //property configuring title of note trying to read
    builder: {
        title: {
            desribe: 'Note title',
            //requires note to have a title
            demandOption: true,
            //config saying note is string value
            type: 'string'

        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
       notes.addNote(argv.title, argv.body)
    }
})

//create remove command that can remove notes
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    //specifies decription, required, and type for title
    builder: {
        title:{
            describe: 'Note title',
            demandOptions: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'list your notes',
    handler(){
        //calling function exported from notes.js
        notes.listNotes()
    }
})

//creates read command 
yargs.command({
    command: 'read',
    describe: 'read a note',
    //specifies decription, required, and type for title
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    //calling the read note function
    handler(argv){
        notes.readNote(argv.title)
        
    }
})
console.log(yargs.argv)

// const command = process.argv[2]
// //checks to see if user is adding new note and runs the needed code to create it and save it
// if (command === 'add'){
//     console.log('Adding notes')
//     //allows user to remove note
// } else if (command === 'remove'){
//     console.log('removing note')
// }












