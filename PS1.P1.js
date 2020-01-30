/*
 Write a function that takes a string as its input and returns a new string that contains all of the
 letters in the original string, but in alphabetical order. Ignore punctuation and numbers. Test
 your function using the string ‘supercalifragilisticexpialidocious’.
 */

const alphabetize = x => {
    let arr = x.split('');
    let temp;
    for (let y = 0; y < arr.length; y++) {
        for (let z = y + 1; z < arr.length; z++) {
            if (arr[y] > arr[z]) {
                temp = arr[y];
                arr[y] = arr[z];
                arr[z] = temp;
            }
        }
    }
    return arr.join('');
};

console.log('Test 1 on: supercalifragilisticexpialidocious', '\n', alphabetize('supercalifragilisticexpialidocious'));
console.log('Test 2 on: the quick brown fox jumped over the lazy dog', '\n', alphabetize('the quick brown fox jumped over the lazy dog'));
