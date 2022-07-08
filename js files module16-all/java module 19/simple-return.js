function fibonacciSeries(num) {
    if(typeof num !='number'){
        return 'please give a number'
    }
    if(num<2){
        return 'please enter a positive  number greater than 1'
    }
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const fiboSeries = fibonacciSeries(1);
console.log(fiboSeries);