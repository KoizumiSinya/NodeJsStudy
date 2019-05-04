'use strict';

const slackClient = require('../service/slackClient');
const service = require('../service/service');
const http = require('http');
const server = http.createServer(service);

const slackToken = 'xoxb-428235818340-428345252659-0zx2TQIhnM7OvFd0pU0NqyYL';
const slackLogLevel = 'debug';
const rtm = slackClient.init(slackToken, slackLogLevel);
rtm.start();

server.listen(8989);
server.on('listening', function () {
    console.log(`Server is listening on ${server.address().port} in '${service.get('env')}' mode.`);
});