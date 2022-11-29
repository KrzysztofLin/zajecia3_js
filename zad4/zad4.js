function sum(array) {
    return array.reduce(function (a, b) {return a + b;}, 0);
}

console.log(sum([3, 7, 5, 3.3]))
