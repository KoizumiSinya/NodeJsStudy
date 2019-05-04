var fs = require("fs");

function foo() {
    function beginAnotherTask() {
        var file = fs.createReadStream("./test3.js");
        file.on("data", function (data) {
            console.log("【1】读取到%d字节", data.length);
        });
    }

    process.nextTick(beginAnotherTask);
}

var file = fs.createReadStream("./test3.js");
file.on("data", function (data) {
    console.log("【2】读取到%d字节", data.length);
});

foo();

//如果读取的文件都是比较大的字节的时候，就会发现 两个进程几乎是同时进行的