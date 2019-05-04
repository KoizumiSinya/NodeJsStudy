var util = require("util");

function Base() {
    this.name = "father";
    this.age = 50;
    this.work = function () {
        console.log("Teacher " + this.name);
    }
}

Base.prototype.showName = function () {
    console.log(this.name);
};

function Child() {
    this.name = "child";
}

//让Child继承Base
util.inherits(Child, Base);

var objBase = new Base();
objBase.showName();
objBase.work();
console.log(objBase);

var objChild = new Child();
objChild.showName();
console.log(objChild);
