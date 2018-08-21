var os = require('os');

var toGb = function(f) {
    return(Math.round((f/1024/1024)*100)/100000);
}

console.log('Host: ' + os.hostname());
console.log('15 min. load average: ' + os.loadavg()[2]);
console.log(toGb(os.freemem()) + ' of ' + toGb(os.totalmem()) + ' Gb free');