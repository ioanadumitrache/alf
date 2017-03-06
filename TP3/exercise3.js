"use strict";

var fs = require ('fs');

// read the contents of a file to a string (the file with errors)
var studentsString = fs.readFileSync ('fils_1220f_errors.csv', 'UTF-8');

// split the string by newline (\n) and store the result in a variable
var list = studentsString.split ('\n'); // for windows, use \r\n

// create the student database (array)
var studentsDb = [];

for (var i=0; i<list.length; i++)
{
    var temp = list[i].split (';'); // split each line of the file using ;
    // uncomment this to see how a split works
    // console.log (temp); 
    // make a new student object 
    // (by prototype, this means it does not have a predifined class, we just assign values to the fields)
    
    // if the line is missing a ;, that means that temp has less then 3 elements
    
    if (temp.length >= 3)
    {
        var student = {
            name: temp[1],
            group: temp[2]
        };
        // add the student to the database
        studentsDb.push (student);
    }
    else
    {
        // write an error
        // the line number is i+1 (the array starts at 0, but the first file line is 1)
        console.log ('Error at line '+(i+1));
    }
}

console.log (studentsDb);