var http = require('http');

var options = {
    host: 'www.f5.com',
    port: 80,
    path: '/',
    method: 'GET'
};

console.log("Going to make a request...");

http.get(options, function(response) {
    console.log(response.statusCode);
    response.pipe(process.stdout);
});

//req.end();