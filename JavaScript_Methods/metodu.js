var firstArray = [1, 2, 3, "n", 5, 6, 7, 8, 9, 10];
var secondArray = [1, 2, 3, 4, 5, 6, 7, "n", 9, 10]

//1.1
function closeToN(arr) {
    return [arr.indexOf("n", 0) - 1, arr.indexOf("n", 0) + 1]
}

//1.2
function numbersAfterN(arr) {
    var n = arr.indexOf("n", 0);
    var ExitArr = arr.slice(n + 1, arr.length);
    return ExitArr;
}

//1.3
function mergerNumbersAfterN(arr, arr1) {
    return (arr.splice(arr.indexOf("n", 0) + 1, arr.length - arr.indexOf("n", 0)).concat(arr1.slice(0, arr1.indexOf("n", 0))));
}


var arr = [1, 2, 3, 4, 5/*...*/];

//2.2
function reverseString(arr) {
    return arr.join('-', arr.reverse());
}

var str = "?Я?предпочитаю?вести?здоровый?образ?жизни";

//3.1
function splitStr(str) {
    var ExitArr = str.split("?");
    return ExitArr;
}

var str = "JavaScript";

//Упражнение 4.2
function startOrEnd(str, underStr) {
    if (str.startsWith(underStr) == true || str.endsWith(underStr) == true) {
        return true
    } else {
        return false
    }
    console.log(startOrEnd(str, "pt"));
}