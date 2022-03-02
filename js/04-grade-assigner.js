let userScore = parseInt(prompt("Enter your score"));
if (isNaN(userScore)) {
    window.alert("That is not a valid number, Hit refresh and Try again");
} else if (userScore > 100 || userScore < 1) {
    window.alert("Please enter a number between 1 and 100, Hit refresh and Try again");
} else if (userScore >= 90) {
    console.log("You received an A");
} else if (userScore >= 80) {
    console.log("You received an B");
} else if (userScore >= 70) {
    console.log("You received an C");
} else if (userScore >= 60) {
    console.log("You received an D");
} else {
    console.log("You received an F");
}
console.log(userScore);