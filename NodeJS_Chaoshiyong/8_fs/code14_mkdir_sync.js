//创建与删除目录
// fs.mkdir; fs.rmdir; fs.mkdirSync; fs.rmdirSync

var fs = require("fs");
var mkdirSync = "../files/temp";//定义目录
fs.mkdirSync(mkdirSync);

var spawn = require("child_process").spawn;
var ls_dir = spawn("ls", ["-lh", "../files"]);

ls_dir.stdout.on("data", (error, stdout, stderr) => {
    console.log("mk stdout: " + stdout);

    console.log("delete dir");
    fs.rmdirSync(mkdirSync);
    var ls_dir_rm = spawn("ls", ["-lh", "../files"]);
    ls_dir_rm.stdout.on("data", (error, stdout, stderr) => {
        console.log("rm stdout: " + stdout);
    });
});
