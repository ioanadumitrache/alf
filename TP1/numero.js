"use strict";

// Even numbers dividable by 7
for (var nr = 0; nr<=3463; nr=nr+1)
{
    if (nr % 7 === 0)
    {
        console.log (nr);
    }
}

// Even numbers dividable by 7 up to the first that is a multiple of 833

var number = 0;
while ((number <= 3463 && number % 833 !== 0) || number === 0)
{
    if (number % 7 === 0)
    {
        console.log (number);
    }
    number = number + 2;
}
