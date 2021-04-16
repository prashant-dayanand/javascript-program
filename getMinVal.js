function getMinVal(numbers) {
    let currentVal = numbers[0];
    for(let number of numbers) {
        if(number < currentVal) {
            currentVal = number;
        }
    }
    return currentVal;
}

const arrayNum = [22,32,5,53,6,7,43,2,643,64,3];

console.log(getMinVal(arrayNum))