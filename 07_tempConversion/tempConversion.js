const ftoc = function(f) {
  fahrenheitToCelsius = ((f - 32) * 5) / 9;
  return Math.round(fahrenheitToCelsius * 10) / 10;
};

const ctof = function(c) {
  celsiusToFahrenheit = ((c * 9) / 5) + 32
  return Math.round( celsiusToFahrenheit * 10) / 10;
};


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};