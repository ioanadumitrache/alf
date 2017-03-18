/* Jison example file - to build this use jison exercise8.js -o student.js 
this will generate the lexer in number.js
you can use it by importing number.js with require */
 
/* Tokens part */
%lex
 
%%
 
/* RegEx             return of lexer.next () */
 
[' '|\t]+                   /* skip whitespace that is space and tabs, if we use \s we cannot receive the new line (\s includes new line) - this comment needs to be here if there is no action */ 
[0-9]+                return 'ID';
([A-Za-z]+\.)+        return 'INITIAL'; // this needs to be before the NAME
[A-Za-z]+             return 'NAME';
\-                    return 'MINUS';
\;                    return 'SEMICOLUMN';
\r?\n                 return 'NEWLINE';
<<EOF>>               return 'EOF';  // end of file
 
/lex
 
/* Grammar part, for this lab, just use it like this */
 
%% 
 
start:;