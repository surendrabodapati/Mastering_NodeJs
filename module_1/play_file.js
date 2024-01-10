const fs = require('fs')

// reading a file

let fileContent = fs.readFileSync('sample.txt')

console.log('Printing the content of the file : '+fileContent)


//appending into the file sample from content file

let appendContent = fs.readFileSync('content.txt')+'\n'

fs.appendFileSync('sample.txt',appendContent)

console.log('Now displaying the updated file data : '+fs.readFileSync('sample.txt'))