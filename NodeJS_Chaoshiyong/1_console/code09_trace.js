console.trace();//第一次调用打印栈信息，如果里面不输入任何标签，则直接显示的是trace
console.trace("start");

var fs = require("fs");
var file = "../files/test1.txt";//实际上没有这个文件
//var file = "../files/test.txt";//实际上这个文件的路径
var encoding = "utf-8";

fs.readFile(file, encoding, function (err, data) {
    console.trace("fs-start");
    if (err) {
        console.log("read err");
    } else {
        console.log("read success: " + data.toString());
    }
    console.trace("fs-end");
});

console.trace("end");
