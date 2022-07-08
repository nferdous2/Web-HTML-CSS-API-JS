const numbers = [44, 23, 534, 32, 54, 5, 78];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
}
console.log(sum);

///using function
function arrayTotal(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const total = arrayTotal([12, 3, 2]);
console.log('aray total ',total);