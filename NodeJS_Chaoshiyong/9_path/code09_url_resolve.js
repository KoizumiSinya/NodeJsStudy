//url的路径转化
var url = require("url");

//如果某个路径名称后面没有/ 则会被跳过这层；
console.log("url.resolve1 " + url.resolve("/one", "two"));
console.log("url.resolve2: " + url.resolve("/on/two", "three"));

//如果某个路径名称前面没有/ 则打印出来的结果也不会自动附带/
console.log("url.resolve3: " + url.resolve("one/two", "three"));

// /one/two/three
console.log("url.resolve4: " + url.resolve("/one/two/", "three"));

// 以下只能打印出 /three
console.log("url.resolve5: " + url.resolve("one/two/", "/three"));
console.log("url.resolve6: " + url.resolve("/one/two/", "/three"));

console.log("url.resolve7: " + url.resolve("http://www.baidu.com", "a"));
console.log("url.resolve7: " + url.resolve("http://www.baidu.com", "/a"));
console.log("url.resolve7: " + url.resolve("http://www.baidu.com/", "a"));
console.log("url.resolve7: " + url.resolve("http://www.baidu.com/", "/a"));
console.log("url.resolve7: " + url.resolve("http://www.baidu.com/", "/a/"));
console.log("url.resolve7: " + url.resolve("http://www.baidu.com/", "a/b"));
console.log("url.resolve7: " + url.resolve("http://www.baidu.com/", "a//b"));
console.log("url.resolve7: " + url.resolve("http://www.baidu.com/", "a/b/c/"));
console.log("url.resolve7: " + url.resolve("http://www.baidu.com/", "//a/b/c/"));
console.log("url.resolve7: " + url.resolve("http://www.baidu.com//", "a/b/c/"));
console.log("url.resolve7: " + url.resolve("http://www.baidu.com//", "/a/b/c/"));
