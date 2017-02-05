/** My First IO **/

var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var string = buffer.toString("utf-8");
//console.log(string);
var arr = string.split('\n');
console.log(arr.length-1);
