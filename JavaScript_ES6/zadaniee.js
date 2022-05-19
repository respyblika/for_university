lg = console.log;
'use strict'
//Задание 1
lg('Заданиe 1 ->');
const sub = (a, b) => {
    if (b !== 0) {
        if (a % 10 === 0) a /= 10;
        else --a;
        return sub(a, --b);
    }
    return a;
}
lg(sub(90000400001240, 24)); // для вывода только окончат. результата
lg('--------------------')

//4
lg('Заданиe 4 ->');
const Array2 = ["Миша", "Гена", "Маша", "Олег", "Петя", "Вова", "Вера", "Лена", "Света"];
const Zad = (arr, name, j, i, count) => {
    if (j > i)
        return count;
    else
        arr.push(name[j])
    j++;
    count++;
    return Zad(arr, name, j, i, count)
}
const Res = (name, k) => {
    let j = 1;
    let new_arr = [];
    name.forEach(function (item, index) {
        Zad(new_arr, name, 0, index, j);
    });
    if (j = k)
        return new_arr[j - 1];
}
lg(Res(Array2, 30));
lg('--------------------')

//6
lg('Заданиe 6 ->');
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
lg(sort(OddEven));
lg('--------------------');


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
lg(show(groul));
lg('--------------------')
//8
lg('Заданиe 8 ->');
const Array1 = [
    ["+Миша"],
    ["+Олег"],
    ["+Антон"],
    ["+Таня"],
    ["-Миша"],
    ["Таня:Как дела?"],
    ["Олег:Все хорошо!"],
    ["-Таня"],
    ["+Толя"],
    ["Толя:Я что-то пропустил?"],
];


const trafic = (arr) => {
    let k = 0;
    let sum = 0;
    arr.forEach(function (item, index) {
        if (arr[index][0].includes(':', 0) === true) {
            let a = arr[index][0].split(":");
            sum = sum + a[1].length * (k - 1);
        }
        if (arr[index][0].includes('+', 0) === true)
            k = k + 1;
        if (arr[index][0].includes('-', 0) === true)
            k = k - 1;
    })
    return sum;

};
lg(trafic(Array1));
lg('--------------------');