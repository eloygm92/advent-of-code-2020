const func = require('./day1/exercise1.js');
var fs = require('fs');

let data = fs.readFileSync(__dirname +'/day1/data.txt')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => parseInt(e.trim())) // remove white spaces for each line
    //.map(e => e.split(',')); // split each line to array

console.log(data);
let res = func.SumCheck(data);
console.log(res);