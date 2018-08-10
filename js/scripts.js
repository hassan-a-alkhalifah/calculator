// Business (or back-end) logic:
var userInput= "";
var input1 = "";
var input2 = "";
var operator = "";
var input = 0;
var inputArray = [];
var output = "";
var result = 0;
// var add = function(userInput) {
//   return number1 + number2;
// };
// var subtract = function(userInput) {
//   return number1 - number2;
// };
// var multiply = function(userInput) {
//   return number1 * number2;
// };
// var divide = function(userInput) {
//   return number1 / number2;
// };

// User interface (or front-end) logic:

$(document).ready(function() {
  

  $("button").click(function() {
    userInput = $(this).val();
    if(userInput >= "0" && userInput <= "9") {
      if (input1 === "") {
        input1 += userInput;
      } else {
        input2 += userInput;
      }
    } else {
      calculate(userInput);
    }


    if (operator === "(") {
      output = "";
    } else if (operator === ")") {
      output = "";
    } else if (operator === "ac") {
      output = "";
    } else if (operator === "÷") {
      output = "";
    } else if (operator === "x") {
      output = "";
    } else if (operator === "-") {
      output = "";
    } else if (operator === "+") {
      if (input1 && input2) {

      }
      input = 0;
      output = "";
    } else {
      output += $(this).val();
      input += userInput;
    }
    $("#user-input").val(output);
  });

  $("calculator").submit(function(event) {
    event.preventDefault();
    // userInput = parseInt($("#user-input").val());

    // result = add(userInput);
    // $("#output").text(result);
  });
});
