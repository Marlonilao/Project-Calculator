function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return (b == 0) ? 'Error' : a / b;

}

let a = null;
let b = null;
let operator = '';
const operators = ['+','-','*','/'];


function operate(a,operator,b){
    if(operator === '+') {
        return add(a,b);
    } else if (operator === '-') {
        return subtract(a,b);
    } else if (operator === '*') {
        return multiply(a,b);
    } else if (operator === '/') {
        return divide(a,b);
    }
}
const display = document.querySelector('.display');
const ac = document.querySelector('#AC');
ac.addEventListener('click' , (e) => {
    display.textContent = ""
    a = null;
    b = null;
    operator = '';
})
const sign = document.querySelector('#sign');
sign.addEventListener('click', (e) => {
    if (display.textContent == +`${display.textContent}`) {
        display.textContent = -`${display.textContent}`;
    } else if (display.textContent == -`${display.textContent}`) {
        display.textContent = +`${display.textContent}`;
    }
})
const percent = document.querySelector('#percent');
percent.addEventListener('click', (e) => {
    display.textContent = +`${display.textContent}`/100;
})
// number buttons
const seven = document.querySelector('#seven');
seven.addEventListener('click', (e) => {
    if (operators.includes(display.textContent)) {
        display.textContent = '7';
    } else if (a != null && b == null && operator == '') {
        a = null;
        display.textContent = '7';
    } else {
        display.textContent += '7';
    }
})
const eight = document.querySelector('#eight');
eight.addEventListener('click', (e) => {
    if (operators.includes(display.textContent)) {
        display.textContent = '8';
    } else if (a != null && b == null && operator == '') {
        a = null;
        display.textContent = '8';
    } else {
    display.textContent += '8';
    }
})
const nine = document.querySelector('#nine');
nine.addEventListener('click',(e) => {
    if (operators.includes(display.textContent)) {
        display.textContent = '9';
    } else if (a != null && b == null && operator == '') {
        a = null;
        display.textContent = '9';
    } else {
    display.textContent += '9';
    }
})
const four = document.querySelector('#four');
four.addEventListener('click' , (e) => {
    if (operators.includes(display.textContent)) {
        display.textContent = '4';
    } else if (a != null && b == null && operator == '') {
        a = null;
        display.textContent = '4';
    } else {
    display.textContent += '4';
    }
})
const five = document.querySelector('#five');
five.addEventListener('click' , (e) => {
    if (operators.includes(display.textContent)) {
        display.textContent = '5';
    } else if (a != null && b == null && operator == '') {
        a = null;
        display.textContent = '5';
    } else {
    display.textContent += '5';
    }
})
const six = document.querySelector('#six');
six.addEventListener('click', (e) => {
    if (operators.includes(display.textContent)) {
        display.textContent = '6';
    } else if (a != null && b == null && operator == '') {
        a = null;
        display.textContent = '6';
    } else {
    display.textContent += '6';
    }
})
const one = document.querySelector('#one');
one.addEventListener('click' , (e) => {
    if (operators.includes(display.textContent)) {
        display.textContent = '1';
    } else if (a != null && b == null && operator == '') {
        a = null;
        display.textContent = '1';
    } else {
    display.textContent += '1';
    }
})
const two = document.querySelector('#two');
two.addEventListener('click' , (e) => {
    if (operators.includes(display.textContent)) {
        display.textContent = '2';
    } else if (a != null && b == null && operator == '') {
        a = null;
        display.textContent = '2';
    }  else {
    display.textContent += '2';
    }
})

const three = document.querySelector('#three');
three.addEventListener('click', (e) => {
    if (operators.includes(display.textContent)) {
        display.textContent = '3';
    } else if (a != null && b == null && operator == '') {
        a = null;
        display.textContent = '3';
    } else {
    display.textContent += '3';
    }
})

const zero = document.querySelector('#zero');
zero.addEventListener('click' , (e) => {
    if (operators.includes(display.textContent)) {
        display.textContent = '0';
    } else if (a != null && b == null && operator == '') {
        a = null;
        display.textContent = '0';
    } else {
    display.textContent += '0';
    }
})

const dot = document.querySelector('#dot');
dot.addEventListener('click' , function eventHandler() {
    if (display.textContent.includes('.')) {
        
    } else if (operators.includes(display.textContent)) {
        display.textContent = ''
        display.textContent = `${display.textContent}.`;
    } else {
    display.textContent = `${display.textContent}.`;
    }

})

// operator buttons
const addition = document.querySelector('#addition');
addition.addEventListener('click' , (e) => {
    operator = '+';
    (a == null) ? a = +`${display.textContent}` : b = +`${display.textContent}`;
    display.textContent = '+';

})

const subtraction = document.querySelector('#subtraction');
subtraction.addEventListener('click' , (e) => {
    operator = '-';
    (a == null) ? a = +`${display.textContent}` : b = +`${display.textContent}`;
    display.textContent = '-';
    
})

const multiplication = document.querySelector('#multiplication');
multiplication.addEventListener('click',(e) => {
    operator = '*';
    (a == null) ? a = +`${display.textContent}` : b = +`${display.textContent}`;
    display.textContent = '*';
})

const division = document.querySelector('#division');
division.addEventListener('click' , (e) => {
    operator = '/';
    (a == null) ? a = +`${display.textContent}` : b = +`${display.textContent}`;
    display.textContent = '/';
    
})

const equal = document.querySelector('#equal');
equal.addEventListener('click' , (e) => {
    b = +`${display.textContent}`;
    display.textContent = `${Math.round(operate(a,operator,b) * 100)/100}`;
    a = +`${Math.round(operate(a,operator,b) * 100)/100}`;
    b = null;
    operator = '';
})