// day 1
//const func1 = require('./day1/exercise1.js');
//const func2 = require('./day1/exercise2.js');

// day 2
//const func1 = require('./day2/exercise1.js');
//const func2 = require('./day2/exercise2.js');

// day 3
const func1 = require('./day3/exercise1.js');
//const func2 = require('./day2/exercise2.js');


var fs = require('fs');

/*let data = fs.readFileSync(__dirname +'/day1/data.txt')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => parseInt(e.trim())) // remove white spaces for each line
    //.map(e => e.split(',')); // split each line to array
*/
/*let data = fs.readFileSync(__dirname+'/day2/data.txt')
    .toString().split('\n').map(e => e.trim());
console.log(data);*/

let data = fs.readFileSync(__dirname +'/day3/data.txt')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line
    //.map(e => e.split(',')); // split each line to array
console.log(data);
//day 1
// exercise 1
//let res = func1.SumCheck(data);
// exercise 2
//let res = func2.SumCheckThree(data);

//day 2
//let res = func1.CheckPassword(data)
//let res = func2.CheckPasswordTwo(data)

//day 3
let res = func1.countTree(data)
//let res = func2.CheckPasswordTwo(data)




console.log(res);