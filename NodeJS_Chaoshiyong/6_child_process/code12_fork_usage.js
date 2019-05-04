//使用fork方法获取cpu信息
var fork = require("child_process").fork;
var cpu = require("os").cpus();
console.log("当前设备cpu内核数量: " + cpu.length);
for (var i = 0; i < cpu.length; i++) {
    console.log("fork a new child_process now... " + i);
    fork("../1_console/code01_hello_world.js");//开启一个新的子进程，去调用之前的js文件，输出hello world
}
