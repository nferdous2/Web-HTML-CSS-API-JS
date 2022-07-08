//javascript object
const user = { id: 11, name: 'gorib amir', job: 'actor' }
const stringiFind = JSON.stringify(user)
// console.log(stringiFind);
// console.log(user);
const shop = {
    name: 'Alia store',
    adress: 'road 2',
    profit: 1000,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'aLia',
        profession: 'actor'
    },
    isExpensive: false
};
const shopStringiFind = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringiFind);
//convert at js
const converted = JSON.parse(shopStringiFind);
console.log(converted.owner);