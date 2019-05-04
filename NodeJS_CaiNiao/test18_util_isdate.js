var util = requir("util");
util.isDate(new Date());//true
util.isDate(Date());//false
util.isDate({});//false
