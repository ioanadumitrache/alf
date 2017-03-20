"use strict";
 
// import fs for reading 
var fs = require ('fs');
 
// import the generated Parser
var parser = require ('./expression4.js').parser;
 
var str = fs.readFileSync (process.argv[2], 'UTF-8');

// add a text to the parser
try
{
        // run the parser using a string, why are the values printed upside down?
	parser.parse (str);
}
catch (e)
{
        // display the error message and data
	console.log ('You have an error at line '+(e.hash.line+1)+' at position '+e.hash.loc.first_column);
	console.log (e.message);
}