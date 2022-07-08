const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];
function remove(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        console.log(element);
    }
    for (const element of names) {
        console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element)
        }
    }
    return unique;
}