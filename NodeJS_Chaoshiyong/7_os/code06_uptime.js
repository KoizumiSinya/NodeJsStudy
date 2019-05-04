//获取操作系统的运行时间
var os = require("os");
var uptime = os.uptime();
console.log("操作系统的运行时间: " + uptime);
var time = convertTime(uptime);
console.log(time);

function convertTime(time) {
    var runTime;
    var hour;
    var minute;
    var second;

    hour = parseInt(time / 3600);
    minute = parseInt((time - hour * 3600) / 60);
    second = time - hour * 3600 - minute * 60;

    runTime = hour + "H " + minute + "M " + second + "S";
    return runTime;
}