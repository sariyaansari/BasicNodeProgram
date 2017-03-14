// This make sure that every functionality should be called after it
var middleware = {
    requireAuthentication: function(req, res, next) {
      console.log('private hit..');
      next();
    },
    logger: function(req, res, next) {
      console.log('Request ' + req.method + ' for URL:' + req.originalUrl
                   + ' made on ' + new Date().toString());
      next();
    }
}

module.exports = middleware;
