const phones = [
    {
        name: 'samsung s5', price: 45000, camera: 10, storage: 32
    },
    {
        name: 'walton m32', price: 15000, camera: 10, storage: 32
    },
    {
        name: 'redmi m3', price: 12000, camera: 10, storage: 32
    },
    {
        name: 'nokia ', price: 17000, camera: 10, storage: 32
    },
    {
        name: 'htc', price: 4000, camera: 10, storage: 32
    },
    {
        name: 'oppo f12', price: 25000, camera: 10, storage: 32
    },
];
let cheapest = phones[0];
for (const phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }

}
console.log(cheapest);