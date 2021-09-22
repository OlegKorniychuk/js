'use strict';

function firstToUpper(string)
{
    let first = string.charAt(0)
    let first_up = first.toUpperCase();
    let rest = string.slice(1);
    let res = first_up + rest;
    return res;
}


function greeting(name, surename) 
{
    name_upper = firstToUpper(name);
    surename_upper = firstToUpper(surename);
    let hallo = 'I greet you, magnifiscent '+name_upper+' '+surename_upper;
    var name_upper;
    var surename_upper;
    return hallo;
}
console.log(greeting('oleg', 'korniychuk'));