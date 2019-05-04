var readLine = require("readline");
var option = {
    input: process.stdin,
    output: process.stdout
};
var rl = readLine.createInterface(option);//初始化readLine的对象属性 使用控制台获取和输出

rl.question("What's your name?", function (name) {
    console.log("My name is ", name);
    rl.close();
});

// rl.question("How old are you?", function (year) {
//     console.log("I'm ", year);
//     rl.close();
// });