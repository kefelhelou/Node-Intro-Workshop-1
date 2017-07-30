
var fs = require('fs');
var contentTypes = {
  css: 'text/css',
  js: 'application/javascript',
  ico: 'image/x-icon',
};


function handleHomeRoute (req,res){
  fs.readFile(__dirname + '/../public/index.html',function(err,data){
    if (err){
      res.writeHead(500,{'Content-Type':'text/html'});
      res.end('<h1> Internal Server Error </h1>');//...
    }else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  });
}

function handlePublic (req,res){
  var url = req.url;
  var parts = url.split('.');
  var fileExtension = parts[parts.length - 1];
  console.log(fileExtension);
        fs.readFile(__dirname + '/..' + url,function(err,data){
        if (err){
          res.writeHead(500,{'Content-Type':'text/html'});
          res.end('<h1> Internal Server Error </h1>');//...
        } else {
          res.writeHead(200, {'Content-Type': contentTypes[fileExtension]});
          res.end(data);
        }
      });
}

function handleNotFound (req,res){
  res.writeHead(404,{'Content-Type':'text/html'});
  res.end('<h1> Not Found </h1>');//...
}
module.exports = {
  handleHomeRoute:handleHomeRoute,
  handleNotFound:handleNotFound,
  handlePublic:handlePublic,
}
