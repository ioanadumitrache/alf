/* Jison example file - to build this use jison exercise7.js -o number.js 
this will generate the lexer in number.js
you can use it by importing number.js with require */
 
/* Tokens part */
%lex
 
%%
 
/* RegEx             return of lexer.next () */
 
\s+                   /* skip whitespace - this comment needs to be here if there is no action */ 
\-?[0-9]+(\.[0-9]+)?  return 'NUMBER'; 
\+                    return '+';
\-                    return '-';
\*                    return '*';
\/                    return '/';
\(                    return '(';
\)                    return ')';
<<EOF>>               return 'EOF';  // end of file
 
/lex
 
/* Grammar part, for this lab, just use it like this */
 
%% 
 
start:;