//nodejs中对文件系统模块提供了 fs.chown; fs.chownSync; fs.fchown; fs.fs.fchownSync; 四个方法来更改文件的所有权
var fs = require("fs");
var statSync_process = fs.statSync("../files/abc.txt");
console.log("abc.txt info: ");
console.log(statSync_process);

//更改文件所有权（同步方法）
fs.chownSync("../files/abc.txt", 1001, 1001);
var statSync_suf = fs.statSync("../files/abc.txt");
console.log("abc.txt change info: ");
console.log(statSync_suf);