//格式化字符串
var util = require("util");
var str = util.format("%s:%s", 'aaa');
var str2 = util.format("%s:%s", 'aaa', 'bbb');
console.log(str);
console.log(str2);