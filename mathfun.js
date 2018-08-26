var maxTime = 1000;

var evenDoubler = function(v, callback) {
    //code
};

var evenDoublerSync = function(v) {
    if (v%2) {
        throw(new Error("Odd input"));
    } else {
        return(v*2);
    }
};

module.exports.evenDoubler = evenDoubler;
module.exports.evenDoublerSync = evenDoublerSync;

module.exports.foo = "bar";

// additional comments added to make file unique
//another test