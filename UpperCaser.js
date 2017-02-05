// HTTP File Server
 
var http = require('http')  
var fs = require('fs')
var map = require('through2-map')

var server = http.createServer(function (req, res) {  
	// request handling logic...  
	var filename = __dirname+req.url;
	if(req.method == "POST")
	{
		//var readstream = fs.createReadStream(req.body);
	
		res.writeHead(200, { 'content-type': 'text/plain' })  
		req.pipe(map(function (chunk) {  
	       return chunk.toString().toUpperCase();
	    })).pipe(res);

		//readstream.on('open', function () {
		//	readstream.pipe(map(function (chunk) {  
	    //   return chunk.toString().toUpperCase();
	    // })).pipe(res);
		//});
		//readstream.on('error', function(err) {
		//	res.end(err);
		//});
	}
})  

server.listen(process.argv[2])