//求奇数

var i, j, iNum, strPrimeNumber;
var isFlag;
var readLine = require("readline");
var option = {
    input: process.stdin,
    output: process.stdout
};
var rl = readLine.createInterface(option);

rl.question("please input number ", function (iNum) {
    strPrimeNumber = "2 ";
    for (i = 3; i <= iNum; i++) {
        isFlag = true;

        for (j = 2; j < i; j++) {
            if (i % j == 0) {
                isFlag = false;
                break;
            }
        }

        if (isFlag == true) {
            strPrimeNumber = strPrimeNumber + i + " ";
        }
    }

    console.log("prime number is: " + strPrimeNumber);
    rl.close();
});