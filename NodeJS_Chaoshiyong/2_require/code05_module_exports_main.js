//module.exports 和 exports 导出的两种不一样的对象

var obj = require("./code05_module_exports");
var user = new obj("qqjy", 26);
user.userInfo();
console.log(user.tag);//undefined

/**
 * 1. module.exports像是exports的大哥，当module.exports以{}整体导出时会覆盖exports的属性和方法，
 *
 * 2. 注意，若只是将属性/方法挂载在module.exports./exports.上时，
 * exports.id=1和module.exports.id=100，module.exports.id=function(){}和exports.id=function(){}，
 * 最后id的值取决于exports.id和module.exports.id的顺序，谁在后，就是最后的值
 */
