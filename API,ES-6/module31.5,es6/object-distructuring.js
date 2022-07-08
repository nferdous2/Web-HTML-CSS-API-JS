/*
const person={name:'komola',id:'10',age:'30'}
const {name,id,age}=person;
console.log(person.name)*/
const person = {
    name: 'komola',
     id: '10',
     age: '30',
friends: {
        name: 'aabb',
    id: '20'
    }
}
// const { name, id, age } = person.
const { name, id, age } = person.friends;
console.log(name)