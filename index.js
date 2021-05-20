const atm = require('./atm');
const prompt = require('./prompt-sync');


// function startMenu(start){
//     let start =pin;
//}
function displayMenuOptionsForUser(){
    let displayQuestion = prompt("what do you want to do, get balance, withdraw, deposit, or validate pin? Or exit? ");
    switch(displayQuestion){
        case "get balance":
            atm.getBal(balance);
            break;
        case "withdraw":
            atm.wdraw();
            break;
        case "deposit":
            atm.dep();
            break;
        case "validate pin":
            atm.valPin();
            break;
        case "exit":
            break;
    }
    // return displayMenuOptionsForUser //restart menu options for user.
}

displayMenuOptionsForUser();