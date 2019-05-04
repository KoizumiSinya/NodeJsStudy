//阶乘计算
var readLine = require("readline");
var option = {
    input: process.stdin,
    output: process.stdout
};
var rl = readLine.createInterface(option);

var result = 1;
var content;

function factorial(n) {
    if (n > 0) {
        if (n == 1) {
            result = 1;
        } else {
            result = n * factorial(n - 1);
        }
    }
    return result;
}

rl.question("请输入需要计算阶乘的数:", function (number) {
    content = number + " != " + factorial(number);
    console.log(content);
    rl.close();
});