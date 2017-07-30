
var http = require ('http'); // look for the http module and will store it as return value
//and it will look in my module folder else it will look other places "global"
var router = require ('./router.js');
var server = http.createServer(router);

server.listen(4000,function(){
  console.log('Server has started on port 4000');
}); // we write this to take a value of four digits and here it's 4000
