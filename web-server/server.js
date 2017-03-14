var express =  require('express');
var app = express();
var middleware = require('./middleware');

/** Called logger for each page request */
app.use(middleware.logger);

//Calling about link only with MW authentication
app.get('/about', middleware.requireAuthentication, function(request, response){
  var aboutus = 'This is sariya who studied lot but result is none';
  aboutus += ' Now you tell me what I should do';
  response.send(aboutus);
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, function() {
  console.log('Server Running!');
})
