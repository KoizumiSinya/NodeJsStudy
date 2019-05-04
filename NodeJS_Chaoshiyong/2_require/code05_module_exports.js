module.exports = function (name, age) {
    this.name = name;
    this.age = age;
    this.userInfo = function () {
        console.log("name: " + this.name + "; age: " + this.age);
    }
};

exports.tag = function () {
    console.log("the tag");
};