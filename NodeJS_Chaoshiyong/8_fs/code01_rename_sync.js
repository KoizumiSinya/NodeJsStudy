//使用同步的方式 对文件进行重命名
var fs = require("fs");
console.time("fs-rename");
fs.renameSync("../files/abc.txt", "../files/abc.txt");//使用同步的方式对指定路径下的文件进行重命名,
// 这里暂时保持重命名后还是原来的名字;实质上如果是重命名为新的名字的话 耗时是比同样的名字要花费的时间多一点
console.timeEnd("fs-rename");


//重命名之后测试一下是否存在。使用子进程进行文件读取
var exec = require("child_process").exec;
var catFile = exec("cat ../files/abc.txt", function (error, stdout, stderr) {
    console.log("stdout: " + stdout);
    console.log("stderr: " + stderr);
});

