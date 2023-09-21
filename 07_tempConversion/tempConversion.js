const convertToCelsius = function(temperature) {
  const celsius = parseFloat(((temperature - 32) * 5 / 9).toFixed(1));
  return celsius;
};

const convertToFahrenheit = function(temperature) {
  const fahrenheit = parseFloat(((temperature / 5) * 9 + 32).toFixed(1));
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
