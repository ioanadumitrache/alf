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
// add the token for the variable
[A-Za-z][A-Za-z0-9]*  return 'VARIABLE';
"-"                   return '-';
"+"                   return '+';
"*"                   return '*';
"/"                   return '/';
"("                   return '(';
")"	                  return ')';

 
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
 
expr:	'(' expr ')'	{
							// assign the value from the expression
							$$ = $2;
						}
	  | expr '+' expr	{ 
				if (typeof ($1) === 'number' && typeof ($3) === 'number')
				{
					$$ = $1 + $3;
				}
				else
				{
					$$ = 'variable';
				}
			}
      | expr '-' expr 	{
    				if (typeof ($1) === 'number' && typeof ($3) === 'number')
					{
      					$$ = $1 - $3;
      				}
      				else
      				{
      					$$ = 'variable';
      				}
      			}
      | expr '*' expr	{ 
    			if (typeof ($1) === 'number' && typeof ($3) === 'number')
				{
					$$ = $1 * $3;
				}
				else
				{
					$$ = 'variable';
				}
			}
      | expr '/' expr 	{
    				if (typeof ($1) === 'number' && typeof ($3) === 'number')
					{
      					$$ = $1 / $3;
      				}
      				else
      				{
      					$$ = 'variable';
      				}
      			}
      | NUMBER 	{ 
	  		// $1 is string so we store its float value
	  		$$ = parseFloat ($1); 
	  	}
	  | VARIABLE {
			// store the variable
	  		$$ = $1;
		};