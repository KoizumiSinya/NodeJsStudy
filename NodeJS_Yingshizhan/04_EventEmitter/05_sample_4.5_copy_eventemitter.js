//通过使用for in的方式来拷贝EventEmitter的函数到对象身上
var EventEmitter = require('events').EventEmitter;

function MusicPlayer(track) {
    this.track = track;
    this.playing = false;

    for (var methodName in EventEmitter.prototype) {
        //复制EventEmitter的参数到自身对象上
        this[methodName] = EventEmitter.prototype[methodName];
    }
}

MusicPlayer.prototype = {
    toString: function () {
        if (this.playing) {
            return 'The current playing: ' + this.track;
        } else {
            return 'stop';
        }
    }
};

var musicPlayer = new MusicPlayer('Track 2018');
musicPlayer.on('play', function () {
    this.playing = true;
    console.log(this.toString());
});

musicPlayer.emit('play');