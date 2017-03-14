
var req = require('request');
url = 'http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1';
var resultcallback = undefined;
function processURLCallback(error, response, body) {
  if (error) {
    resultcallback('Something went wrong..check URL!!!');
  } else {
    resultcallback(body);
    resultcallback();
    resultcallback('Temprature of ' + body.name + ' is ' + body.main.temp);
    resultcallback('longitude:' +  body.coord.lon + ' lattitude:' + body.coord.lat);
  }
}

module.exports = function (callback) {
  resultcallback = callback;
  //takes 2 params one JSON object second callback with 3 params refer above
  req({
    url: url,
    json: true
  }, processURLCallback);
}
