/*
    A function that given a string varies its output based on two helper functions that either
    1: splits a given string on the character 'c' into an array
    2: for any lower case 'a' in a string it is replaced 'A'
    based on which function is called the main function should produce the matching result
 */

 const splits_c = (str) => str.replace(/c/g, '*c').split('*');

const toUpper_A = (str) => {
    return {originalString: str, modifiedString: str.replace(/a/g, 'A'), numerReplaced: (str.split('a').length - 1), length: str.length};
};

const main = (str, callback) => {
    return callback(str);
};

console.log('Test on splits_c:\n', main('supercalifragilisticexpialidocious', splits_c));
console.log('Test on toUpper_A: \n', main('supercalifragilisticexpialidocious', toUpper_A));
