
function positiveNegative(num) {
    let numbers = [0];
    for (let i = 0; i < num.length; i++) {
        if (num[i] < 0) {
            numbers.push(num[i]);
        }
        else if (num[i] > 0) {
            numbers.push(num[i]);
        }

        else {
            console.log(no);
        }
    }
    return numbers;
}
let numberTook = positiveNegative([1, -1, 3, -4, 5]);
console.log(numberTook);