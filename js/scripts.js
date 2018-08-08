var add = function(number1, number2) {
  return parseInt(number1) + parseInt(number2);
};
var subtract = function(number1, number2) {
  return parseInt(number1) - parseInt(number2);
};
var divide = function(number1, number2) {
  return parseInt(number1) / parseInt(number2);
};
var multiply = function(number1, number2) {
  return parseInt(number1) * parseInt(number2);
};

var num1 = parseInt(prompt("Enter a number:"));
var num2 = parseInt(prompt("Enter another number:"));

alert(subtract(num1, num2));
