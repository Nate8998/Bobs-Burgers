const assertEquals = (val1, val2) => val1 === val2;

const evenNumbersInArray = inputArray => {
    let numberOfEvens = 0
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] % 2 === 0) {
            numberOfEvens++;
        }
    }
    return numberOfEvens;
}
module.exports = {
    evenNumbersInArray
}