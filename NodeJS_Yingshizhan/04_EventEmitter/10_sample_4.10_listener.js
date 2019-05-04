var util = require('util');
var events = require('events');

function Pulsar(speed, times) {
    events.EventEmitter.call(this);

    var self = this;
    this.speed = speed;
    this.times = times;

    this.on('newListener', function (eventName, listener) {
        if (eventName === 'pulse') {
            self.start();
        }
    });
}

util.inherits(Pulsar, events.EventEmitter);

Pulsar.prototype.start = function () {
    var self = this;
    var id = setInterval(function () {
            self.emit('pulse');
            self.times--;
            if (self.times === 0) {
                clearInterval(id);
            }
        },
        this.speed);
};

var pulsar = new Pulsar(500, 5);

/*
    在创建对象pulsar之后，注册pulse函数，就会响应Pulsar类本身的函数注册的监听newListener，
    这使得start函数被调用,然后执行一系列的emit触发.
 */

pulsar.on('pulse', function () {
    console.log('.');
});
