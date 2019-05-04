//使用fork方法实现进程间的通信
var cp = require("child_process");
var child = cp.fork("code13_fork_message.js");//fork一个子进程
child.on("message", function (mes) {
    console.log("main get message is:%j ", mes);
});
child.send({main: "sub"});//向子进程发送一个数据