//nodejs使用child_process模块 提供了四种方法来创建子进程 spawn/exec/execFile/fork
var spawn = require("child_process").spawn;
var ls_var = spawn("ls", ["-lh", "/var"]);//执行 "ls-lh/var" 命令
ls_var.stdout.on("data", function (data) {
    console.log("stdout: " + data);
});
