var fs = require("fs");
var time = process.hrtime();
var data = fs.readFileSync("./test3.js");
var diff = process.hrtime(time);
console.log("读取文件操作耗费%d", diff[0] * 1e9 + diff[1]);