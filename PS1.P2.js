/*

 */



const evaluate = x => {
    let left = x.charAt(0);
    let opt = x.charAt(1);
    let right = x.charAt(2);
    return (left, right);
};

const expression = '8%3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`);