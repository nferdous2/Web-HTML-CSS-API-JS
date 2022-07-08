function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}
var myInches = 132;
var feet = inchToFeet(myInches);
console.log('myInches to feet ', feet);

var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log('dadiInches to feet', feet);
////kilometer
function milesToKilometer(miles) {
    var kilometer = miles * 1.60934;
    return kilometer;
}
var marathon = milesToKilometer(26.2);
console.log('result', marathon);