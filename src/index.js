const func1 = require('./day1/exercise1.js');
const func2 = require('./day1/exercise2.js');
var fs = require('fs');

let data = fs.readFileSync(__dirname +'/day1/data.txt')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => parseInt(e.trim())) // remove white spaces for each line
    //.map(e => e.split(',')); // split each line to array

console.log(data);
// exercise 1
//let res = func1.SumCheck(data);
// exercise 2
let res = func2.SumCheckThree(data);
console.log(res);