'use strict';

function firstToUpper(string) {
  const first = string.charAt(0);
  const firstUp = first.toUpperCase();
  const rest = string.slice(1);
  const res = firstUp + rest;
  return res;
}


function greeting(name, surename) {
  nameUpper = firstToUpper(name);
  surenameUpper = firstToUpper(surename);
  const hallo = 'I greet you, magnifiscent ' + nameUpper + ' ' + surenameUpper;
  var nameUpper;
  var surenameUpper;
  return hallo;
}

console.log(greeting('oleg', 'korniychuk'));
