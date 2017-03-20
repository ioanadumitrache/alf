/* Jison example file */
 
/* Tokens part */
%lex
 
%%
 
/* RegEx */
 
// add newline for Windows (\r\n) and Linux/Unix/Mac (\n)
\r?\n					return 'NEWLINE';
// \s includes \n space and tab, we need the NEWLINE token, so we put space and tab in white spacve
[ \t]                   /* skip whitespace */ 
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
 
start: expressions { 
                 return $$; 
            };
            
expressions: expr NEWLINE expressions	{
											// print the value of the expression
											console.log ($1);
										}
			| expr NEWLINE		{
									// print the value of the expression
									console.log ($1);
								}
			| expr	{
						// print the value of the expression
						console.log ($1);
					};
 
expr: expr '+' expr	{ 
				$$ = $1 + $3;
			}
      | expr '-' expr 	{ 
      				$$ = $1 - $3;
      			}
      | expr '*' expr	{ 
				$$ = $1 * $3;
			}
      | expr '/' expr 	{ 
      				$$ = $1 / $3;
      			}
      | NUMBER 	{ 
	  		// $1 is string so we store its float value
	  		$$ = parseFloat ($1); 
	  	};