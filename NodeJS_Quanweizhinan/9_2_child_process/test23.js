var fs = require("fs");
var out = fs.createWriteStream("./content.txt");
process.on("message", function (data) {
    out.write(data);
});