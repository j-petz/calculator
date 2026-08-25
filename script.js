let currentNumber = 0;
let currentOperator = "";
let firstNumber = "";
let secondNumber = "";

function setOutput() {
  let output = document.querySelector(".output");
  output.textContent = currentNumber;
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
      setOutput();
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
        setOutput();
        console.log(`Current Operator: ${currentOperator}`);
        console.log(`First Number: ${firstNumber}`);
        console.log(`Current Number: ${currentNumber}`);
      } else {
        secondNumber = currentNumber;
        numbersArray = [];
        console.log(`Second Number: ${secondNumber}`);
      }
    }),
  );
}
getOperator();

function calculate() {
  let enter = document.querySelector("#enter");
  enter.addEventListener("click", function (e) {
    secondNumber = currentNumber;
    console.log(`Current Operator: ${currentOperator}`);
    console.log(`First Number: ${firstNumber}`);
    console.log(`Second Number: ${secondNumber}`);
    console.log(`Current Number: ${currentNumber}`);
    operate(currentOperator, firstNumber, secondNumber);
    firstNumber = currentNumber;
  });
}
calculate();

function add(a, b) {
  currentNumber = parseInt(a) + parseInt(b);
  console.log(`Current Number: ${currentNumber}`);
  setOutput();
  //return a + b;
}

function subtract(a, b) {
  currentNumber = parseInt(a) - parseInt(b);
  setOutput();
  //return a - b;
}

function multiply(a, b) {
  currentNumber = parseInt(a) * parseInt(b);
  setOutput();
  //return a * b;
}

function divide(a, b) {
  currentNumber = parseInt(a) / parseInt(b);
  setOutput();
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
