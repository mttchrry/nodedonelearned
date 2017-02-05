//NodeTCP

var net = require('net')  
var server = net.createServer(function (socket) {  
	// socket handling logic  
	date = new Date();
	var dateStr = date.getFullYear()+"-"+("0" + (date.getMonth() + 1)).slice(-2)+"-"+("0" + (date.getDate())).slice(-2)+
		" "+("0" + (date.getHours())).slice(-2)+":"+("0" + date.getMinutes()).slice(-2)+"\n"
	socket.write(dateStr)
	socket.end()
})  
server.listen(process.argv[2]) 