var util = require("util");

//判断一个object参数是否是一个数组
util.isArray([]);
util.isArray(new Array());
util.isArray({});
