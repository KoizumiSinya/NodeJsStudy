var cp = require("child_process");
var n = cp.fork(__dirname + "/test21.js");
n.on("message", function (m) {
    console.log("父进程接收到消息:", m);
    process.exit();
});

n.send({username: "QQJY"});