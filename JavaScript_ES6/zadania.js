const sub = (a, b) => {
    if (b !== 0) {
        if (a % 10 === 0) a /= 10;
        else --a;
        return sub(a, --b);
    }
    return a;
}
console.log('Заданиe 1 ');
console.log(sub(90000400001240, 24));

const OddEven = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
const fEven = (arr, arr1) => {
    arr.forEach(function (item, index) {
        if (arr[index] % 2 === 0)
            arr1[index] = arr[index];
    })
    return arr1;
}
const fOdd = (arr, arr1) => {
    arr.forEach(function (item, index) {
        if (arr[index] % 2 !== 0) {
            arr1[index] = arr[index];
        }
    });
    return arr1;
};
const sort = (arr) => {
    let arr1 = [];
    let arr2 = [];
    let aEven = fEven(arr, arr1);
    let aOdd = fOdd(arr, arr2);
    let j = arr2.length;
    let n = arr2.length - 1;
    let arr3 = [];
    arr.forEach(function (item, index) {
        if (index % 2 !== 0) {
            arr3[index] = aEven[j];
            j = j + 1;
        } else {
            arr3[index] = aOdd[n];
            n = n - 1;
        }
    });
    return arr3;
}
console.log('Заданиe 6');
console.log(sort(OddEven));

//7
lg('Заданиe 7 ->');
let groul = "ГозулиагртГтГроаугитглтГроауГрулзиораороуизлтГроуулГиатзлилит";
const countRec = (str, str1, i, j) => {
    if (str.includes(str1, i) === false)
        return j;
    else
        return countRec(str, str1, str.indexOf(str1, i) + 1, j + 1);
}
const search = (str) => {
    let mass = [];
    mass[0] = countRec(str, "Г", 0, 0);
    mass[1] = countRec(str, "р", 0, 0);
    mass[2] = countRec(str, "о", 0, 0);
    mass[3] = countRec(str, "у", 0, 0);
    mass[4] = countRec(str, "л", 0, 0);
    mass[5] = countRec(str, "и", 0, 0);
    mass[6] = countRec(str, "т", 0, 0);
    return mass;
}
const show = (str) => {
    let n = search(str);
    return Math.min(n[0], n[1], n[2], n[3], n[4], n[5], n[6])
}
console.log(show(groul));


