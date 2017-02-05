/** My First IO **/


var modular = require('./MakeItModular');
var suffix = "";

function callbackMethod(err, files){
	for (var i= 0; i < files.length; i++)
	{	
		console.log(files[i]);
	}
}
suffix = process.argv[3];
modular(process.argv[2], process.argv[3], callbackMethod); 

