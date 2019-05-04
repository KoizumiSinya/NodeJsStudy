//获取操作系统的发行版本
var os = require("os");
var release = os.release();
console.log("操作系统的发行版本: " + release);