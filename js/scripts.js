// Business (or back-end) logic:
var userInput = "";
var digit1 = "";
var digit2 = "";
var operator = "";
var total = "";

var add = function(num1, num2) {
  console.log("num1: " + num1 + " num2: " + num2);
  total = parseInt(num1) + parseInt(num2);
  console.log(total);
};
// var subtract = function(userInput) {
//   return number1 - number2;
// };
// var multiply = function(userInput) {
//   return number1 * number2;
// };
// var divide = function(userInput) {
//   return number1 / number2;
// };

var calculate = function(oper) {
  if (oper === "+") {
    console.log("prior to add method " + oper + " " + digit1 + " " + digit2);
    add(digit1, digit2);
  } else if (oper === "-") {
    subtract(digit1, digit2);
  } else if (oper === "x") {
    multiply(digit1, digit2);
  } else if (oper === "÷") {
    divide(digit1, digit2);
  }
};

// User interface (or front-end) logic:

$(document).ready(function() {
  $("button").click(function() {
    userInput = $(this).val();
    if ( userInput >= 0 || userInput <= 9 ) {
      if ( operator === "") {
        digit1 += userInput;
        console.log("input 1 " + digit1);
      } else if ( operator !== "" && digit2 === "" ) {
        digit2 += userInput;
        console.log("input 2 " + digit2);
      }
    } else {
      if (operator === "" && digit2 === "") {
        operator = userInput;
        console.log("operator prior to digit2 " + operator);
      } else if ( operator !== "" ** digit2 !== "" ) {
        console.log("operator prior to calculate " + operator);
        calculate(operator);
        console.log("After calculate: operator: " + operator + " digit1: " + digit1 + " digit2: " + digit2);
      }
    }
  });

  // $("calculator").submit(function(event) {
  //   event.preventDefault();
  //   userInput = parseInt($("#user-input").val());
  //
  //   result = add(userInput);
  //   $("#output").text(result);
  // });
});
