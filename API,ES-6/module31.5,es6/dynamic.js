//dynamic vhabe chnage kora

const name1 = "aaa";
const name2 = "vvv";
let value = 8;
const full = `${name1}${name2} ${value * 4}`
// console.log(full)


//spread operator
const name = ["aa", "vvv", 'dd'];
const x = name;//for copy,,,refarence ke copy korlo
const y = [...name];//value copy korbe
// const x=[...name] //for display as same
console.log(y)
