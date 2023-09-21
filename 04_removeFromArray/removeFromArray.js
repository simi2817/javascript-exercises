const removeFromArray = function(arr, ...args) {
    const finalArray = [];
    arr.map((value) => !args.includes(value) ? finalArray.push(value) : 0);
    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
