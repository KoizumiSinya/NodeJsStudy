var outputValue = 0;//输出值
var increment = 1;//增量

exports.setOutputValue = function (value) {
    outputValue = value;
};

exports.setIncrement = function (incrementValue) {
    increment = incrementValue;
};

exports.printNextCount = function () {
    outputValue += increment;
    console.log(outputValue);
};

exports.setZero = function () {
    if (outputValue >= 100) {
        outputValue = 0;
    }
    console.log(outputValue);
};