// HTTP File Server
 
var http = require('http')  
var fs = require('fs')
var map = require('through2-map')
var url = require('url')

var server = http.createServer(function (req, res) {  
	// request handling logic...  
	var filename = __dirname+req.url;
	if(req.method == "GET")
	{
		res.writeHead(200, { 'Content-Type': 'application/json' }) 
		var jsonURL = url.parse(req.url, true)
		if(jsonURL.pathname == '/api/parsetime')
		{
			var date = new Date(jsonURL.query['iso'])
			//var text = '{ "hour" : '+date.getHours() + "," +
			//	'"minute" : '+date.getMinutes() + "," +
			//	'"second" : '+date.getSeconds() + ' }';
			//var obj = JSON.parse(text);
			var obj = {
				 hour : date.getHours(),
				 minute: date.getMinutes(),
				 second: date.getSeconds()
				}
			//	'"minute" : '+date.getMinutes() + "," +
			//	'"second" : '+date.getSeconds() + ' }';
			res.end(JSON.stringify(obj));
		}
		if(jsonURL.pathname == '/api/unixtime')
		{
			var date = new Date(jsonURL.query['iso'])
			var text = '{ "unixtime" : '+date.getTime() + "}"
			var obj = JSON.parse(text);
			res.end(JSON.stringify(obj));
			//obj.stringify().pipe(res);

		}
	}
})  

server.listen(process.argv[2])