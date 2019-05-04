var util = require("util");

function Person() {
    this.name = "Mike";
    this.toString = function () {
        return this.name;
    };
}

var obj = new Person();
console.log(util.inspect(obj));
//boolean值是一个可选参数，如果值为 true，将会输出更多隐藏信息
console.log(util.inspect(obj, true));
