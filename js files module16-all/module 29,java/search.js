const products = [
    'Dell hardcore i29 200GB laptop',
    'iPhone 1TB camera flashbslck phone',
    'Laptop with black Camera',
    '1X59 lenova commercial Yoga Laptop',
    'Laptop supernova laptop',
    'HTC low price phone',
    'purpel color phone with Laptop'
];
const searching = 'dell';
// const searching = 'laptop';
//indexOf
const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        output.push(product)
    }
}
//console.log(output)
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
   // output.push(product)
    }
}
//starts with
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        // output.push(product);
    }
}
console.log(output);
