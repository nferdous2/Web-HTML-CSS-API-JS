// let factorial =1;
// for(let i=1; i<=5; i++){
//     factorial = factorial*i;
// }
// console.log(factorial);
function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}
var firstFactorial = factorial(7);
console.log('First ', firstFactorial);
var secondFactorial = factorial(5);
console.log('Second ', secondFactorial);
var thirdFactorial = factorial(9);
console.log('Third ', thirdFactorial);