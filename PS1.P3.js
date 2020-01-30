/*
    A function that given a string varies its output based on two helper functions that either
    1: splits a given string on the character 'c' into an array
    2: for any lower case 'a' in a string it is replaced 'A'
    based on which function is called the main function should produce the matching result
 */

const splits_c = str => {
    let arr = str.split('');
    let tmp = '';
    let ans = [];
    for (let y = 0; y < arr.length; y++) {
        if (arr[y] === 'c') {
            ans.push(tmp);
            tmp = '';
            tmp += arr[y];
        }
        else {
            tmp += arr[y];
        }
    }
    ans.push(tmp);
    return ans;
};


const toUpper_A = str => {
    let arr = str.split('');
    let ans = '';
    let count =0;
    for (let y = 0; y < arr.length; y++) {
        if (arr[y] === 'a') {
            ans += 'A';
            count++;
        }
        else {
            ans += arr[y];
        }
    }
    return {orginalString: str, modifiedString: ans, numberReplaced: count, length: ans.length};
};

const main = (str, callback) => {
    return callback(str);
};

console.log('Test on splits_c:\n', main('supercalifragilisticexpialidocious', splits_c));
console.log('Test on toUpper_A: \n', main('supercalifragilisticexpialidocious', toUpper_A));
