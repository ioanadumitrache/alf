"use strict";

// Exercise 3

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

console.log (readfile ('somefile.txt'));
