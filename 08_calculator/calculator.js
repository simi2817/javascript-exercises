const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	if(arr.length === 0)  return 0;
  let sum = 0;
  for(let i of arr)
    sum += i;
  return sum;
};

const multiply = function(arr) {
  let product = 1;
  for(let i of arr)
    product *= i;
  return product;

};

const power = function(num, pow) {
	let result = 1;
  while(pow > 0) {
    result *= num;
    pow--;
  }
  return result;
};

const factorial = function(num) {
	let factorial = 1;
  while(num > 0) {
    factorial *= num;
    num--;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
