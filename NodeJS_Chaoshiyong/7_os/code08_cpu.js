//获取cpu内核信息
var os = require("os");
var cpu = os.cpus();
console.log("操作系统的cpu内核信息: \n%j", cpu);