const fs = require('fs')
const chalk = require('chalk')


//defining a function that later gets called in app.js
const addNote = (title, body) => {
    //loaded the notes
    const notes = loadNotes()
    //checks for duplicate note titles and filter keeps the notes we want to keep
    const duplicatedNote = notes.find((note) => note.title === title)
    
    //built in node debugger accessed through chrome browser
    //debugger

    //condition for if there are not duplicated notes
    if (!duplicatedNote){
    //pushed duplicated to new variable
    notes.push({
        title: title,
        body: body
    })
    //saved notes
    savedNotes(notes)
    console.log(chalk.green.inverse('New note added'))
    }  else {
        console.log(chalk.red.inverse('Note title taken'))
    }
    
}



//created and exported function from note.js
const removeNote = (title) => {
    const notes = loadNotes()
    //finds notes we want to keep
    const notesToKeep = notes.filter((note) => note.title !== title
    )
//figuring out if a note was removed or not by comparing lengths
//lets user know if note was removed or not
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Not removed'))

    } else {
        console.log(chalk.red.inverse('No note found'))
    }


    savedNotes(notesToKeep)

}
//creating a function that lists notes
const listNotes= () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))
    //function ran for each note with individual note object
    notes.forEach((note) => {
        console.log(note.title)
    })

}

const readNote = (title) => {
    //variable that holds loaded notes
    const notes = loadNotes()
    //a function that gets called one time for every item in array until a match is found
    const note = notes.find((note) => note.title === title)
//references the note variable and prints if there is a note or...
    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
//..print an error
    } else{
        console.log(chalk.red.inverse('Note not found'))

    }

}

const savedNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}

const loadNotes = () => {
    //defensive code for if file doesn't exist
    try{
    //imports data
    const dataBuffer = fs.readFileSync('notes.json')
    //puts data in a string
    const dataJSON = dataBuffer.toString()
    //parses data
    return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
    
    
 
}

//exporting objects to be used in another file
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}