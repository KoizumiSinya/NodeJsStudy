//获取操作系统主机名
var os = require("os");
var hostname = os.hostname();
console.log("操作系统主机名: " + hostname);