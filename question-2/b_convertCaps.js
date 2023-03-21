const titleCapsArray = (array) => {
    return array.map(function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });

}
let convert = titleCapsArray(['i am mohamed fazil', 'age is 24', 'learning mern stack'])
console.log(convert);