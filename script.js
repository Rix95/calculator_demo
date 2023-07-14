let firstNumber = "";
let secondNumber = "";
let currentOperator = "";

// add constant to all document query selectors and eleennts
const numberButtons = document.querySelectorAll([number]);
const operatorButtons = document.querySelectorAll([operator]);
const equalsButton = document.querySelector([equals]);
const clearButton = document.querySelector([clear]);
const display = document.querySelector([display]);

// #set up event listeners for all buttons

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) {
    return "You can't divide by zero!"; /* should add alert, not return also clear display */
  }
  return x / y;
}

function operate(operator, x, y) {
  switch (operator) {
    case "+":
      return add(x, y);
      break;
    case "-":
      return subtract(x, y);
      break;
    case "*":
      return multiply(x, y);
      break;
    case "/":
      return divide(x, y);
  }
}
