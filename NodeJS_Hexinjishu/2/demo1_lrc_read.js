var fs = require('fs');
fs.readFile('./lesson081.LRC', {encoding: "UTF-8", flag: "r"}, function (err, data) {
    if (err) {
        return console.log('读取歌词文件出错.');
    }

    data = data.toString();
    console.log('已读取lrc文件');

    var lines = data.split('\n');
    //遍历所有行数，通过正则匹配里面的时间，解析毫秒值
    var reg = /\[(\d{2})\:(\d{2})\.(\d{2})\]\s*(.+)/;
    for (var i = 0; i < lines.length; i++) {
        (function (index) {
            var line = lines[index];
            var matches = reg.exec(line);
            if (matches) {
                var minute = parseFloat(matches[1]);
                var second = parseFloat(matches[2]);
                var million = parseFloat(matches[3]);

                var content = matches[4];
                //把时间变成毫秒值
                var time = minute * 60 * 1000 + second * 1000 + million;
                setTimeout(function () {
                    console.log(content);
                }, time);
            }
        })(i);
    }
});