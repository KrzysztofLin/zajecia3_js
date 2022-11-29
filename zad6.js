function palindrom(string){
    return string === string.split('').reverse().join('');
}

console.log(palindrom('kajak'))