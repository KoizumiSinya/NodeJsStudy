//创建文件符号链接
//fs.symlink; fs.symlinkSync
console.log("-- fs symlinkSync --");
console.log();

var exec = require("child_process").exec;
var child_process = exec("cat ../files/123.txt", (error, stdout, stderr) => {
    console.log("123.txt info: " + stdout);
});

var srcPath = "../files/123.txt";
var dstPath = "../files/456.txt";

var fs = require("fs");
fs.symlinkSync(srcPath, dstPath);
console.log("sf.symlinkSync done");
console.log();

//注意这里的456.txt在创建链接之前，是不存在的。由链接自动创建产生
var child_suf = exec("cat ../files/456.txt", (err, stdout, stderr) => {
    console.log("456.txt info: " + stdout);

    var spawn = require("child_process").spawn;
    var ls_txt = spawn("ls", ["-lh", "../files"]);
    ls_txt.stdout.on("data", (data) => {
        console.log("ls_txt stdout: " + data)
    });
    ls_txt.on("error", (code) => {
        console.log("ls_txt error code: " + code);
    });
    ls_txt.on("close", (code) => {
        console.log("ls_txt close code: " + code);
    });

});
