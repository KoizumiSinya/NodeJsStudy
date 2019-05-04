//使用同步的方式 打开文件


//之前学习的使用子进程 的方式 使用cat命令去查看一个文件的内容
var exec = require("child_process").exec;
var child_process = exec("cat ../files/abc.txt", function (error, stdout, stderr) {
    if (error !== null) {
        console.log("error: " + error);
        console.log("stderr: " + stderr);
    } else {
        //cat查看打印出来的是txt文本的全部文字内容
        console.log("stdout: " + stdout);
    }
});

//学习使用openSync
var fs = require("fs");
var fileOpen = fs.openSync("../files/abc.txt", "a");//"a"表示打开文件的方式

//openSync 查看打印出来的是txt文本的字符长度
console.log("文件描述: " + fileOpen);
fs.closeSync(fileOpen);
console.log("关闭fs之后，文件描述: " + fileOpen);
