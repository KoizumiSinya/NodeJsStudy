var cp = require("child_process");

//生成一个命令 来查询当前目录的内容， 这个命令的目标路径"."就表示的是当前目录
cp.execFile("/bin/ls", ["-lh", "."], function (error, stdout, stderr) {
    if (error !== null) {
        console.log("execFile error: " + error);
        console.log("execFile stderr: " + stderr);
    } else {
        console.log("当前目录: ");
        console.log(stdout);
    }
});