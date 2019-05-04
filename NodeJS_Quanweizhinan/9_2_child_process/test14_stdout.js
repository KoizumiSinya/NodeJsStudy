process.stdout.write("子进程当前工作的目录为：" + process.cwd());
process.argv.forEach(function (t, number, ts) {
    process.stdout.write("\r\n" + number + ":" + t);
});