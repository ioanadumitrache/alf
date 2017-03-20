/* Jison example file */
 
/* Tokens part */
%lex
 
%%
 
/* RegEx */
 
\s+                   /* skip whitespace */ 
[0-9]+("."[0-9]+)?  return 'NUMBER'; 
"-"                   return '-';
"+"                   return '+';
"*"                   return '*';
"/"                   return '/';

 
/lex
 
/* Grammar part, for this lab */
 
// when it is ambiguous, derive the left part
%left '+' '-'
// * and / have higher priority
%left '*' '/' 
 
%{
	// javascript code
        // use this to declare global  
        // javascript code that your parser uses
%}
 
%% 
 
start: expr { 
                 return $$; 
            };
 
expr: expr '+' expr	{ 
				console.log ('rule expr + expr'); 
				console.log ($1 + ' + ' + $3); 
			}
      | expr '-' expr 	{ 
      				console.log ('rule expr - expr');
      				console.log ($1 + ' - ' + $3); 
      			}
      | expr '*' expr	{ 
				console.log ('rule expr * expr'); 
				console.log ($1 + ' * ' + $3); 
			}
      | expr '/' expr 	{ 
      				console.log ('rule expr / expr');
      				console.log ($1 + ' / ' + $3); 
      			}
      | NUMBER 	{ 
	  		console.log ('rule NUMBER');
	  		console.log ('number '+$1); 
	  		$$ = $1; 
	  	};