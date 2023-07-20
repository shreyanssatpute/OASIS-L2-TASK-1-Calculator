let display = document.getElementById('display');
let expression = '';

function appendChar(char) {
    expression += char;
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    display.value = expression;
}

function deleteChar() {
    expression = expression.slice(0, -1);
    display.value = expression;
}

function calculate() {
    try {
        let result = eval(expression);
        expression = result.toString();
        display.value = expression;
    } catch (error) {
        display.value = 'Error';
    }
}
