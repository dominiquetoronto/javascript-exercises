const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9;
  let celsiusFinal = +celsius.toFixed(1);
  return celsiusFinal;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = celsius * 9/5 + 32;
  let fahrenheitFinal = +fahrenheit.toFixed(1);
  return fahrenheitFinal;
};


// 
// // Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
