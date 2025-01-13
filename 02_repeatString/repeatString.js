const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR'; // Handle negative numbers
    }
    let result = '';
    for(let i = 0; i < num; i++) {
        result += string; // Concatanate string to result
    } 
    return result; // Return result after the loop
    };

// Do not edit below this line
module.exports = repeatString;
