var fs = require('fs');


var handlers = require('./handlers.js');


function router(req, res) {
  var url = req.url; // string that the user type in address line
  if (url === '/') {
    handlers.handleHomeRoute(req, res);
  } else if (url.startsWith('/public')) {
    handlers.handlePublic(req, res);
  } else {
    handlers.handleNotFound(req, res);
  }
}
module.exports = router;
