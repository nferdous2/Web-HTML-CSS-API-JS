const numbers = [1, 2, 3, 5, 4, 3, 2, 5, 6];
function remove(numbers) {
    const unique = [];
    for (const element of numbers) {
        console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNames = remove(numbers);
console.log(uniqueNames);