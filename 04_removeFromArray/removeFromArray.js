const removeFromArray = function(array, ...valuesToRemove) {
    
    let staying = []; 
    for( let i = 0; i < array.length; i++){
        if(!valuesToRemove.includes(array[i])) {
            staying.push(array[i])
        }
    }
    return staying;
};

// Do not edit below this line
module.exports = removeFromArray;
