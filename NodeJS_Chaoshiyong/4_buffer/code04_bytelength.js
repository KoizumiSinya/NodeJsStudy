var str = "\u00bd + \u00bc = \u00be";
console.log("str: " + str + ";\nlength: " + str.length + ";\ncharacters: " + Buffer.byteLength(str, "utf8") + " bytes");