const numbers: HTMLElement[] = Array.from(document.querySelectorAll('.button.number'))
const input: HTMLInputElement = document.querySelector('#input') as HTMLInputElement
const clear: HTMLButtonElement = document.querySelector('#clear') as HTMLButtonElement
const operators: HTMLButtonElement[] = Array.from(document.querySelectorAll('.button.operator'))
const divide: HTMLButtonElement = document.querySelector('#divide') as HTMLButtonElement;
const change: HTMLButtonElement = document.querySelector('#change') as HTMLButtonElement;
const percent: HTMLButtonElement = document.querySelector('#percent') as HTMLButtonElement;
const multiply: HTMLButtonElement = document.querySelector('#multiply') as HTMLButtonElement;
const minus: HTMLButtonElement = document.querySelector('#minus') as HTMLButtonElement;
const plus: HTMLButtonElement = document.querySelector('#plus') as HTMLButtonElement;
const solve: HTMLButtonElement = document.querySelector('#solve') as HTMLButtonElement;

let firstNumber: number | null = null;
let operator: string | null = null;
let result: number | null = null;

input.value = '0';

numbers.forEach((number: HTMLElement) => {
    number.addEventListener('click', (event) => {
        if (input.value === '0') {
            input.value = '';
        }
        input.value += (event.target as HTMLButtonElement).innerText;
    })
});

operators.forEach((oper: HTMLButtonElement) => {
    oper.addEventListener('click', (event: MouseEvent) => {
        operators.forEach((operator: HTMLButtonElement) => {
            operator.classList.remove('active');
        });
        (event.target as HTMLButtonElement)?.classList.add('active');
    })
});

divide.addEventListener('click', () => {
    operator = '/'
    assignment()
});
multiply.addEventListener('click', ()=>{
    operator = '*'
    assignment()
})
plus.addEventListener('click', ()=>{
    operator = '+'
    assignment()
})
minus.addEventListener('click', ()=>{
    operator = '-'
    assignment()
})
change.addEventListener('click', ()=>{
    input.value = -parseFloat(input.value) + ''
})
percent.addEventListener('click', () => {
    input.value = parseFloat(input.value) / 100 + ''
})

clear.addEventListener('click', () => {
    input.value = '0';
    operators.forEach((operator: HTMLButtonElement) => {
        operator.classList.remove('active');
    });
    firstNumber = null;
    operator = null;
    result = null;
});

solve.addEventListener('click', () => {
    if (operator && firstNumber !== null) {
        const secondNumber = parseFloat(input.value);
        switch (operator) {
            case '+':
                result = parseFloat((firstNumber + secondNumber).toFixed(4));
                if (result > 1e99) {
                    input.value = 'Error'
                    result = null
                }
                break;
            case '-':
                result = parseFloat((firstNumber - secondNumber).toFixed(4));
                if (result > 1e99) {
                    input.value = 'Error'
                    result = null
                }
                break;
            case '*':
                result = parseFloat((firstNumber * secondNumber).toFixed(4));
                if (result > 1e99) {
                    input.value = 'Error'
                    result = null
                }
                break;
            case '/':
                if (secondNumber === 0) {
                    result = null;
                    console.log(secondNumber);
                    input.value = 'Cannot divide by zero';
                } else {
                    console.log(firstNumber);
                    console.log(secondNumber);
                    console.log(4 / 2);
                    result = parseFloat((firstNumber / secondNumber).toFixed(4));
                    console.log(result);
                    if (result > 1e99) {
                        input.value = 'Error'
                        result = null
                    }
                }
                break;
            default:
                result = null;
                break;
        }
        if (result !== null) {
            input.value = result.toString();
            firstNumber = null;
            operator = null;
            solve.classList.remove('active')
        }
    }
});
function assignment() {
    if (result !== null) {
        firstNumber = result;
        result = null;
    } else {
        firstNumber = parseFloat(input.value);
    }
    input.value = '0';
}