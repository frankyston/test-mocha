'use strict';
function sum(a, b){
  if(isEmpty(a) || isEmpty(b))
    return new Error("Por favor, passe dois parâmetros");
  if(!isNumber(a) || !isNumber(b))
    return new Error("OS parâmetros devem ser números");
  return a + b;
}

function isEmpty(arg){
  return !arg;
}
function isNumber(arg){
  return Object.prototype.toString.call(arg) === '[object Number]';
}

module.exports = sum;
