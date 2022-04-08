var arr = ["Я", "когда-нибудь", "это", "пойму"];

function printf(arr) {
    var t = " "
    for (var i = 0; i < arr.length; i++)
        t += arr[i] + " ";
    console.log(t);
}

printf(arr)
