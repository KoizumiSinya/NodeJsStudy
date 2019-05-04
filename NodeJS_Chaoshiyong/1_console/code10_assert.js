var a = 0;
var b = 1;

console.assert(a == 0, "OK");//断言，如果是true的话，是不会执行后面的描述的
console.assert(a == 1, "Exception: a not equals b");//会抛出错误，并且也附带了自己定义的断言错误描述