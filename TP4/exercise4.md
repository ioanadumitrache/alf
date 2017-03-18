# Exercise 4

This one needs to be run in the shell.

## Windows

    npm install -g jshint

## Linux/Mac 

````bash
sudo npm install -g jshint
````


create a .jshintrc file that contains

````json
{
    "node":true,
    "esnext": true
}
````

You can also add these to the *package.json* file

````json
{
    ...
    "jshintConfig":
    {
        "node":true,
        "esnext":true
    }
    ...
}
````
    
   
    
After you write the *.jshintrc* file or add the *jshintConfig* in the *package.json* file run

````bash
jshint your_file_name.js
````

This will check your files for errors