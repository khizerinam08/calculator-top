let operation = [];
const display = document.querySelector("#display");

// Numbers setup
const num = document.querySelectorAll(".numbers");
num.forEach(number => {
    number.addEventListener('click', () => {
        
        if(operation.length < 3 && (typeof(operation[operation.length-1]) == "string") || operation.length==0){

            let num_clicked = Number(number.id);
            operation.push(num_clicked);
            displayNumber();
        }
        
    });
});

// Operators setup
const op = document.querySelectorAll(".operators");
op.forEach(operator => {
    operator.addEventListener('click', () => {
        if(operation.length != 0 && operation.length <3 && typeof(operation[operation.length-1])=="number"){
            let operator_clicked = operator.textContent;
            operation.push(operator_clicked);
            displayNumber();
        }
        
    });
});

function displayNumber() {
    display.textContent = operation.join('');
}

const equal = document.querySelector("#equal");

equal.addEventListener('click', () => {
    if (operation.length === 3) {
        let result = 0;
        let num1 = Number(operation[0]);
        let num2 = Number(operation[2]);
        let oper = operation[1];

        if (oper === '+') {
            result = num1 + num2;
        }
        else if (oper === '-') {
            result = num1 - num2;
        }
        else if (oper === '÷') {
            if (num2 === 0) {
                display.textContent = "SIKE";
                operation = [];
                return;
            }
            result = (num1 / num2).toFixed(2);
        }
        else {
            result = num1 * num2;
        }

        operation = [result];
        display.textContent = result;
    }
});


const clear = document.querySelector("#clear");
clear.addEventListener('click', () =>{
    operation = [];
    displayNumber();
})
