function ByeBye() {
    var name;
    this.setName = function (theName) {
        name = theName;
    };

    this.sayBye = function () {
        console.log("Bye Bye " + name);
    };
}

module.exports = ByeBye;