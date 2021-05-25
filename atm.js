const account = require("./account");
const prompt = require('prompt-sync')();
const parseInt = require('parse-int');
const alert = require('alert')


function getBalance(){
    alert(account.bal);
}
function withdraw(){
    let withDrawAmount = prompt(parseInt("how much do you want to withdraw?"));
    let newBalance = withDrawAmount - balance;
    alert('Your balance is ' + newBalance);
}
function deposit(){
    let depositAmount = prompt(parseInt("How much do you want to deposit?"));
    let newDepositedAmt= depositAmount + balance;
    alert("Your new deposited amount is " + newDepositedAmt);
}
function validatePin(){
}


module.exports.getBal = getBalance;
module.exports.wdraw = withdraw;
module.exports.dep = deposit;
module.exports.valPin = validatePin;