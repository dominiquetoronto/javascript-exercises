const add = function(num1,num2) {
let sum = num1 + num2;
return sum;
};

const subtract = function(num1,num2) {
let difference = num1 - num2; 
return difference;
};

const sum = function(numbersArray) {
  let sumnum = 0; 
  for(let number of numbersArray){
    sumnum += number}
  return sumnum;	
};

const multiply = function(numbersArray) {
    let multnum = 1;
  for(let number of numbersArray){
    multnum *= number}
    return multnum;
};

const power = function(num1, num2) {
	return num1 ** num2; 
};

const factorial = function(num) {
	let fact = 1;
  if(num === 0 || num === 1){
    return 1;
  } else { 
    for(let i = num; i > 1; i--){
      fact *= i; 
    }
  } return fact;
}
 
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
