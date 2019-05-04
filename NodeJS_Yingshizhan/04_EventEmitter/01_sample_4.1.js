//How to extends with event emitter

var util = require('util');
var events = require('events');

//Create class with function
function MusicPlayer() {
    events.EventEmitter.call(this);
}

//Extends
util.inherits(MusicPlayer, events.EventEmitter);