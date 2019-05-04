var cp = require("child_process");
var sp1 = cp.execFile("test14_stdout.js",//
    ["one", "two", "three", "four"],//
    {cwd: "./"},
    function (err, stdout, stderr) {
        if (err) {
            console.log("子进程开启失败:" + err);
        } else {
            console.log("子进程标准输出:" + stdout.toString());
            sp2.stdin.write(stdout.toString());
        }
    }
);

var sp2 = cp.execFile("content.txt");