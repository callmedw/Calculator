//calculator will add 2 numbers together
var add = function(number1, number2){ return number1 + number2; };

var number1 = parseInt(prompt("Enter a number to add:"));
var number2 = parseInt(prompt("Enter another number to add to:"));

alert(add(number1, number2));
//calculator will subtract 2 numbers
var subtract = function(number1, number2){ return number1 - number2; };

var number1 = parseInt(prompt("Enter a number to subtract:"));
var number2 = parseInt(prompt("Enter another number to subtract from:"));

alert(subtract(number1, number2));
//calculator will multiply 2 numbers
var multiply = function(number1, number2){ return number1 * number2; };

var number1 = parseInt(prompt("Enter a number to multiply:"));
var number2 = parseInt(prompt("Enter another number to multiply by:"));

alert(multiply(number1, number2));
//calculator will divide 2 numbers
var divide = function(number1, number2){ return number1 / number2; };

var number1 = parseInt(prompt("Enter a number to divide:"));
var number2 = parseInt(prompt("Enter another number to divide by:"));

alert(divide(number1, number2));
