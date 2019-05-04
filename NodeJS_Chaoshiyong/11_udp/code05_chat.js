//模拟一个聊天室应用
var net = require("net");
var host = "127.0.0.1";
var port = 8989;

var clientList = [];

var server = net.createServer();
server.on("connection", (client) => {
    console.log("server receive from client...");

    //socket入栈
    clientList.push(client);
    client.name = client.remoteAddress + ":" + client.remotePort;
    broadcast(`hi!${client.name}...join in; ${client}`);
    client.write(`hi, ${client.name} !`);

    client.on("data", (data) => {
        broadcast(client.name + "say:" + data + "-" + client);
    });

    client.end("end", () => {
        broadcast(`hi,${client.name} quit. ${client}`);
        clientList.splice(clientList.indexOf(client), 1);
    });

});

function broadcast(message, client) {
    var cleanup = [];
    for (var i = 0, len = clientList.length; i < len; i++) {
        if (client !== clientList[i]) {
            if (clientList[i].writable) {
                clientList[i].write(message);//向客户端发送消息
            } else {
                cleanup.push(clientList[i]);
                clientList[i].destroy();//清除客户端socket
            }
        }
    }

    for (var i = 0, len = cleanup.length; i < len; i++) {
        clientList.splice(clientList.indexOf(cleanup[i], 1));
    }
}

server.listen(port, host);