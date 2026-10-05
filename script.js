let currentNumber = 0;
let prevOperator = "";
let currentOperator = "";
let firstNumber = "";
let secondNumber = "";
let result = "";
let enterPressed = false;
let dotPressed = false;

function setOutput(value) {
  let output = document.querySelector(".output");
  output.textContent = value;
}

let numbersArray = [];

window.addEventListener("keydown", function (e) {
  let selectedKey = e.key;
  if (!isNaN(selectedKey) && selectedKey !== " ") {
    getNumbers(selectedKey);
  }
  switch (selectedKey) {
    case "+":
      selectedKey = "add";
      getOperator(selectedKey);
      break;
    case "-":
      selectedKey = "subtract";
      getOperator(selectedKey);
      break;
    case "*":
      selectedKey = "multiply";
      getOperator(selectedKey);
      break;
    case "/":
      selectedKey = "divide";
      getOperator(selectedKey);
      break;
    case ".":
      if (!dotPressed) {
        getNumbers(selectedKey);
      }
      dotPressed = true;
      dotButton.disabled = true;
      break;
    case "Backspace":
      backspace();
      break;
    case "Enter":
      calculate();
      break;
    case "Escape":
      clear();
      break;
  }
});

const numberButtons = document.querySelectorAll(".numbers button");
numberButtons.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    let selectedNumber = e.target.textContent;
    getNumbers(selectedNumber);
  }),
);

function getNumbers(input) {
  if (numbersArray.length === 0 && input === ".") {
    numbersArray.push(0);
    numbersArray.push(input);
    currentNumber = numbersArray.join("");
    setOutput(currentNumber);
  } else {
    numbersArray.push(input);
    currentNumber = numbersArray.join("");
    setOutput(currentNumber);
  }
}

const backspaceButton = document.querySelector("#backspace");
backspaceButton.addEventListener("click", function () {
  backspace();
});

function backspace() {
  if (numbersArray.length > 1) {
    numbersArray.pop();
    currentNumber = numbersArray.join("");
    setOutput(currentNumber);
  } else if (numbersArray.length === 1) {
    numbersArray = [];
    currentNumber = 0;
    setOutput(currentNumber);
  }
}

const dotButton = document.querySelector("#dot");
dotButton.addEventListener("click", function (e) {
  dotPressed = true;
  dotButton.disabled = true;
});

const operatorButtons = document.querySelectorAll(
  "#add, #subtract, #multiply, #divide",
);
operatorButtons.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    let selectedOperator = e.target.id;
    getOperator(selectedOperator);
  }),
);

function getOperator(input) {
  dotPressed = false;
  dotButton.disabled = false;
  if (currentOperator) {
    prevOperator = currentOperator;
    currentOperator = input;
    if (!firstNumber) {
      firstNumber = currentNumber;
      numbersArray = [];
    } else if (numbersArray.length === 0) {
      enterPressed = false; // Reset state if operator is pressed again
    } else if (enterPressed) {
      firstNumber = currentNumber;
      numbersArray = [];
      enterPressed = false;
    } else {
      secondNumber = currentNumber;
      numbersArray = [];
      operate(prevOperator, firstNumber, secondNumber);
      firstNumber = result;
      enterPressed = false;
    }
  } else {
    currentOperator = input;
    if (!firstNumber) {
      firstNumber = currentNumber;
      numbersArray = [];
    } else {
      secondNumber = currentNumber;
      numbersArray = [];
      operate(currentOperator, firstNumber, secondNumber);
      firstNumber = result;
      enterPressed = false;
    }
  }
}

let calculateButton = document.querySelector("#calculate");
calculateButton.addEventListener("click", function (e) {
  calculate();
});

function calculate() {
  secondNumber = currentNumber;
  numbersArray = [];
  operate(currentOperator, firstNumber, secondNumber);
  firstNumber = result;
  enterPressed = true;
  dotButton.disabled = false;
}

let clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", function (e) {
  clear();
});

function clear() {
  currentNumber = 0;
  numbersArray = [];
  currentOperator = "";
  prevOperator = "";
  firstNumber = "";
  secondNumber = "";
  result = "";
  setOutput(currentNumber);
  enterPressed = false;
  dotButton.disabled = false;
}

function roundFloat(value) {
  rounded = value.toFixed(6);
  let roundedAsArray = Array.from(rounded);
  let lastElement = roundedAsArray[roundedAsArray.length - 1];
  while (lastElement === "0" || lastElement === ".") {
    roundedAsArray.pop();
    lastElement = roundedAsArray[roundedAsArray.length - 1];
  }
  rounded = roundedAsArray.join("");
  if (!rounded) rounded = 0;
  return rounded;
}

function add(a, b) {
  result = parseFloat(a) + parseFloat(b);
  if (result % 1 !== 0) {
    result = roundFloat(result);
  }
  setOutput(result);
}

function subtract(a, b) {
  result = parseFloat(a) - parseFloat(b);
  if (result % 1 !== 0) {
    result = roundFloat(result);
  }
  setOutput(result);
}

function multiply(a, b) {
  result = parseFloat(a) * parseFloat(b);
  if (result % 1 !== 0) {
    result = roundFloat(result);
  }
  setOutput(result);
}

function divide(a, b) {
  result = parseFloat(a) / parseFloat(b);
  if (result % 1 !== 0) {
    result = roundFloat(result);
  }
  setOutput(result);
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
  }
}
