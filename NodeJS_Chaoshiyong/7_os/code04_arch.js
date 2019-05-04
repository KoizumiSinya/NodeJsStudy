//获取操作系统的架构
var os = require("os");
var arch = os.arch();
console.log("操作系统的架构:" + arch);