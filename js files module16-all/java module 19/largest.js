/*function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {

        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const ages = [12, 23, 43, 4, 5];
const oldest = largestElement(ages);
const oldest2 = largestElement([-2, -6, -17]);
console.log('oldest2 ', oldest2);*/
//find lowest element
const names = ['abida', 'abcs', 'samiakhatun', 'maisha khatun'];
function largestNames(names) {
    let largest = names[0];

    for (i = 0; i < names.length; i++) {
        if (names[i].length > largest.length) {
            largest = names[i];
        }
    }
    return largest;
}

const giveName = largestNames(names)
console.log('longest name ', giveName);