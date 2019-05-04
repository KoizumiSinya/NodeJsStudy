var fs = require("fs");
var rs = fs.createReadStream("../files/123.txt");
rs.setEncoding("utf8");
rs.on("readable", () => {
    console.log("readable event...");

    var chunk;
    while (null !== (chunk = rs.read())) {
        console.log(`${chunk.length} bytes data`);
        console.log(`data: ${chunk}`);
    }
});

rs.on("end", () => {
    console.log("end event...");
});