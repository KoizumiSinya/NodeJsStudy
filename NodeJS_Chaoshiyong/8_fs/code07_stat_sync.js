//在nodejs中 有4个方式获取文件信息 fs.stat(); fs.statSync; fs.fstat; fs.fstatSync;
//使用同步的方式，获取文件信息
var fs = require("fs");
var statSync = fs.statSync("../files/abc.txt");
console.log("abc.txt info: ");
console.log(statSync);