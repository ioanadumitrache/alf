"use strict";
 
// import the generated Parser
var parser = require ('./expression2.js').parser;
 
// add a text to the parser
try
{
        // run the parser using a string
	parser.parse ('2.322+3-4+6*5/3+7');
}
catch (e)
{
        // display the error message and data
	console.log (e.message);
	console.log (e.hash);
}