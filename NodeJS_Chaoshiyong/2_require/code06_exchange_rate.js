exports.rmb2dollar = function (money) {
    return money / 6.2467 + "$US";
};

exports.dollar2rmb = function (money) {
    return money * 6.2467 + "¥RMb";
};