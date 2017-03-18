"use strict";
 
var fs = require ('fs');
 
// import the generated Parser
var Parser = require ('./student.js').Parser;
 
// use the lexer from the generated Parser
var lexer = new Parser ().lexer;

// load the students file
var studentString = fs.readFileSync('fils_1220f.csv', 'UTF-8');

// add the file's text to the lexer
lexer.setInput (studentString);
 
var s = null;
 
var tokens = [];
 
// repeat while you get an EOF token
do 
{
    try
    {
        // get the next token
        s = lexer.next ();
    }
    catch (e)
    {
        // if there is an error
        // print the line number (lexer.yylineno+1)
        // print the error position (lexer.showPosition ())
        console.log ('Error line '+(lexer.yylineno+1)+'\n'+lexer.showPosition());
    }
    if (s && s!== lexer.EOF)
    {
        // print the token (s)
        // print the token text (lexer.yytext)
        console.log (s+' '+lexer.yytext);
        // add them to an array
        tokens.push ({type: s, value: lexer.yytext});
    }
} while (s !== lexer.EOF); 
 
console.log (tokens);