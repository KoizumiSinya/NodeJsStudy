//读取文件符号链接
//fs.readlink; fs.readlinkSync

var srcPath = "../files/123.txt";
var linkPath = "../files/456.txt";

var fs = require("fs");
var linkStr = fs.readlinkSync(linkPath);
console.log("read linkPath: " + linkStr);

var srcPath2 = fs.readlinkSync(srcPath);
console.log("read srcPath: " + srcPath2);
