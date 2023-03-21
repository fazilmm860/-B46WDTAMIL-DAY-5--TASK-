const removeDuplicate = function (arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < unique.length; j++) {
            if (arr[i] === unique[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            unique.push(arr[i]);
        }
    }
    return unique
}
const duplicate = removeDuplicate([1, 2, 4, 5, 6, 6, 1, 2, 7, 9])
console.log(duplicate);


//IIFE

const removeDuplicate1 = (function (arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < unique.length; j++) {
            if (arr[i] === unique[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            unique.push(arr[i]);
        }
    }
    return unique
})([1, 2, 4, 5, 6, 6, 1, 2, 7, 9]);

console.log(removeDuplicate1);


