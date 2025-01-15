
let startNum;
let endNum; 
const sumAll = function(num1,num2) {
// Handle edge cases
if (num1 < 0 || num2 < 0) {
    return 'ERROR'; // Negative numbers
}
if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return 'ERROR'; // Non-integer numbers
}
if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'ERROR'; // Non-number parameters
}
// determine which number is smaller
let sumNum = 0;
if(num1 < num2){
    startNum = num1;
    endNum = num2;
} else {
    startNum = num2;
    endNum = num1; 
}
// loop through and calculate the sum
for(let i = startNum; i <= endNum; i++){
    sumNum += i; // Add each number to the total sum
}
return sumNum; 
};

// Do not edit below this line
module.exports = sumAll;
