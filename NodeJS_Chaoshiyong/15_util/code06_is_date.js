//验证是否是日期格式
var util = require("util");
console.log(`new Date(): ${util.isDate(new Date())}`);
console.log(`Date(): ${util.isDate(Date())}`);
console.log(`{}: ${util.isDate({})}`);