// for(var i =1 ; i<=7; i++){
//     // console.log(i);
//     var fact = 1;
//     fact = fact*i;

// }

function factorial(number){
let fact = 1 ;
for(let i =1; i<=number ; i++){
fact = fact*i;
}
return fact;
}
const first = factorial(7);
console.log(first)