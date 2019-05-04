//获取网络接口信息
var os = require("os");
var networkInfo = os.networkInterfaces();
console.log("网络接口信息:\n%j ", networkInfo);