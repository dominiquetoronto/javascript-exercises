const reverseString = function(text) {
    const array = text.split('');
    let reversed = '';
    for (i = array.length - 1; i >= 0; i--){
        reversed += array[i];
    } return reversed;
}
        
    

// Do not edit below this line
module.exports = reverseString;
