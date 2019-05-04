//使用异步的方式打开文件
var exec = require("child_process").exec;
var child_process = exec("cat ../files/abc.txt", function (error, stdout, stderr) {
    if (error !== null) {
        console.log("error: " + error);
        console.log("stderr: " + stderr);
    } else {
        console.log("stdout: " + stdout);
    }
});

var fs = require("fs");
fs.open("../files/abc.txt", "a", function (err, fd) {
    if (err) {
        throw err;
    } else {
        console.log("文件描述: " + fd);
    }
    fs.close(fd, function () {
        console.log("关闭fs之后 文件描述: " + fd);
    })
});