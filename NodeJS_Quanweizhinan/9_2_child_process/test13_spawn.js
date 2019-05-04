var cp = require("child_process");

var sp1 = cp.spawn("node", //
    ["test14_stdout.js", "one", "two", "three", "four"], //
    {cwd: "./"});

var sp2 = cp.spawn("node", ["test15.js"], {stdio: "pipe"});

sp1.stdout.on("data", function (data) {
    console.log("子进程标准输出:" + data);
    sp2.stdin.write(data);
});

sp1.on("exit", function (code, signal) {
    console.log("子进程退出，退出代码" + code);
    process.exit();
});

//需要配合 test14 test15 一起使用测试