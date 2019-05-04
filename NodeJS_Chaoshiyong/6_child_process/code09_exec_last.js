//创建子进程统计系统登录次数

var exec = require("child_process").exec;
var last = exec("last | wc -l");
last.stdout.on("data", function (data) {
    console.log("系统登录次数统计: " + data);
});
last.on("exit", function (code) {
    console.log("子进程一关闭 code: " + code);
});