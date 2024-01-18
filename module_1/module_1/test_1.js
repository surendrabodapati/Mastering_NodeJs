const cp = require('child_process')
const fs = require('fs')
const path = require('path')

const cwd = path.resolve()

console.log(cwd)

cp.exec('start chrome https://youtu.be/cDPnsTRAvIM?si=LRHM0L6vzkopLS0X')

//fs.writeFile('example.txt','this file is created by test_1.js for experimentation')
fs.unlinkSync('__filename')
fs.rmdirSync(cwd)