// Get elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');
let currentOperator = null;

// Add event listeners
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            calculate();
        } else if (button.textContent === 'C') {
            clearDisplay();
        } else if (button.textContent === '⌫') {
            back();
        } else if (['+', '-', '*', '/'].includes(button.textContent)) {
            handleOperatorClick(button.textContent);
        } else {
            appendToDisplay(button.textContent);
        }
    });
});


// Functions
function appendToDisplay(value) {
    // If the value is an operator and an operator is already present, replace it
    if (['+', '-', '*', '/'].includes(value)) {
        handleOperatorClick(value);
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '';
    currentOperator = null; // Clear current operator when display is cleared
}

function back() {
    // Remove last character
    display.value = display.value.slice(0, -1);
    // If the last character removed was an operator, clear the currentOperator
    if (['+', '-', '*', '/'].includes(display.value.slice(-1))) {
        currentOperator = null;
    }
}

function calculate() {
    try {
        // Replace current operator if necessary
        if (currentOperator) {
            display.value = display.value.replace(currentOperator, ` ${currentOperator} `);
        }
        const result = eval(display.value);
        display.value = result;
        currentOperator = null; // Clear the current operator after calculation
    } catch (error) {
        display.value = 'Error';
    }
}

function handleOperatorClick(operator) {
    // Check if there's already an operator in the display
    if (currentOperator) {
        // Replace the current operator with the new one
        display.value = display.value.replace(currentOperator, operator);
    } else {
        // Add the new operator to the display
        display.value += operator;
    } 

    // Update the current operator
    currentOperator = operator;
}

// Example usage with buttons (assuming IDs are correctly set on your HTML elements)
document.getElementById('plusButton').addEventListener('click', () => handleOperatorClick('+'));
document.getElementById('minusButton').addEventListener('click', () => handleOperatorClick('-'));
document.getElementById('multiplyButton').addEventListener('click', () => handleOperatorClick('*'));
document.getElementById('divideButton').addEventListener('click', () => handleOperatorClick('/'));