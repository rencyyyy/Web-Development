function addition(num1, num2){
    return num1 + num2;
}

function subtraction(num1, num2){
    return num1 - num2;
}

function multiplication(num1, num2){
    return num1 * num2;
}

function division(num1, num2){
    return num1 / num2;
}

function modulo(num1, num2){
    return num1 % num2;
}

function calculator(num1, num2, operator){
    return operator(num1,num2);
}

var Calcu = calculator(9,6, modulo);
console.log(Calcu);
