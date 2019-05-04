var cp = require("child_process");
var fs = require("fs");

var out = fs.openSync("./content.txt", "w");
var sp = cp.spawn("node", ["test19_content.js"], //
    {
        detached: true,
        stdio: ["ignore", out, "ignore"]
    });

sp.unref();

//即便结束了进程，文件还会不断增大。