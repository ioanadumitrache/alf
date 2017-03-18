"use strict";
 
// import the generated Parser
var Parser = require ('./number.js').Parser;
 
// use the lexer from the generated Parser
var lexer = new Parser ().lexer;
 
// add a text to the lexer
lexer.setInput ('2.322 + 5 - 6 * (2 + 3) ');
 
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