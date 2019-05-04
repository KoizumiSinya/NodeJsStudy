//查看用户目录出现错误的处理方法
var spawn = require("child_process").spawn;
var ls_err = spawn("ls", ["-lh", "/err"]);// /err 是表示指定的用户目录

//对控制台输出对象stdout进行捕获数据监听
ls_err.stderr.on("data", function (data) {
    console.log("stderr is: " + data);
});

//监听系统的错误事件
ls_err.on("error", function (code) {
    console.log("error code: " + code);
});

//监听系统的close事件
ls_err.on("close", function (code) {
    console.log("close with code: " + code);
});

//监听exit事件
ls_err.on("exit", function (code) {
    console.log("exit with code: " + code);
});

