function bringSingara(taka) {
    console.log('taka');
    var singaraPrice = 20;
    var singaraQuantty = taka / singaraPrice
    return singaraQuantty;
}
var money = 250;
var singara = bringSingara(money);
console.log('ai nen singara', singara);