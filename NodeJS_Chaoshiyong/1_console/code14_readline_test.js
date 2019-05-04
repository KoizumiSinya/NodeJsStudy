//模拟cmd命令行输出东西

var readLine = require("readline");
var option = {
    input: process.stdin,
    output: process.stdout
};
var rl = readLine.createInterface(option);

rl.setPrompt("NodeJS_CaiNiao>");
rl.prompt();
rl.on("line", function (line) {
    switch (line.trim()) {
        case "name":
            console.log("qqjy");
            break;
        case "code":
            console.log("nodejs");
            break;
        case "time":
            console.log("2017");
            break;
        default:
            console.log("EveryThing not input...");
            break;
    }
    rl.prompt();

    //command + D 关闭terminal
}).on("close", function () {
    console.log("88");
    process.exit(0);
});
