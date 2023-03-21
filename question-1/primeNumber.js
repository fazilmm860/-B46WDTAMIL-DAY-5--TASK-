//ANONYMOUS FUNCTION

const getPrimes = function (arr) {
    const prime = [];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let isPrime = true;
        if (num <= 1) {
            isPrime = false;
        }
        for (let j = 2; j <= Math.sqrt(num); j++) {
            if (num % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            prime.push(num);
        }
    }
    return prime;
}
const primenumber = getPrimes([1, 2, 4, 67, 89, 4, 4, 5, 1, 11, 7, 15])
console.log(primenumber);

//IIFE

const getPrimes1 = (function (arr) {
    const prime = [];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let isPrime = true;
        if (num <= 1) {
            isPrime = false;
        }
        for (let j = 2; j <= Math.sqrt(num); j++) {
            if (num % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            prime.push(num);
        }
    }
    return prime;
})([1, 2, 4, 67, 89, 4, 4, 5, 1, 7, 15])

console.log(getPrimes1);