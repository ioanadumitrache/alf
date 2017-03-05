"use strict";

// Excercise 3

var list = ['alina', 'vali', 'miruna', 'alina', 'bianca', 'lavinia']; // a list with names
console.log (list); 

// Sort the list

list.sort (); // sort the list
console.log (list);


// Compute the frequency of each name

var map = {}; // make a empty disctionary

// put all the keys (names) in the dictionary and assign them 0

var i;

for (i=0; i<list.length; i++)
{
    map[list[i]] = 0;
}

console.log (map);

// go through the array and add one to each key that we find

for (i=0; i<list.length; i++)
{
    map[list[i]]++;
}

console.log (map);

// Reverse the list

console.log (list.reverse ());



