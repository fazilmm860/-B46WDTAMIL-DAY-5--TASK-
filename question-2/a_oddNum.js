let oddNum = (num) => {
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 !== 0) {
            console.log(num[i]);
        }
    }

}
oddNum([3, 5, 8, 1, 5, 6]);