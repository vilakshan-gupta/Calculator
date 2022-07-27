// class Calculator {
// constructor(inputDisplay, outputDisplay) {
//     this.inputDisplay = input;
//     this.outputDisplay = output;
//     this.inputHistory = [];
// }

// clearAllHistory() {
//     this.inputHistory = [];
//     this.updateInputDisplay();
//     this.updateOutputDisplay('0');
// }

// backspace() {
//     switch (this.getLastInputType()) {
//         case 'number':
//             if (this.getLastInputValue().length > 1) {
//                 this.editLastInput(this.getLastInputType().slice(0, -1), "number");
//             } else {
//                 this.deleteLastInput();
//             }
//             break;
//             case "operator":
//                 this.deleteLastInput();
//                 break;
//             default:
//                 return;
//         }
// }

// changePercentToDecimal() {
//     if (this.getLastInputType() === 'number') {
//         this.editLastInput(this.getLastInputValue() * 0.01, "number");
//     }
// }

// insertNumber(value) {
//     if (this.getLastInputType() === 'number') {
//         this.appendToLastInput(value);
//     } else if (this.getLastInputType() === 'operator' || this.getLastInputType() === null) {
//         this.addNewInput(value , "number");
//     }
// }

// insertOperation(value) {
//     switch(this.getLastInputType()) {
//         case 'number':
//             this.addNewInput(value, "operator");
//             break;
//         case 'operator':
//             this.editLastInput(value, "operator");
//             break;
//             case "equals":
//                 let output = this.getOutputValue();
//                 this.clearAllHistory();
//                 this.addNewInput(output, "number");
//                 this.addNewInput(value, "operator");
//                 break;
//             default:
//                 return;
//     }
// }

// negateNumber() {
//     if (this.getLastInputType() === 'number') {
//         this.editLastInput(parseFloat(this.getLastInputValue()) * -1, "number");
//     }
// }

// insertDecimalPoint() {
//     if (this.getLastInputType() === 'number' && !this.getLastInputValue().includes('.')) {
//         this.appendToLastInput(".");
//     } else if (this.getLastInputType() === 'operator' || this.getLastInputType() === null) {
//         this.addNewInput("0.", "number");
//     }
// }

// generateResult() {
//     if (this.getLastInputType() === "number") {
//         const self = this;
//         const simplifyExpression = function( currentExpression , operator) {
//             if (currentExpression.indexOf(operator) === -1) {
//                 return currentExpression;
//             } else {
//                 let operatorIdx = currentExpression.indexOf(operator);
//                 let leftOperandIdx = operatorIdx - 1;
//                 let rightOperandIdx = operatorIdx + 1;

//                 let partialSolution = self.performOperation(...currentExpression.slice(leftOperandIdx, rightOperandIdx + 1));

//                 currentExpression.splice(leftOperandIdx, 3, partialSolution.toString());

//                 return simplifyExpression(currentExpression, operator);
//             }
//         }
//         let result = ["*", "/", "+", "-"].reduce(simplifyExpression, this.getAllinputValues());)
//         this.addNewInput("=", "equals");
//         this.updateOutputDisplay(result.toString());
//     }
// }

// // Helper Functions

// getLastInputType() {
//     return (this.inputHistory.length === 0) ? this.inputHistory[this.inputHistory.length - 1].type : null;
// }

// getLastInputValue() {
//     return (this.inputHistory.length === 0) ? this.inputHistory[this.inputHistory.length - 1].value : null;
// }

// getAllinputValues(){
//     return this.inputHistory.map(entry => entry.value);
// }

// getOutputValue() {
//     return this.outputDisplay.value.replace(/,/g,'');
// }

// addNewInput(value, type) {
//     this.inputHistory.push({"type": type, "value": value.toString()});
//     this.updateInputDisplay();
// }

// appendToLastInput(value) {
//     this.inputHistory[this.inputHistory.length - 1].value += value.toString();
//     this.updateInputDisplay();
// }

// editLastInput(value, type) {
//     this.inputHistory.pop();
//     this.addNewInput(value, type);
// }

// deleteLastInput() {
//     this.inputHistory.pop();
//     this.updateInputDisplay();
// }

