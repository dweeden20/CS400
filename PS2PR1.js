/*
    Write two generators that together implement a series of even Fibonacci numbers. The first
    generator should return the series of fibonacci numbers starting from 0. The series F is defined
    as
    F(0) = 0; F(1) = 1; F(n) = F(n-1) + F(n-2)
    The second generator should use the first to obtain the next number in the sequence, rejecting
    it if it is odd and asking for the next. Once an even Fibonacci number is obtained, it is emitted.
 */


const Fib1 = (x) => Math.abs((x-1) + (x-2));

