
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('If you see me the test is successful!'); //write a response to the client
  res.end(); //end the response
}).listen(3000); 

