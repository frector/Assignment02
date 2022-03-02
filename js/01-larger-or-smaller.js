let num1 = parseInt(prompt('Enter a number'));
let num2 = parseInt(prompt('Enter another number'));
if (num1 > num2) {
    document.write(`${num1} is the greater number`);
} else if (num1 == num2) {
    document.write(`${num1} and ${num2} are the same!`);
} else {
    document.write(`${num2} is the greater number`);
}