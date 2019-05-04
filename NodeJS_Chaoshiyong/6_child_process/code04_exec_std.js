var exec = require("child_process").exec;
var child = exec("cat code03_spawn_std",//由于读取的这个文件，虽然名字是对的，但是没有.js后缀名，所以会读取错误
    function (error, stdout, stderr) {
        console.info("cat code03_spawn_std.js stdout: ");
        console.log(stdout);
        console.info("cat code03_spawn_std.js stderr: ");
        console.log(stderr);

        if (error !== null) {
            console.log("cat code03_spawn_std.js error: ");
            console.log(error);
        }
    });