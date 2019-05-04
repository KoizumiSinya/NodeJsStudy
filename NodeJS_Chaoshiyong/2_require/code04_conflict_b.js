console.log("b start");
exports.done = false;

//在b中加载a
var a = require("./code04_conflict_a");
console.log("in b, a.done = %j", a.done);

exports.done = true;
console.log("b done");