const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
const sumofarray = sumArray([1, 3, 5, 45, 5])
console.log(sumofarray);