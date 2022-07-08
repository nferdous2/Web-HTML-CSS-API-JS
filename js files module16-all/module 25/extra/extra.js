//button
document.getElementById('deposit-button').addEventListener('click', function () {
    //took input
    const x = document.getElementById('deposit-input');
    const newX = x.value;
    const y = parseFloat(newX);
    //update depototal
    const a = document.getElementById('deposit-total');
    const b = a.innerText;
    const c = parseFloat(b);
    const z = c + y;
    a.innerText = z;
    //balance
    const bt = document.getElementById('balance-total');
    const btx = bt.innerText;
    const pbx = parseFloat(btx);
    const nb = pbx + y;
    bt.innerText = nb;
    x.value = '';
});
