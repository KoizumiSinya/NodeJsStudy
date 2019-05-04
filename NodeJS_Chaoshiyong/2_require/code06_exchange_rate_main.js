var rate = require("./code06_exchange_rate");

var readLine = require("readline");
var option = {
    input: process.stdin,
    output: process.stdout
};
var rl = readLine.createInterface(option);
rl.question("please in put money: ", function (money) {
    console.log("$" + money + " exchange ￥" + rate.dollar2rmb(money));
    console.log("￥" + money + " exchange $" + rate.rmb2dollar(money));
});