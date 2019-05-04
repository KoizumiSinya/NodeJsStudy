//获取当前操作系统类型与平台信息

var os = require("os");
var type = os.type();
var platform = os.platform();
console.log("当前操作系统类型是: " + type);
console.log("当前操作系统平台是: " + platform);
