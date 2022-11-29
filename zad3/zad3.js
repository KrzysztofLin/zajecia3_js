function range(a, b){
    const array= [];
    for (let i = a; i < b; ++i) {
        array.push(i)
    }
    return array
}
console.log(range(3, 90))