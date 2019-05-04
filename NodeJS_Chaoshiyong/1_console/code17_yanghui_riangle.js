//打印杨辉三角 代码存在问题

var i, j, k, strLine;
var readLine = require("readline");
var option = {
    input: process.stdin,
    output: process.stdout
};
var rl = readLine.createInterface(option);
rl.question("line count is: ", function (line) {
    strLine = ">";
    for (i = 1; i <= 10 * line; i++) {
        if (i == 5 * line) {
            strLine = strLine + 1;
        } else {
            strLine = strLine + "";
        }
    }

    console.log(strLine);

    strLine = ">";
    for (j = 1; j <= line - 1; j++) {
        for (k = 1; k < 5 * (line - j - 1); k++) {
            strLine = strLine + "";
        }
        y = 1;
        strLine = strLine + FormatNumber(y);

        for (k = 1; k <= j; k++) {
            y = y * (j - k + 1) / k;
            strLine = strLine + FormatNumber(y);
        }
        console.log(strLine);
        strLine = ">";
    }
    rl.close();
});

function FormatNumber(y) {
    var strL = "";
    if (y < 10) {
        strL = strL + "  " + y + "  ";
    } else if ((y >= 10) && (y < 100)) {
        strL = strL + "   " + y + "   ";
    } else if (y >= 100) {
        strL = strL + "   " + y + "   ";
    }
    return strL;
}