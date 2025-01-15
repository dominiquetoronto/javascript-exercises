const leapYears = function(year) {
if(year % 400 === 0){ 
    return true; // Divisible by 400: Leap year
} else if(year % 100 === 0){ 
    return false; // Divisible by 100 but not 400: Not a leap year
} else if(year % 4 === 0){
    return true // Divisible by 4 but not 100: Leap year
} else {return false} // Not divisible by 4: Not a leap year
}; 
// > Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless
//  they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)


// Do not edit below this line
module.exports = leapYears;


