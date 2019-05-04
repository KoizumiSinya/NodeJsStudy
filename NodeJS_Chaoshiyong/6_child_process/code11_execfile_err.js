//使用execFile方法绑定错误事件
var cp = require("child_process");

// /err 是一个不存在的文件夹路径，目的就是用来体验读取错误不存在文件夹路径时候的监听
cp.execFile("/bin/ls", ["-lh", "/err"], function (error, stdout, stderr) {
    if (error !== null) {
        console.log("execFile error: " + error);
        console.log("execFile stderr: " + stderr);
    } else {
        console.log("当前目录的内容: ");
        console.log(stdout);
    }
});