const fs = require("fs");

const test = fs.readFileSync('./test.txt',"utf-8");

console.log(test);