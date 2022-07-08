var computer = {
    price: 40000,
    storage: '156gb',
    processor: 'intel i5',
    color: 'black'
}
console.log(computer.color);
var computerPrice = computer.price;
console.log(computerPrice);
//set a object property/
computer.price = 22000;
//////////////
computer["price"] = 23000;
/////////////
var priceProperty = "price";
computer[priceProperty] = 19000;
////////////
var storageproperty = 'storage';
computer[storageproperty] = '512gb'
/////
console.log(computer);