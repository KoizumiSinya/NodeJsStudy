//验证是否为错误类型
var util = require("util");
console.log(`new Error(): ${util.isError(new Error())}`);
console.log(`new TypeError(): ${util.isError(new TypeError())}`);
console.log(`{name:'Error', message:'error content'}: ${util.isError({name: 'Error', message: 'error content'})}`);