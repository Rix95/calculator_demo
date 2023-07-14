let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let positive = true;
let deleteContent = false;

// add constant to all document query selectors and eleennts
const numberButtons = document.querySelectorAll("[number]");
const operatorButtons = document.querySelectorAll("[operator]");
const testButton = document.querySelector("[test]");
const signButton = document.getElementById("sign");
const deleteButton = document.getElementById("delete");
const clearButton = document.getElementById("clear");
const ceButton = document.getElementById("ce");
const pointButton = document.getElementById("point");
const equalsButton = document.getElementById("equals");
//screens
const cacheOperation = document.getElementById("cacheoperation");
const currentOperation = document.getElementById("currentoperation");

// #set up event listeners for all buttons
numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener("click", () => setOperator(button.textContent))
);

// signButton.addEventListener("click", changeSign);
ceButton.addEventListener("click", clearEntry);
clearButton.addEventListener("click", clearEverything);
deleteButton.addEventListener("click", deleteNumber);
pointButton.addEventListener("click", addPoint);

equalsButton.addEventListener("click", checkOperation);

function clearEntry() {
  currentOperation.textContent = "0";
}

function clearEverything() {
  firstNumber = "";
  secondNumber = "";
  currentOperator = "";
  currentOperation.textContent = "0";
  cacheOperation.textContent = "";
}

function deleteCurrentScreen() {
  currentOperation.textContent = "";
  deleteContent = false;
}

function checkOperation() {}

function appendNumber(number) {
  if (currentOperation.textContent === "0" || deleteContent)
    deleteCurrentScreen();
  currentOperation.textContent += number;
  /**/
}

function addPoint() {
  /* address when there is already a point*/
  //clean screen
  //
  if (deleteContent) {
    deleteCurrentScreen();
  }
  if (currentOperation.textContent === "") {
    currentOperation.textContent = "0";
  }
  if (currentOperation.textContent.includes(".")) {
    return;
  }
  currentOperation.textContent += ".";
}

function deleteNumber() {
  currentOperation.textContent = currentOperation.textContent
    .toString()
    .slice(0, -1);
}

// function add(x, y) {
//   return x + y;
// }

// function subtract(x, y) {
//   return x - y;
// }

// function multiply(x, y) {
//   return x * y;
// }

// function divide(x, y) {
//   if (y === 0) {
//     return "You can't divide by zero!"; /* should add alert, not return also clear display */
//   }
//   return x / y;
// }

// function operate(operator, x, y) {
//   switch (operator) {
//     case "+":
//       return add(x, y);
//       break;
//     case "-":
//       return subtract(x, y);
//       break;
//     case "*":
//       return multiply(x, y);
//       break;
//     case "/":
//       return divide(x, y);
//   }
// }
