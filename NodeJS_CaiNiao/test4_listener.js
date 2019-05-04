var events = require('events');
var eventEmitter = new events.EventEmitter();

//监听器1
var listener1 = function listener1() {
    console.log('监听器1 执行');
}

//监听器2
var listener2 = function listener2() {
    console.log('监听器2 执行');
}

eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);

//查看有多少个监听器
var eventListeners = require('events').EventEmitter//
    .listenerCount(eventEmitter, 'connection');
console.log('有' + eventListeners + '个监听器');

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log('listener1 不受监听');

eventEmitter.emit('connection');

//查看有多少个监听器
eventListeners = require('events').EventEmitter//
    .listenerCount(eventEmitter, 'connection');
console.log('有' + eventListeners + '个监听器');
console.log('程序结束');