//使用emit触发调用
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

//添加第一个play的监听, 修改状态值
musicPlayer.on('play', function (track) {
    this.playing = true;
    console.log('IsPlaying...');
});

//添加第二个play的监听
musicPlayer.on('play', function (track) {
    AudioDevice.play(track);
});

//添加第三个play的监听, 处理界面显示
musicPlayer.on('play', function (track) {
    console.log('The view change...');
});

musicPlayer.on('stop', function () {
    this.playing = false;
    AudioDevice.stop();
});

//通过代码调用emit启动 注册了play的函数回调
musicPlayer.emit('play', 'The device start......');
//1000
setTimeout(function () {
    musicPlayer.emit('stop');
}, 1000);


