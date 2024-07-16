/*******************************************************************************
Write a function `mySimpleReduce` that accepts an array and a callback as arguments.
The function should mimic the behavior of the built in Array#reduce, utilizing the
first element of the array as the default accumulator.

In other words, the function should begin with the first element of the array as
the accumulator and call the callback for each of the remaining elements in the array,
passing in the current accumulator and current element into the callback. Upon calling the callback,
the accumulator should be set to the result of the callback.

Examples:

let result1 = mySimpleReduce([5, 3, 2, 4], function(sum, el) {
    return sum + el;
});
console.log(result1); // 14

let result2 = mySimpleReduce([4, 6, 2], function(product, el) {
    return product * el;
});
console.log(result2); // 48

let result3 = mySimpleReduce([4, 6, 2, 8, 3], function(max, el) {
    if (el > max) {
        return el;
    } else {
        return max;
    }
});
console.log(result3); // 8

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
- Explain, but don't code, how you would refactor this problem to take in an
  optional initial accumulator
*******************************************************************************/
/*1-add third parameter that should be the optional inital accumulatro's index.
2-add an if condition to detect the existence of the index, if it exists, curr would be equal to array[accumulator] and the for loop would be initiated at i=accumulator+1
3-wrap all the rest in an else block*/

let mySimpleReduce = function(array, callback) {
    let curr=array[0]
    for (let i=1 ; i<array.length; i++){
        curr= callback(curr, array[i])

    }
    return curr

};
let result1 = mySimpleReduce([5, 3, 2, 4], function(sum, el) {
    return sum + el;
});
console.log(result1); // 14

let result2 = mySimpleReduce([4, 6, 2], function(product, el) {
    return product * el;
});
console.log(result2); // 48

let result3 = mySimpleReduce([4, 6, 2, 8, 3], function(max, el) {
    if (el > max) {
        return el;
    } else {
        return max;
    }
});
console.log(result3); // 8





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = mySimpleReduce;
