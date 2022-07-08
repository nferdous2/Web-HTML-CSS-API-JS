// const business = 450;
// const minister = 550;
// const army = 300;
//simple system
// if (business > minister) {
//     console.log('business is biger ');
// }
// else {
//     console.log('miniser is bigger ');
// }
//3jobn er maje
// if (business > minister && business > army) {
//     console.log('business is bigger');

// }
// else if (minister > business && minister > army) {
//     console.log('minister is bigger');
// }
// else if (army > business && minister < army) {
//     console.log('army is bigger');
// }
//3jon er maje boro barkortr max use hoy
// var max = Math.max(business, minister, army);
// console.log('largest is ', max);
//function diye
function findLarge(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
const larger = findLarge(35, 300);
console.log('result', larger);