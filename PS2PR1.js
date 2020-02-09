/*
    Write two generators that together implement a series of even Fibonacci numbers. The first
    generator should return the series of fibonacci numbers starting from 0. The series F is defined
    as
    F(0) = 0; F(1) = 1; F(n) = F(n-1) + F(n-2)
    The second generator uses the first to obtain the next number in the sequence, rejecting
    it if it is odd and asking for the next. Once an even Fibonacci number is obtained, it is emitted.
 */
function* fibonacci(n) {
    const infinite = !n && n !== 0;
    let current = 0;
    let next = 1;

    while (infinite || n--) {
        yield current;
        [current, next] = [next, current + next];
    }
}

function* Fib ()  {
    let val1 = 0;
    let val2 = 1;
    while (val1 < 1000) {
        yield val1;
        [val1, val2] = [val2, val1+ val2];
    }
}

function* Fib_even (x) {
    let is_even = x%2;
    let count = 0;
    while (count < 6) {
        if (is_even === 0) {
            console.log(count);
            yield x;
            [count] = [count + 1];
        }
        else {
            yield;
        }
    }

};
/*for (fib of fibonacci(20)) {
    cat = Fib_even(fib);
    console.log(cat.next().value)

} */

net = Fib();
for (fibs of Fib()) {
    cat = Fib_even(fibs);
    console.log(cat.next().value)
    //console.log(net.next().value);

}



//while (c --> 0) {
  //  console.log(net.next().value)
   // console.log(cat.next().value);
//}
//let test = Fib_even();
//console.log(test.next().value);



