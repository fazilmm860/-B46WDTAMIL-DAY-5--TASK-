//ANONYMOUS FUNCTION:-

let oddNum = function (num) {
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 !== 0) {
            console.log(num[i]);
        }
    }

}
oddNum([3, 5, 8, 1, 5, 6]);

//IIFE
let oddNumb = (function (num) {
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 !== 0) {
            console.log(`IIFE:${num[i]}`);
        }
    }

})([2, 5, 3, 6, 4, 1, 8, 9, 3, 1]);
