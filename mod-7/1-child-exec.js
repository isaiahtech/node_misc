var exec = require('child_process').exec;

// Edited because windows
var child = exec('systeminfo | find "System Boot Time"', function(err, stdout, stderr) {
    if (err) {
        console.log('Error: ' + stderr);
    } else {
        console.log('Output is: ' + stdout);
    }
});

console.log("PID is " + child.pid);