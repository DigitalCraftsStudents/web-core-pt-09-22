const numberArray = [1, 4, 8, 9, 11, 12, 15, 23, 50];

function printEvenNumbers(array) {
    for (const number of array) {
        if (number % 2 === 0) {
            console.log(number);
        }
    }
}

const printEvenNumbers = (array) => {
    for (const number of array) {
        if (number % 2 === 0) {
            console.log(number);
        }
    }
}

printEvenNumbers(numberArray)