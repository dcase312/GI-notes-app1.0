const fs = require('fs')

// //created an object
// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Holiday"
// }
// //fs core module only knows how to work with string data so this converts it into string to get original object back
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)
// console.log(bookJSON)

// //takes in JSON string and gives back the object
// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

//reads data from file system
// const dataBuffer = fs.readFileSync('1-json.json')
// //turns data into a string 
// const dataJSON = dataBuffer.toString()
// //parses it into an object
// const data = JSON.parse(dataJSON)
// //accessed a property from it
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

//changes data
user.name = 'Deborah'
user.age = 23

//string-ify object and saves it
const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)

