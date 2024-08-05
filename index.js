// Get elements
//This is how you target specific sections of the DOM using JavaScript
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

// Add event listeners
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            //which function goes here?
        } else if (button.textContent === 'C') {
            //which function goes here?
        } else {
            //which function goes here?
        }
    });
});

// Functions
function appendToDisplay(value) {
    //write your code here
}

function clearDisplay() {
    //write your code here
}

function calculate() {
    //write your code here
}
