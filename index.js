// Get elements
//This is how you target specific sections of the DOM using JavaScript
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

// Add event listeners
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            calculate()
        } else if (button.textContent === 'C') {
            clearDisplay()
        } else  if (button.textContent === '⌫'){
            back()
        } else {
            appendToDisplay(button.textContent)
        }
    });
});

// Functions
function appendToDisplay(value) {
    display.value += value
}

function clearDisplay() {
    display.value = ''
}

function back() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const result = eval(display.value)
        display.value = result
    } catch (error) {
        display.value = 'Error'
    }
}
