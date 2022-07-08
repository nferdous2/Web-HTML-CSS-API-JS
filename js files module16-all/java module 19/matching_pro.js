const products = [
    { name: 'samsung', price: 12000 },
    { name: 'samsung2', price: 32000 },
    { name: 'samsung3', price: 18000 },
    { name: 'samsung4', price: 80 },
    { name: 'samsung5', price: 10000 },
    { name: 'samsung6', price: 100 },
]
function searchProducts(products, searchText) {
    for (const product of products) {
        const name = product.name;
        if
            (name.indexOf(searchText) != -1) {
            console.log(name);
        }

    }
}
const matched = searchProducts(products, 'phone');
console.log(matched);
