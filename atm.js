const account = require("./account");


function getBalance(){
    alert(balance)
}
function withdraw(){
    let withDrawAmount = prompt(parse.int("how much do you want to withdraw?"));
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