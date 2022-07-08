var a = 5;
var b = 7;
console.log(a, b);
//first approch
var temp = a;
a = b;
b = temp;
console.log(a, b);
//destructuring
[a, b] = [b, a];
console.log(a, b);