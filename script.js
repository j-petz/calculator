let currentNumber = 0;

function setOutput() {
  let output = document.querySelector(".output");
  output.textContent = currentNumber;
}

//setOutput();
let numbersArray = [];

function getNumbers() {
  const numberButtons = document.querySelectorAll(".numbers button");
  numberButtons.forEach((btn) =>
    btn.addEventListener("click", function (e) {
      let selectedNumber = e.target.textContent;
      console.log(selectedNumber);
      numbersArray.push(selectedNumber);
      console.log(numbersArray);
      currentNumber = numbersArray.join("");
      console.log(currentNumber);
      setOutput();
    }),
  );
}

getNumbers();

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
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
    default:
      console.log("Oops!");
  }
}
