const sumAll = function(startValue, stopValue) {
    if(typeof startValue !== 'number' || typeof stopValue !== 'number')
        return 'ERROR';
    if(startValue < 0 || stopValue < 0)
        return 'ERROR';
    if(startValue > stopValue) {
        const swapTemp = startValue;
        startValue = stopValue;
        stopValue = swapTemp;
    }
    let finalSum = 0;
    for(let i = startValue; i <= stopValue; i++)
        finalSum += i;
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
