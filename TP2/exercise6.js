"use strict";

// Exercise 6

// run in the shell
// make sure you have a package.json file
// npm install loadsh --save

// load the JSON file with students
var students = require ('./students.json'); 

// point a

students.sort (function (s1, s2)
{
    if (s1.name < s2.name) return -1; // s1 has an alphabetically name before s2
    else 
    if (s1.name === s2.name) return 0; // s1 has the same name as s2
    else
    return 1; // s1 has an alphabetically name after s2
});

console.log (students);

// point b

for (var i=0; i<students.length; i++)
{
    if (students[i].grade > 6)
    {
        console.log (students[i].name);
    }
}

