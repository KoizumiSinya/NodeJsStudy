//获取操作系统默认的临时文件目录
var os = require("os");
var type = os.type();
var tmpdir = os.tmpdir();
console.log("当前操作系统 " + type + " 下的默认临时文件目录是 " + tmpdir);