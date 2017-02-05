//Http Client
var url = process.argv[2];
var http = require("http");
var suffix = "";

// Passing in the url as the first argument, print out the responses
var req = http.get(url, function(res) {
  res.setEncoding('utf8');
  var string =""; 
  res.on('data', (chunk) => {
  	string = string.concat(`${chunk}`);
    //console.log(`${chunk}`);
  });
  res.on('end', () => {
  	console.log(string.length);
	console.log(string);
   // console.log('No more data in response.');
  });
});


