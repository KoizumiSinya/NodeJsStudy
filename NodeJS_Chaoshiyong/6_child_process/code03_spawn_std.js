//spawn方法绑定系统事件
var childp = require("child_process");
var cat = childp.spawn("cat");//对其绑定cat命令的操作

//对控制台输出数据的时候监听
cat.stdout.on("data", function (data) {
    console.log("data is: " + data.toString());
});

//对其绑定监听exit事件
cat.on("exit", function () {
    console.log("exit...");
});

//对其绑定监听close事件
cat.on("close", function () {
    console.log("cat on close");
});


cat.stdin.write("ggg");
cat.stdin.end();
