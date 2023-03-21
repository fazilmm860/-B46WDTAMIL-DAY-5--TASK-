//ANONYMOUS FUNCTION



const getplaidrome = function (arr) {
    const palidormes = []
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i].toString();
        let reversed = str.split('').reverse().join('');
        if (str === reversed) {
            palidormes.push(str)
        }
    }
    return palidormes
}
let palidrome = getplaidrome(['malayalam', 'hello', 'pop', 'madam', 'palidrome']);
console.log(palidrome);

//IIFE
const getplaidrome1 = (function (arr) {
    const palidormes = []
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i].toString();
        let reversed = str.split('').reverse().join('');
        if (str === reversed) {
            palidormes.push(str)
        }
    }
    return palidormes
})(['malayalam', 'hello', 'pop', 'madam', 'palidrome'])

console.log(getplaidrome1);