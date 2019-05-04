//同步的方式 修改文件长度
var fs = require("fs");
var exec = require("child_process").exec;
var child_process = exec("cat ../files/abc.txt", (error, stdout, stderr) => {
    console.log("abc.txt: ");
    console.log(stdout);
    console.log("length: " + stdout.length);
    console.log(stderr);
    console.log();

    //使用同步 修改文件内容长度
    fs.truncateSync("../files/abc.txt", 5);
    var child_process2 = exec("cat ../files/abc.txt", (error, stdout, stderr) => {
        console.log("截取了长度之后 再次打印输出这个abc.txt: ");
        console.log(stdout);
    });
    //结果是只显示了文件中的前面5个字符，后面的统统不见了。也就是说截取文件这里的操作是对原文件会产生影响的
});