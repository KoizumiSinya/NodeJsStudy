//这种导入方式可以使用绝对路径和相对路径
var circleTool = require("./code01_circle");


var readLine = require("readline");
var option = {
    input: process.stdin,
    output: process.stdout
};
var rl = readLine.createInterface(option);
rl.question("please input radius: ", function (radius) {
    console.log("circle area is: " + circleTool.area(radius));
    console.log("circle long is: " + circleTool.circumference(radius));
});