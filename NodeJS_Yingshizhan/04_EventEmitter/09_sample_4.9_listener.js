//一旦有监听器加入进来，就会开始追踪
var util = require('util');
var events = require('events');

function EventTracker() {
    events.EventEmitter.call(this);
}

util.inherits(EventTracker, events.EventEmitter);

var eventTracker = new EventTracker();
eventTracker.on('newListener', function (name, listener) {
    console.log('Event name added: ', name);
});

eventTracker.on('abc listener', function () {
    console.log('add one listener who name is abc');
});