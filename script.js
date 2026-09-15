let currentNumber = 0;
let prevOperator = "";
let currentOperator = "";
let firstNumber = 0;
let secondNumber = "";
let result = "";

function setOutput(test) {
  let output = document.querySelector(".output");
  output.textContent = test;
}

let numbersArray = [];

function getNumbers() {
  const numberButtons = document.querySelectorAll(".numbers button");
  numberButtons.forEach((btn) =>
    btn.addEventListener("click", function (e) {
      let selectedNumber = e.target.textContent;
      numbersArray.push(selectedNumber);
      currentNumber = numbersArray.join("");
      setOutput(currentNumber);
    }),
  );
}
getNumbers();

function getOperator() {
  const operatorButtons = document.querySelectorAll(
    "#add, #subtract, #multiply, #divide",
  );
  operatorButtons.forEach((btn) =>
    btn.addEventListener("click", function (e) {
      if (currentOperator) {
        prevOperator = currentOperator;
        currentOperator = e.target.id;
        if (!firstNumber) {
          firstNumber = currentNumber;
          numbersArray = [];
        } else {
          secondNumber = currentNumber;
          numbersArray = [];
          operate(prevOperator, firstNumber, secondNumber);
          firstNumber = result;
        }
      } else {
        currentOperator = e.target.id;
        if (!firstNumber) {
          firstNumber = currentNumber;
          numbersArray = [];
        } else {
          secondNumber = currentNumber;
          numbersArray = [];
          operate(currentOperator, firstNumber, secondNumber);
          firstNumber = result;
        }
      }
    }),
  );
}
getOperator();

function calculate() {
  let enter = document.querySelector("#calculate");
  enter.addEventListener("click", function (e) {
    secondNumber = currentNumber;
    operate(currentOperator, firstNumber, secondNumber);
    //firstNumber = result;
    numbersArray = [];
  });
}
calculate();

function clear() {
  let clear = document.querySelector("#clear");
  clear.addEventListener("click", function (e) {
    currentNumber = 0;
    numbersArray = [];
    currentOperator = "";
    prevOperator = "";
    firstNumber = 0;
    secondNumber = "";
    setOutput(currentNumber);
  });
}
clear();

function add(a, b) {
  result = parseFloat(a) + parseFloat(b);
  /* console.log(`Current Number: ${currentNumber}`);
  console.log(`First Number: ${firstNumber}`);
  console.log(`Second Number: ${secondNumber}`); */
  setOutput(result);
  //return a + b;
}

function subtract(a, b) {
  result = parseFloat(a) - parseFloat(b);
  setOutput(result);
  //return a - b;
}

function multiply(a, b) {
  result = parseFloat(a) * parseFloat(b);
  setOutput(result);
  //return a * b;
}

function divide(a, b) {
  result = parseFloat(a) / parseFloat(b);
  setOutput(result);
  //return a / b;
}

function operate(operatorName, firstNumber, secondNumber) {
  switch (operatorName) {
    case "add":
      return add(firstNumber, secondNumber);
      break;
    case "subtract":
      return subtract(firstNumber, secondNumber);
      break;
    case "multiply":
      return multiply(firstNumber, secondNumber);
      break;
    case "divide":
      return divide(firstNumber, secondNumber);
      break;
    /* default:
      console.log("Oops!"); */
  }
}
