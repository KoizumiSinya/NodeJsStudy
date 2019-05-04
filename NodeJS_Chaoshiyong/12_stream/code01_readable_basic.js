//创建可读流
var fs = require("fs");
var rs = fs.createReadStream("../files/123.txt");
rs.setEncoding("utf8");

rs.on("readable", () => {
    console.log("readable event ...");
});
rs.on("data", (chunk) => {
    console.log("data event ...");
});
rs.on("error", () => {
    console.log("error event ...");
});
rs.on("end", () => {
    console.log("end event ...");
});
rs.on("close", () => {
    console.log("close event ...");
}); 