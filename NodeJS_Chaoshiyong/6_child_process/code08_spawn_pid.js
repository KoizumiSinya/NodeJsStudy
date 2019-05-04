//查看子进程pid的方法
var spawn = require("child_process").spawn;
var grep_node = spawn("grep", ["node"]);
console.log("child pid is: " + grep_node.pid);
grep_node.stdin.end();

var grep_top = spawn("grep", ["top"]);
console.log("child pid of top is: " + grep_top.pid);
grep_top.stdin.end();

var grep_ssh = spawn("grep", ["ssh"]);
console.log("child pid of ssh is: " + grep_ssh.pid);
grep_ssh.stdin.end();

//在Ubuntu环境下，三个新创建的子进程pid是连续的