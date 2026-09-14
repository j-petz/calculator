let currentNumber = 0;
let currentOperator = "";
let firstNumber = "";
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
      //console.log(selectedNumber);
      numbersArray.push(selectedNumber);
      //console.log(numbersArray);
      currentNumber = numbersArray.join("");
      //console.log(currentNumber);
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
      currentOperator = e.target.id;
      if (!firstNumber) {
        firstNumber = currentNumber;
        numbersArray = [];
        setOutput(currentNumber);
        /* console.log(`Current Operator: ${currentOperator}`);
        console.log(`First Number: ${firstNumber}`);
        console.log(`Current Number: ${currentNumber}`); */
      } else {
        secondNumber = currentNumber;
        numbersArray = [];
        // console.log(`Second Number: ${secondNumber}`);
      }
    }),
  );
}
getOperator();

function calculate() {
  let enter = document.querySelector("#enter");
  enter.addEventListener("click", function (e) {
    secondNumber = currentNumber; /* 
    console.log(`Current Operator: ${currentOperator}`);
    console.log(`First Number: ${firstNumber}`);
    console.log(`Second Number: ${secondNumber}`);
    console.log(`Current Number: ${currentNumber}`); */
    operate(currentOperator, firstNumber, secondNumber);
    firstNumber = currentNumber;
  });
}
calculate();

function clear() {
  let clear = document.querySelector("#clear");
  clear.addEventListener("click", function (e) {
    currentNumber = 0;
    numbersArray = [];
    currentOperator = "";
    firstNumber = "";
    secondNumber = "";
    setOutput(currentNumber);
  });
}
clear();

function add(a, b) {
  result = parseInt(a) + parseInt(b);
  /* console.log(`Current Number: ${currentNumber}`);
  console.log(`First Number: ${firstNumber}`);
  console.log(`Second Number: ${secondNumber}`); */
  setOutput(result);
  //return a + b;
}

function subtract(a, b) {
  result = parseInt(a) - parseInt(b);
  setOutput(result);
  //return a - b;
}

function multiply(a, b) {
  result = parseInt(a) * parseInt(b);
  setOutput(result);
  //return a * b;
}

function divide(a, b) {
  result = parseInt(a) / parseInt(b);
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
