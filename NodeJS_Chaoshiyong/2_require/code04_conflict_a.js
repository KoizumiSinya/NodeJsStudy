console.log("a start");
exports.done = false;

//在a中加载b
var b = require("./code04_conflict_b");
console.log("in a, b.done = %j", b.done);

exports.done = true;
console.log("a done");