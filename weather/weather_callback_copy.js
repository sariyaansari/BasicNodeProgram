var weatherCallback = require('./testWeatherUsingCallback.js');

weatherCallback(function (requestResult) {
  console.log(requestResult);
});
