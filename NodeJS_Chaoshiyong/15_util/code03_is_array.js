//验证是否为数组
var util = require("util");
console.log(`[] isArray:${util.isArray([])}`);
console.log(`{} isArray:${util.isArray({})}`);
console.log(`new Array isArray:${util.isArray(new Array())}`);