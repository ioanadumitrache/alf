/* Jison example file */
 
/* Tokens part */
%lex
 
%%
 
/* RegEx */
 
// add newline for Windows (\r\n) and Linux/Unix/Mac (\n)
\r?\n					return 'NEWLINE';
// \s includes \n space and tab, we need the NEWLINE token, so we put space and tab in white spacve
[ \t]                   /* skip whitespace */ 
var 		              return 'VAR';
[0-9]+("."[0-9]+)?  return 'NUMBER'; 
// add the token for the variable
[A-Za-z][A-Za-z0-9]*  return 'IDENTIFIER';
"-"                   return '-';
"+"                   return '+';
"*"                   return '*';
"/"                   return '/';
"("                   return '(';
")"	                  return ')';
','				          return ',';

 
/lex
 
/* Grammar part, for this lab */
 
// when it is ambiguous, derive the left part
%left '+' '-'
// * and / have higher priority
%left '*' '/' 
 
%{
// function for grammar rule
function rule (rule_name, items)
{
  return {
    rule: rule_name,
    items: items
  };
}
 
// function for token
function token (token_name, value)
{
  return {
    token: token_name,
    value: value
  };
}

%}
 
%% 
 
start: expressions { 
                 return $$; 
            };
            
expressions: statement NEWLINE expressions	{
											$$ = rule ('statement', [$1, token ('NEWLINE', $2), $3]);
										}
			| statement NEWLINE		{
									$$ = rule ('statement', [$1, token ('NEWLINE', $2)]);
								}
			| statement	{
						$$ = rule ('statement', [$1]);
					};
					
statement:  expr  {
                    $$ = rule ('statement', [$1]);
                }
            | variable {
                        $$ = rule ('statement', [$1]);
                    };
 
expr:	'(' expr ')'	{
							// assign the value from the expression
							$$ = rule ('expr', [token ('(', $1), $2, token (')', $3)]);
						}
	  | expr '+' expr	{ 
				$$ = rule ('expr', [$1, token ('+', $2), $3]);
			}
      | expr '-' expr 	{
    				$$ = rule ('expr', [$1, token ('-', $2), $3]);
      			}
      | expr '*' expr	{ 
    			$$ = rule ('expr', [$1, token ('*', $2), $3]);
			}
      | expr '/' expr 	{
    				$$ = rule ('expr', [$1, token ('/', $2), $3]);
      			}
      | NUMBER 	{ 
	  		// $1 is string so we store its float value
	  		$$ = token ('NUMBER', parseFloat ($1)); 
	  	}
	  | IDENTIFIER {
			// store the variable
	  		$$ = token ('IDENTIFIER', $1);
		};
		
variable:	VAR variables
			{
				$$ = rule ('variable', [token ('VAR', $1), $2]);
			};
 
variables:	IDENTIFIER ',' variables   
			{
				$$ = rule ('variables', 
				           [
				              token ('IDENTIFIER', $1), 
				              token (',', ','), 
				              $3
				           ]
				          );
			}
		| IDENTIFIER 
			{
				$$ = token ('IDENTIFIER', $1);
			};