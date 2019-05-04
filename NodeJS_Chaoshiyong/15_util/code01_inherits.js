//原型对象继承
var util = require("util");

function base() {
    this.name = 'base';
    this.year = 2017;
    this.say = function () {
        console.log("hello: " + this.name + " - " + this.year);
    }
}

base.prototype.showName = function () {
    console.log("Name: " + this.name);
};

base.prototype.showYear = function () {
    console.log("Year: " + this.year);
};

function child() {
    this.name = 'child';
}

util.inherits(child, base);

var objBase = new base();
objBase.showName();
objBase.showYear();
objBase.say();
console.log(objBase);


var objChild = new child();
objChild.showName();
objChild.showYear();
//objChild.say();//child是没有这个方法的
console.log(objChild);

