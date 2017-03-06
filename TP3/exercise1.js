"use strict";

var fs = require ('fs');

// read the contents of a file to a string
var studentsString = fs.readFileSync ('fils_1220f.csv', 'UTF-8');

// split the string by newline (\n) and store the result in a variable
var list = studentsString.split ('\n'); // for windows, use \r\n

console.log (list);