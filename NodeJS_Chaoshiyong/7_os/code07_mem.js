//获取操作系统的内存状态
var os = require("os");
var totalMem = os.totalmem();
console.log("操作系统的内存总量: " + totalMem + " byte");
console.log("操作系统的内存总量: " + parseInt(totalMem / 1024 / 1024) + " Mb");
console.log("操作系统的内存总量: " + parseInt(totalMem / 1024 / 1024 / 1024) + " Gb");

var freeMem = os.freemem();
console.log("操作系统的内存剩余量: " + freeMem + " byte");
console.log("操作系统的内存剩余量: " + parseInt(freeMem / 1024 / 1024) + " Mb");
console.log("操作系统的内存剩余量: " + parseInt(freeMem / 1024 / 1024 / 1024) + " Gb");