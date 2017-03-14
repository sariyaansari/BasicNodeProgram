var express =  require('express');
var app = express();

//This needs to be used for example only
app.get('/', function(request, response){
  response.send('Hello Express..');
});

// This make sure that every functionality should be called after it
// var middleware = {
//     requireAuthentication: function(req, res, next) {
//       console.log('private hit..');
//       next();
//     },
//     logger: function(req, res, next) {
//       console.log('Request ' + req.method + ' for URL:' + req.originalUrl
//                    + ' made on ' + new Date().toString());
//       next();
//     }
// }

/*If MW authentication called on top then all below
  function will be passed by it next() function makes sure that it
  should pass if not mentioned then it will block
  */
// app.use(middleware.requireAuthentication);

/** Called logger for each page request */
// app.use(middleware.logger);


app.get('/about', function(request, response){
  response.send('About Us page');
});

//Calling about link only with MW authentication
// app.get('/about',  function(request, response){
//   var aboutus = 'This is sariya who studied lot but result is none';
//   aboutus += ' Now you tell me what I should do';
//   response.send(aboutus);
// });

app.use(express.static(__dirname + '/public'));

// app.listen(3000); // it can also work
app.listen(3000, function() {
  console.log('Server Running!');
})
