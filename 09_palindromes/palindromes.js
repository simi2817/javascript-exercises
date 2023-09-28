const palindromes = function (inputStr) {
    const onlyString = inputStr.toLowerCase().split('').filter(str => str.match(/[A-Za-z]/)).join('');
    const reversedString = onlyString.split('').reverse().join('');
    if(reversedString === onlyString)
        return true;
    else
        return false;
};

// Do not edit below this line
module.exports = palindromes;
