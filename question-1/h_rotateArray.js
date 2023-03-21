function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; // handle cases where k > n
    const rotated = [...arr.slice(n - k), ...arr.slice(0, n - k)];
    return rotated;
}
const rotated = rotateArray([1, 3, 5], 6)
console.log(rotated);





// i dont know to do this ... 