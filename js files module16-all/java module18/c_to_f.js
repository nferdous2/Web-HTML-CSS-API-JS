function fahrenheitToCelsius(fahrenheit) {
    var celsius = (5 / 9) * (fahrenheit - 32);
    return celsius;
}
var result = fahrenheitToCelsius(-40);
console.log('Celsius ', result);
// function celsiusToFahrenheit(celsius) {
//     var fahrenheit = celsius * (9 / 5) + 32;
//     return fahrenheit;
// }
// var result = celsiusToFahrenheit(-40);
// console.log('Fahrenheit ', result);