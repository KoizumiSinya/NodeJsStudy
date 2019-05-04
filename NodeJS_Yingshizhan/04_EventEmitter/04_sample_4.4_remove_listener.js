//使用emit触发调用; 使用removeListener 移除监听

var util = require('util');
var events = require('events');

//Create class and setting function
var AudioDevice = {
    play: function (track) {
        //device playing
        console.log("The AudioDevice are playing...")
    },

    stop: function () {
        //stop playing
        console.log("The AudioDevice was stop...")
    }
};

function MusicPlayer() {
    //setting default field
    this.playing = false;
    events.EventEmitter.call(this);
}

util.inherits(MusicPlayer, events.EventEmitter);

var musicPlayer = new MusicPlayer();

function play(track) {
    this.playing = true;
    AudioDevice.play(track);
};

function stop(track) {
    this.playing = false;
    AudioDevice.stop();
};

musicPlayer.on('play', play);
musicPlayer.on('stop', stop);

//通过代码调用emit启动 注册了play的函数回调
musicPlayer.emit('play', 'The device start......');
//1000
setTimeout(function () {
    musicPlayer.emit('stop');
}, 1000);


musicPlayer.removeListener('play', play);