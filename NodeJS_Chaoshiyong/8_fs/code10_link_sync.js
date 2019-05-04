//创建与删除文件 硬链接
//nodejs 提供了 fs.link; fs.linkSync; fs.unlink; fs.unlinkSync;

var exec = require("child_process").exec;
var child_process = exec("cat ../files/123.txt", (error, stdout, stderr) => {
    console.log("123.txt info: " + stdout);
});

var srcpath = "../files/123.txt";
var dstpath = "../files/456.txt";

var fs = require("fs");
//链接文件 使用同步的方式
fs.linkSync(srcpath, dstpath);

var child_suf = exec("cat ../files/456.txt", (error, stdout, stderr) => {
    console.log("link info: " + stdout);

    //创建了连接之后又把链接断开
    fs.unlinkSync(dstpath);
    var spawn = require("child_process").spawn;
    var ls_txt = spawn("ls", ["-lh", "txtlink"]);
    ls_txt.stdout.on("data", (data) => {
        console.log("ls-lh/txtlink stdout: " + data);
    });
    ls_txt.on("error", (code) => {
        console.log("error :" + code)
    });
    ls_txt.on("close", (code) => {
        console.log("close :" + code)
    });
});
