//更改文件权限
//文件体统模块提供了 fs.chmod; fs.chmodSync; fs.fchmod; fs.fchmodSync 四个方法可以实现更改文件的权限
var fs = require("fs");
var spawn = require("child_process").spawn;
var ls_txt_pre = spawn("ls", ["-lh", "../files/abc.txt"]);

ls_txt_pre.stdout.on("data", (data) => {
    console.log("stdout: " + data);
    fs.chmodSync("../files/abc.txt", 777);

    var ls_txt_suf = spawn("ls", ["-lh", "../files/abc.txt"]);
    ls_txt_suf.stdout.on("data", (data) => {
        console.log("change stdout: " + data);
    });

    ls_txt_suf.on("error", (code) => {
        console.log("change error code: " + code);
    });
    ls_txt_suf.on(("close", (code) => {
        console.log("change close code: " + code);
    }));
});

ls_txt_pre.on("error", (code) => {
    console.log("error code: " + code);
});
ls_txt_pre.on(("close", (code) => {
    console.log("close code: " + code);
}));
