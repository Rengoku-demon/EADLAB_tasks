function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression and display the result
        display.value = eval(display.value);
    } catch (error) {
        // Handle any errors that occur during evaluation
        display.value = 'Error';
    }
}
