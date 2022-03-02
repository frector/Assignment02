let ready = prompt("Are you ready to play the game?").toLowerCase();
if (ready == "yes") {
    window.alert("You are in a dark, dingy and humid cave looking for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry, and extremely thirsty.  You see a speck of light in the distance ahead of you, something shimmering to the right, and the sound of running water to your left. Your back is against the wall. ");
    let move= prompt("Which direction would you like to go? (please enter forward, left or right)");
    switch (move) {
        case 'forward':
            window.alert('You walk 100 yards and safely make your way out of the cave');
            break;
        case 'left':
            window.alert('Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!');
            break;
        case 'right':
            window.alert('You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!');
            break;
        default:
            window.alert('The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.');
        }
        let rating = parseInt(prompt('The game is now over, please rate the game with a number between 1 and 10'));
        if (rating >= 6 && rating <= 10){
            window.alert('Thank you, please play again');
        } else if (rating >= 1 && rating <= 5){
            window.alert('Thank you, we are working hard to improve the game');
        } else {
            window.alert('Thanks for playing, goodbye');
        }
} else {
    window.alert("Thank you, come play again  sometime");
}
