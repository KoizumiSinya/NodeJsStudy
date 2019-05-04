console.log("main start");
var a = require("./code04_conflict_a");
var b = require("./code04_conflict_b");

console.log("in main, a.done = %j, b.done = %j", a.done, b.done);

//实质上，因为在main中已经加载了 a，而a被加载的时候 里面要去加载b。b被加载的时候，里面又要去加载a。但是a已经在main加载过了，不会再执行。