// this javascript is to move all the files here into a specific directory so chill
const fs = require('fs')

// checking wheather that directory is present or not
let dirExistanceChecker = fs.existsSync('module_1')

if (dirExistanceChecker)
console.log('module_1 does exit')
else{
    let path = './module_1'
    console.log('The specified directory doesnt exists so creating it')
    fs.mkdirSync(path)
}

// try to move all the contents in current working directory to the specified directory.

