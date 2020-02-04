/*
 Write a function that takes a string as its input and returns a new string that contains all of the
 letters in the original string, but in alphabetical order. Ignore punctuation and numbers. Test
 your function using the string ‘supercalifragilisticexpialidocious’.
 */

const alphabetize = (x) => x.split('').sort().join('');

console.log('Test 1 on: supercalifragilisticexpialidocious', '\n', alphabetize('supercalifragilisticexpialidocious'));
console.log('Test 2 on: thequickbrownfoxjumpedoverthelazydog', '\n', alphabetize('thequickbrownfoxjumpedoverthelazydog'));