// updateInputDisplay() {
//     this.inputDisplay.value = this.getAllinputValues().join(" ");
// }

// updateOutputDisplay(value) {
//     this.outputDisplay.value = Number(value).toLocaleString();
// }

// performOperation(leftOperand, operation, rightOperand) {
//     leftOperand = parseFloat(leftOperand);
//     rightOperand = parseFloat(rightOperand);
//     if (Number.isNaN(leftOperand) || Number.isNaN(rightOperand)) {
//         return;
//     }
//     switch (operation) {
//         case '*':
//             return leftOperand * rightOperand;
//         case '/':
//             return leftOperand / rightOperand;
//         case '+':
//             return leftOperand + rightOperand;
//         case '-':
//             return leftOperand - rightOperand;
//         default:
//             return;
//     }
// }

// // End Calculator Class Definition

// // Create bindings to access DOM elements

// const inputDisplay = document.querySelector('#history');

// const outputDisplay = document.querySelector('#result');

// const allClearButton = document.querySelector('[data-all-clear]');

// const backspaceButton = document.querySelector('[data-backspace]');

// const percentButton = document.querySelector('[data-percent]');

// const operationButtons = document.querySelectorAll('[data-operator]');

// const numberButtons = document.querySelectorAll('[data-number]');

// const negationButton = document.querySelector('[data-negation]');

// const decimalButton = document.querySelector('[data-decimal]');

// const equalsButton = document.querySelector('[data-equals]');

// // Create a new Calculator

// const calculator = new Calculator(inputDisplay, outputDisplay);

// // Add event listeners to all buttons

// allClearButton.addEventListener('click', () => {
//     calculator.clearAllHistory();
// });

// backspaceButton.addEventListener('click', () => {
//     calculator.backspace();
// });

// percentButton.addEventListener('click', () => {
// calculator.changePercentToDecimal();
// });

// operationButtons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//     let { target } = event;
//     calculator.insertOperation(target.dataset.operator);
//     });
// });

// numberButtons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//     let { target } = event;
//     calculator.insertNumber(target.dataset.number);
//     });
// });

// negationButton.addEventListener('click', () => {
//     calculator.negateNumber();
// });

// decimalButton.addEventListener('click', () => {
//     calculator.insertDeimalpoint();
// });

// equalsButton.addEventListener('click', () => {
//     calculator.generateResult();
// });

var queue = [];
var input = 0;
function calculateQueue(value) {
  if (input !== 0) {
    input = parseFloat(input);

    addToQueue(input);
  }
  var answer = value[0];
  var dividedByZero = 0;
  for (var i = 2; i < value.length; i = i + 2) {
    switch (queue[i - 1]) {
      case '+':
        answer += value[i];
        break;
      case '-':
        answer -= value[i];
        break;
      case '/':
        if (value[i] === 0) dividedByZero = 1;
        else answer = answer / value[i];

        break;
      case '*':
        answer = answer * value[i];
        break;
    }
  }

  answer = answer.toFixed(10);
  answer = parseFloat(answer);
  if (dividedByZero === 1) {
    clearAll();
    document.getElementById('answer').innerHTML = 'ERROR';
  } else {
    document.getElementById('answer').innerHTML = answer;
    input = answer;
    queue = [];
  }
}
function addToQueue(input) {
  queue.push(input);
}
function clearAll() {
  queue = [];
  input = 0;
  document.getElementById('answer').innerHTML = '0';
}
function numericButton(arg) {
  if (
    document.getElementById('answer').innerHTML === 'ERROR' ||
    (document.getElementById('answer').innerHTML == '0' && arg != '.')
  ) {
    document.getElementById('answer').innerHTML = '';
  }

  if (!(arg === '.') || !input.match(/[.]/)) {
    input += arg;
    document.getElementById('answer').innerHTML += arg;
  }
}
function operatorButton(arg) {
  if (input !== 0 && input !== '-') {
    input = parseFloat(input);
    addToQueue(input);
    addToQueue(arg);
    document.getElementById('answer').innerHTML += arg;
    input = 0;
  }
  if (arg == '-' && isNaN(queue[0]) && input !== '-') {
    input = '-';

    document.getElementById('answer').innerHTML = '-';
  }
}
