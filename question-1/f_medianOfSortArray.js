//anonymous function
const median = function (arr1, arr2) {
    const merged = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = merged.length / 2;
    return merged.length % 2 === 0 ? (merged[mid - 1] + merged[mid]) / 2 : merged[Math.floor(mid)];
};
const medianOfSortArray = median([3, 4, 5, 6, 7, 8, 9], [7, 8, 9, 1, 2, 34, 5, 34, 6])
console.log(medianOfSortArray);

//IIFE
const median1 = (function (arr1, arr2) {
    const merged = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = merged.length / 2;
    return merged.length % 2 === 0 ? (merged[mid - 1] + merged[mid]) / 2 : merged[Math.floor(mid)];
})([3, 4, 5, 6, 7, 8, 9], [7, 8, 9, 1, 2, 34, 5, 34, 6]);

console.log(median1);