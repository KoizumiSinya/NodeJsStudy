var dgram = require("dgram");
var host = "127.0.0.1";
var port = 8989;
var message = new Buffer("udp client message hello world");
var client = dgram.createSocket("udp4");

client.bind(() => {
    client.setBroadcast(true);
});

client.send(message, 0, message.length, port, host, (err, bytes) => {
    if (err) {
        throw err;
    }

    console.log("bytes: " + bytes);
    console.log("udp client will send message to " + host + ":" + port);
    client.close();
});

client.on("error", (err) => {
    console.log("udp client err: " + err);
    client.close();
});

client.on("close", () => {
    console.log("udp client close...");
});