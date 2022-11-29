//ﬁbonnaci zwracającą kolejne n wyrazów Ciągu Fibonnaciego
//5. Funkcja przyjmuje jeden argument: liczbę wyrazów ciągu do zwrócenia
//    6. Przykład: ﬁbonnaci(9) - wynik [0, 1, 1, 2, 3, 5, 8, 13, 21]


function fibbonaci(number){
    let array = [];
    if (number === 1){
        array = [0];
    }
    if (number === 2){
        array = [0, 1];
    }
    else{
        array = [0, 1]
        for (let i = 2; i < number; ++i){
            let new_number = array[i-1] + array[i-2];
            array.push(new_number);
        }
    }
    return array;
}


console.log(fibbonaci(9))