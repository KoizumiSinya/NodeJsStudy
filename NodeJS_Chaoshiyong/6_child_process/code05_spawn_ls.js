//创建子进程 查看用户目录列表
var spawn = require("child_process").spawn;
var ls_var = spawn("ls", ["-lh", "/usr"]);

//对控制台输出对象stdout进行捕获数据监听
ls_var.stdout.on("data", function (data) {
    console.log("data is: " + data);
});

//监听系统的错误事件
ls_var.on("error", function (code) {
    console.log("error code: " + code);
});

//监听系统的close事件
ls_var.on("close", function (code) {
    console.log("close with code: " + code);
});

//监听exit事件
ls_var.on("exit", function (code) {
    console.log("exit with code: " + code);
});


//通常正常的退出时code定义为0；而非正常退出时code均不为0，一般是1~3