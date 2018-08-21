var request = require('request');
var fs = require('fs');
var zlib = require('zlib');

// Here we request a page, and pipe the output to stdout (cli) directly

//var s = request('http://www.pluralsight.com/');
//
//s.pipe(process.stdout);

// Alternatively, we can combine those lines into one to do the same thing

//request('http://pluralsight.com/').pipe(process.stdout);

// By importing 'fs' we can save the html content to a file

request('http://pluralsight.com/').pipe(fs.createWriteStream('pluralsight.html'));

// Finally, we can send this through a gzip stream before writing to a file (compressing file)

request('http://pluralsight.com/').pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.html.gz'));