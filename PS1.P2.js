/*
    Takes a string input and evaluates
 */



const evaluate = (x) => {
    return (x) => eval(x);
};

const expression = '8%3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`);

const expression1 = '4+2';
const expression2 = '5*7';
const expression3 = '6-1';
const expression4 = '9/2';

let operator1 = evaluate(expression1);
let operator2 = evaluate(expression2);
let operator3 = evaluate(expression3);
let operator4 = evaluate(expression4);
console.log(`${expression1} = ${operator1(expression1)}`);
console.log(`${expression2} = ${operator2(expression2)}`);
console.log(`${expression3} = ${operator3(expression3)}`);
console.log(`${expression4} = ${operator4(expression4)}`);

