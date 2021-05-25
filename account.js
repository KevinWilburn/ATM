const prompt = require('prompt-sync')();
const parseInt = require("parse-int");
const alert = require('alert');

function pinPrompt(){
    let pin = prompt(parseInt("please enter your 4-digit pin."))
    return pin;
}

let balance = 1000;


module.exports.pinProm = pinPrompt;
module.exports.bal = balance;