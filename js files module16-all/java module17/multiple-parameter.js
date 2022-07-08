//2 numbers add
function addNumbers(number1, number2) {
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
}
var firstNumber = 35;
var secondNumber = 47;
var result = addNumbers(firstNumber, secondNumber);
console.log('result value: ', result);
//
function multiplyNumbers(num1, num2) {
    var result = num1 * num2;
    return result;
}
var total = multiplyNumbers(5, 100);
console.log('result value: ', total);
//
function decreaseNumbers(num1, num2) {
    var result = num1 - num2;
    return result;
}
var total = decreaseNumbers(30, 70)
console.log('result value: ', total);
//

function divisionNumbers(num1, num2) {
    var result = num1 / num2;
    return result;
}
var total = divisionNumbers(30, 25)
console.log('result value: ', total);