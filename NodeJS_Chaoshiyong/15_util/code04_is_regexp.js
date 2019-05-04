//验证是否是正则表达式
var util = require("util");
console.log(`/some regexp/ : ${util.isRegExp(/some regexp/)}`);
console.log(`new RegExp('another regexp') : ${util.isRegExp(new RegExp('another regexp'))}`);
console.log(`{} : ${util.isRegExp({})}`);