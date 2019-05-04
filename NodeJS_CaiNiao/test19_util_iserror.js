var util = require("util");
util.isError(new Error());//true
util.isError(new TypeError());//true
util.isError({name: "error", message: "an error msg"});//false
