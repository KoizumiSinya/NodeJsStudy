//接受控制台用户输入事件
process.stdin.setEncoding("utf8");
process.stdin.on("readable", function () {
    var chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write("print data: " + chunk + "\n");
    }
});

process.stdin.on("end", function () {
    //command + D 关闭
    process.stdout.write("this code is over");
});