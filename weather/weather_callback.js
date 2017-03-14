var req = require('request');
url = 'http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1';

function processURLCallback(error, response, body) {
  if (error) {
    console.log('Something went wrong..check URL!!!');
  } else {
    console.log(body);
    console.log();
    console.log('Temprature of ' + body.name + ' is ' + body.main.temp);
    console.log('longitude:' +  body.coord.lon + ' lattitude:' + body.coord.lat);
  }
}
//takes 2 params one JSON object second callback with 3 params refer above
req({
  url: url,
  json: true
}, processURLCallback);
