// this file we see how asynchronous code is being serialized, just connect the call back function in the serial manner it will do

const fs = require('fs')

console.log('Before reading file')

fs.readFile('file.txt',async1)

function async1(err, data1)
{
console.log("Data in file one "+data1)
fs.readFile('file2.txt',async2)
}



function async2(err, data2){
console.log("Data in file two "+data2)
fs.readFile('file3.txt', async3)
}


function async3(err, data)
{
    console.log('Data in file three '+data)
}

console.log('After reading')