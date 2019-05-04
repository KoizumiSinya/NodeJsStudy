var dgram = require("dgram");
var host = "127.0.0.1";
var port = 8989;
var message = new Buffer("udp client say: hello world");

var client = dgram.createSocket("udp4");
client.send(message, 0, message.length, port, host, (err, bytes) => {
    if (err) {
        throw err;
    } else {
        console.log("udp client will send message to " + host + ":" + port);
        console.log("udp client bytes: " + bytes);
        client.close();
    }
});

client.on("close", () => {
    console.log("client close...");
});

