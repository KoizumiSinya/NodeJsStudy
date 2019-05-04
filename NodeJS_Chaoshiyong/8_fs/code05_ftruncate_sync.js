//使用同步的方式截取文件内容
var fs = require("fs");
var exec = require("child_process").exec;
var child_process = exec("cat ../files/abc.txt", function (error, stdout, stderr) {
    if (error !== null) {
        console.log("error: " + error);
        console.log("stderr: " + stderr);
    } else {
        console.log("文件内容: " + stdout);
        var fd = fs.openSync("../files/abc.txt", "a");

        //截取文件内容。截取的时候并没有马上执行，当closeSync的时候就会执行，只保留截取的部分在文件中
        fs.ftruncateSync(fd, 5);
        console.log("文件描述: " + fd);

        //关闭fs
        fs.closeSync(fd);

        var child_process2 = exec("cat ../files/abc.txt", function (error, stdout, stderr) {
            if (error !== null) {
                console.log("error: " + error);
                console.log("stderr: " + stderr);
            } else {
                console.log("再次查看文件内容: " + stdout);
            }
        });
    }
});
