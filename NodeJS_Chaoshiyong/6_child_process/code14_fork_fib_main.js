//使用fork实现斐波那契数列
var cp = require("child_process");
var child = cp.fork("code14_fork_fib.js");//通过fork启动一个新的子进程，并执行这个js文件

child.on("message", function (msg) {
    console.log("斐波那契数列: " + msg.result);
});

var input = parseInt("10");
child.send({input: 1});
for (var i = 1; i < input; i++) {
    child.send({input: i});
}

