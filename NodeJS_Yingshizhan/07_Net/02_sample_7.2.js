//创建TCP客户端来测试服务器
var assert = require('assert');
var net = require('net');

var clients = 0;
var expectedAssertions = 2;

var server = net.createServer(function (client) {
    clients++;

    var clientId = clients;
    console.log('Client connected: ', clientId);

    client.on('end', function () {
        console.log('Client disconnected: ', clientId);
    });

    client.write('Welcome client: ' + clientId + 'rn');
});

server.listen(8989, function () {
    console.log('Server started on port 8989');

    runTest(1, function () {
        runTest(2, function () {
            console.log('Test finished');
            assert.equal(0, expectedAssertions);
            server.close();
        });
    });
});

function runTest(expectedId, done) {
    var client = net.connect(8989);
    client.on('data', function (data) {
        var expected = 'Welcome client: ' + expectedId + 'rn';
        assert.equal(data.toString(), expected);
        expectedAssertions--;
        client.end();
    });
    client.on('end', done);
}

