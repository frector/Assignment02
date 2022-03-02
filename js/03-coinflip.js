let randomNum = Math.round(Math.random());
let choice = prompt('choose Heads or Tails').toLowerCase();
let coinFlip;
if (choice == "heads" || choice == "tails") {
    if (randomNum < 1) {
        coinFlip = "heads";
        if (choice == coinFlip){
            window.alert("The flip was Heads and you chose Heads, You win!");
        } else {
            window.alert("The flip was Heads and you chose Tails, You lose");
        }
    } else {
    coinFlip = "tails"; 
    if (choice == coinFlip){
        window.alert("The flip was Tails and you chose Tails, You win!");
        } else {
        window.alert("The flip was Tails and you chose Heads, You lose");
        }
    }
} else {
    window.alert("You must enter Heads or Tails, try again");
}
console.log(coinFlip);
