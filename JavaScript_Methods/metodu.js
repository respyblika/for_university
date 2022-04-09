var firstArray = [1, 2, 3, "n", 5, 6, 7, 8, 9, 10];
var secondArray = [1, 2, 3, 4, 5, 6, 7, "n", 9, 10]

//1.1
function closeToN(arr) {
    return [arr.indexOf("n", 0) - 1, arr.indexOf("n", 0) + 1]
}

//1.2
function numbersAfterN(arr) {
    return [str.slice(arr.indexOf("n", 0), 9)]
}

//1.3
function mergerNumbersAfterN(arr, arr1) {
    return (arr.splice(arr.indexOf("n", 0) + 1, arr.length - arr.indexOf("n", 0)).concat(arr1.slice(0, arr1.indexOf("n", 0))));
}

//2.2
function reverseString(arr) {
    return arr.join('-', arr.reverse());
}