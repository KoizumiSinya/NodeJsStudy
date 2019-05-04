//查看物理内存使用状态
var spawn = require("child_process").spawn;
var free = spawn("free", ["-m"]);

free.stdout.on("data", function (data) {
    console.log("标准输出 data is: " + data);
});

free.stderr.on("data", function (data) {
    console.log("标准错误输出: " + data);
});

free.on("exit", function (code, signal) {
    console.log("子进程已退出， code: " + code);
});

//代码有错误，无法执行