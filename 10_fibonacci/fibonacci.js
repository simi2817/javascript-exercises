const fibonacci = function(index) {
    let n1 = 0;
    let n2 = 1;
    let fibonacciSum = 0;
    if(index < 0)   return 'OOPS';
    for(let i = 0; i < index; i++) {
        n1 = n2;
        n2 = fibonacciSum;
        fibonacciSum = n1 + n2;
    }

    return fibonacciSum;

};

// Do not edit below this line
module.exports = fibonacci;
