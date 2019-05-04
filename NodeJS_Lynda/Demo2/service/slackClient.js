'use strict';

const RtmClient = require('@slack/client').RTMClient;

module.exports.init = function slackClient(token, logLevel) {
    var rtm = new RtmClient((token, {logLevel: logLevel}));
    return rtm;
};