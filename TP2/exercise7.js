"use strict";

// Exercise 7

var fs = require ('fs');

function durationInMinutes (duration)
{
    var minutes = 0;
    var splitDuration = duration.split (':'); // split the duration (hh:mm) in an array, index 0 - hours, index 1 - minutes
    var hours = parseInt(splitDuration[0]); // convert the string to number with parseInt 
    minutes = parseInt (splitDuration[1]) + hours*60;
    return minutes;
}

function durationToString (durationInMinutes)
{
    var hours = Math.floor (durationInMinutes / 60);
    var minutes = durationInMinutes % 60;
    return hours+':'+minutes;
}

var eva = require ('./q8u9-7uq7.json');

// Point a

// duration for USA

var usaEvaNumber = 0;
var usaDurationInMinutes = 0;

var i=0;
for (i=0; i<eva.length; i++)
{
    if (eva[i].country === 'USA')
    {
        usaEvaNumber = usaEvaNumber + 1;
        // duration information might not be available
        if (eva[i].duration)
        {
            usaDurationInMinutes = usaDurationInMinutes + durationInMinutes(eva[i].duration);   
        }
    }
}

// console.log (usaEvaNumber+' '+durationToString (usaDurationInMinutes));

// duration for Russia

var russiaEvaNumber = 0;
var russiaDurationInMinutes = 0;

for (i=0; i<eva.length; i++)
{
    if (eva[i].country === 'Russia')
    {
        russiaEvaNumber = russiaEvaNumber + 1;
        // duration information might not be available
        if (eva[i].duration)
        {
            russiaDurationInMinutes = russiaDurationInMinutes + durationInMinutes(eva[i].duration);   
        }
    }
}

// console.log (russiaEvaNumber+' '+durationToString (russiaDurationInMinutes));

fs.writeFileSync ('eva.data', 'USA '+usaEvaNumber+' '+durationToString(usaDurationInMinutes)+'\nRussia '+russiaEvaNumber+' '+durationToString(russiaDurationInMinutes));

// Point b

var countryEva = [];

for (i=0;i<eva.length; i++)
{
    if (eva[i].country === process.argv[2])
    {
        countryEva.push (eva[i]);
    }
}

fs.writeFileSync('country.json', JSON.stringify (countryEva));

// Point c

var vehicles = {};

for (i=0; i<eva.length; i++)
{
    // the vehicle might not be available
    if (eva[i].vehicle)
    {
        var items = eva[i].vehicle.split ('/');
        var vehicle = items[0];
        // use a dictionary keys to store the vehicles
        // the value stored in the dictionary is irelevant
        vehicles[vehicle] = true; 
    }
}

for (var vehicle in vehicles)
{
    console.log (vehicle);
}