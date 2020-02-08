/*
    A function the returns the cube value of the input.
    And a generator that calls the cube function on each element of an array
 */

const cube = (x) => (x*x*x);


const array_handle = (y) => y.map(cube);

let test = [1, 2, 3, 4, 5, 6, 7];

console.log("running array_handle on array 'test: 1, 2, 3, 4, 5, 6, 7' \n", array_handle(test));

