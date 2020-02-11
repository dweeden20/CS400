/*
    Write two generators that together implement a series of even Fibonacci numbers. The first
    generator should return the series of fibonacci numbers starting from 0. The series F is defined
    as
    F(0) = 0; F(1) = 1; F(n) = F(n-1) + F(n-2)
    The second generator uses the first to obtain the next number in the sequence, rejecting
    it if it is odd and asking for the next. Once an even Fibonacci number is obtained, it is emitted.
 */

function* Fib ()  {
    let val1 = 0;
    let val2 = 1;
    while (true) {
        yield val1;
        [val1, val2] = [val2, val1+ val2];
    }
}

function* Fib_even () {
    let y = Fib();
    let nxt = y.next().value;
    let is_even = nxt % 2;
    let count = 0;
    while (count < 6) {
        if (is_even === 0) {
            yield nxt;
            count++;
            nxt = y.next().value;
            is_even = nxt % 2;
        } else {
            nxt = y.next().value;
            is_even = nxt % 2;
        }
    }
}

console.log("printing the first six even fibonacci numbers starting from 0:");
for (fibs of Fib_even()) {
    console.log(fibs);
}






