/*
    Write two generators that together implement a series of even Fibonacci numbers. The first
    generator should return the series of fibonacci numbers starting from 0. The series F is defined
    as
    F(0) = 0; F(1) = 1; F(n) = F(n-1) + F(n-2)
    The second generator uses the first to obtain the next number in the sequence, rejecting
    it if it is odd and asking for the next. Once an even Fibonacci number is obtained, it is emitted.
 */


function* Fib (x = 0)  {
    let [val1, val2, result] = [x, x-1, 0];
    while (true) {
        result = Math.abs(val1 + val2);
        val1 = val2;
        val2 = result;
        yield result;
    }
}

myFibs = Fib(0) //not really fib(4), just shows passing param
let count = 5;
while (count --> 0) {
    console.log(myFibs.next().value)
}

function* Fib_even (x) {
    let is_even = x%2;
    let count = 0;
    while (count < 6) {
        if (is_even === 0) {
            count++;
            yield x;
        } else {

        }
    }

};
net = Fib(0);
let c = 7;
while (c --> 0) {
    console.log(net.next().value)
}
let test = Fib_even();
console.log(test.next().value);



