"use strict";

var fs = require ('fs');

// read the contents of a file to a string (the file with errors)
var studentsString = fs.readFileSync ('fils_1220f.csv', 'UTF-8');

// split the string by newline (\n) and store the result in a variable
var list = studentsString.split ('\n'); // for windows, use \r\n

// create the student database (array)
var studentsDb = [];

for (var i=0; i<list.length; i++)
{
    var temp = list[i].split (';'); // split each line of the file using ;
    // uncomment this to see how a split works
    // console.log (temp); 
    // make a new student object 
    // (by prototype, this means it does not have a predifined class, we just assign values to the fields)
    
    // if the line is missing a ;, that means that temp has less then 3 elements
    
    if (temp.length >= 3)
    {
        var student = {
            name: temp[1],
            group: temp[2]
        };
        // add the student to the database
        studentsDb.push (student);
    }
    else
    {
        // write an error
        // the line number is i+1 (the array starts at 0, but the first file line is 1)
        console.log ('Error at line '+(i+1));
    }
}

// use a map
studentsDb.map (function (student)
{
    // split the name using ' '
    var namesplit = student.name.split (' ');
    
    // the first element of namesplit is the lastname
    student.lastname = namesplit[0];
    
    // check if the initial exists (some students have no initial)
    // the initial should be the second element of namesplit
    // to do the check, we verify if . exists in the string that we consider the initial
    student.initial = namesplit[1];
    if (student.initial.indexOf ('.')<0)
    {
        // there is no . in the initial, this means that the student has no initial
        student.initial = '';
    }
    
    // the first name formed out of all the other elements of namesplit
    // we remove the lastname and the initial (if it exists)
    namesplit.splice (0, 1); // removes from element at position 0 one element
    // if the student has an initial, that means the we need to remove it from the namesplit
    // we have removed already the first element (lastname), so no the initial is the first element
    // we remove one more time the first element
    if (student.initial !== '') namesplit.splice (0, 1);
    
    // join the elements of namesplit to a string with a space between them
    student.firstname = namesplit.join (' ');
        
    // delete the name field from the student
    delete student.name;

});

// use a map

studentsDb.map (function (student)
{
    // an empty array for the firstname items
    var firstname = [];
    // split the firstname using - (some names have -, some have just spaces)
    // first we split using - and then we split each element that we found using space
    // the list of firstname is the of the elements from the split with space
    var firstnameSplitMinus = student.firstname.split ('-');
    for (var i=0; i<firstnameSplitMinus.length; i++)
    {
        // take each element of firstnameSplit and trim it (remove spaces left and right)
        var item = firstnameSplitMinus[i].trim ();
        // split the name with space
        var itemSplit = item.split (' ');
        for (var j=0; j<itemSplit.length; j++)
        {
            firstname.push (itemSplit[j]);
        }
    }
    
    student.firstname = firstname;
});

function showStudent (student)
{
    console.log (student.firstname.join (' ')+' '+student.lastname+' '+student.group);
}

console.log (studentsDb);

studentsDb.map (function (student)
{
    showStudent(student); 
});