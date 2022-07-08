// const number = 5;
// const remainder = number % 2;
// console.log(remainder == 0);
// console.log(number % 2 == 0);

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
// const myNumber = 1641;
// const isMyNumberEven = isEven(myNumber);
const herNumber = 1892;
const isHerNumberEven = isEven(herNumber);
console.log('is her number even', isHerNumberEven);
//odd function
function isOdd(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}
const herNumberOdd = 1892;
const isHerNumberOdd = isOdd(herNumber);
console.log('is her number Odd', isHerNumberOdd);