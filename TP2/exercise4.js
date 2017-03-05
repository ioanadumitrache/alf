"use strict";

// Exercise 4

var fs = require ('fs'); // import the fs module that contains the file reading functions

// function for reading a file
function readfile (filename)
{
    var filedata = null;
    try
    {
        filedata = fs.readFileSync (filename, 'UTF-8'); // read a file with UTF-8 (text) encoding
    }
    catch (e)
    {
        console.error (e);
        filedata = null; // this is redundant, as filedata is aleady null
    }
    return filedata;
}

// process.argv[2] is the first parameter
// process.argv[0] is the node executable
// process.argv[1] is the name of the file with this script
// run this with node exercise4.js somefile.txt
console.log (readfile (process.argv[2])); 
