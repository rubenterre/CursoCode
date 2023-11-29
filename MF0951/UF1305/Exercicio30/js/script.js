let displayValue = '';
let operator = '';
let firstOperand = '';

function appendCharacter(char) {
    displayValue += char;
    updateDisplay();
}

function setOperator(op) {
    operator = op;
    firstOperand = displayValue;
    displayValue = '';
    updateDisplay();
}

function calculate() {
    const secondOperand = displayValue;
    let resultado = '';

    switch (operator) {
        case '+':
            resultado = sumar(parseFloat(firstOperand), parseFloat(secondOperand));
            break;
        case '-':
            resultado = restar(parseFloat(firstOperand), parseFloat(secondOperand));
            break;
        case '*':
            resultado = multiplicar(parseFloat(firstOperand), parseFloat(secondOperand));
            break;
        case '/':
            resultado = dividir(parseFloat(firstOperand), parseFloat(secondOperand));
            break;
        default:
            resultado = 'Error';
    }

    displayValue = resultado.toString();
    operator = '';
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    operator = '';
    firstOperand = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return 'Error: No se puede dividir por cero.';
    }
}