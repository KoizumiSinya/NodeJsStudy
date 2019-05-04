var util = require("util");

//判断一个参数是否是正则表达式
util.isRegExp(/some regexp/);//true
util.isRegExp(new RegExp("another regexp"));//true
util.isRegExp({});//false

