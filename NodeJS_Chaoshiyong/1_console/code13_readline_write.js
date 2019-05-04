var readLine = require("readline");
var option = {
    input: process.stdin,
    output: process.stdout
};
var rl = readLine.createInterface(option);
rl.write("This message will delete after 3 seconds...");

var timeLength = 3 * 1000;
var timeOut = setTimeout(function () {
    rl.write("", {ctrl: true, name: "u"});
}, timeLength);

//这个demo案例暂时无法运作，可能存在问题