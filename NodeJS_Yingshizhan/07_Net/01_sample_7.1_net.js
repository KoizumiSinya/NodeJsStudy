//创建一个简单的TCP的服务器
var net = require('net');
var clients = 0;

var server = net.createServer(function (client) {
    clients++;

    var clientId = clients;
    console.log('Client connected: ', clientId);

    client.on('end', function () {
        console.log('Client disconnected: ', clientId);
    });

    client.write('Welcome client: ' + clientId + 'rn');
    client.pipe(client);
});

server.listen(8989, function () {
    console.log('Server started on port 8989......');
});