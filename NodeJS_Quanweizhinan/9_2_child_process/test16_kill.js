var cp = require("child_process");

var sp1 = cp.spawn("node", //
    ["test14_stdout.js", "one", "two", "three", "four"], //
    {cwd: "./"});

var sp2 = cp.spawn("node", //
    ["test15.js"], //
    {stdio: "pipe"});

sp1.stdout.on("data", function (data) {
    console.log("子进程标准输出：" + data);
    sp2.stdin.write(data);
    sp1.kill();
});

sp1.on("exit", function (code, signal) {
    if (!code) {
        console.log("子进程退出：" + signal);
    } else {
        console.log("子进程退出：" + code);
    }

    process.exit();
});

sp1.on("error", function (err) {
    console.log("子进程开启失败:" + err);
    process.exit();
});