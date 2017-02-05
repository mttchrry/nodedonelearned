// HTTP File Server
 
var http = require('http')  
var fs = require('fs')

var server = http.createServer(function (req, res) {  
	// request handling logic...  
	var filename = process.argv[3];
	var readstream = fs.createReadStream(filename);
	res.writeHead(200, { 'content-type': 'text/plain' })  
	readstream.on('open', function () {
		readstream.pipe(res);
	});

	readstream.on('error', function(err) {
		res.end(err);
	});
})  

server.listen(process.argv[2])