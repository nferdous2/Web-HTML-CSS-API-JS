const arr = [2, 3, 5, 4]
const [num1, num2] = arr;
console.log(num1)

//aarray>>object>>property
const person = [{
    name: 'komola', id: '10'
},
{ name: 'kola', id: '50' },
{ name: 'mola', id: '20' },
{ name: 'lkka', id: '30' }]

/* for(let i=0; i<person.length;i++){
     const obj =person[i];
     const name = obj.name;
     console.log(name)
 }*/
const [person1, person2, person3, person4] = person//array destructuring
console.log(person1.name)
console.log(person2.name)
console.log(person3.name)
console.log(person4.name)