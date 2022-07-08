function addNum(num1, num2) {
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    return result;
}
const sum = addNum(23, 22, 22, 2);
// console.log(sum);
function getFullName(firstName, lastName) {
    let fullName = ' ';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('hanif', 'shoket','bin','aa')//adding values
console.log(name)