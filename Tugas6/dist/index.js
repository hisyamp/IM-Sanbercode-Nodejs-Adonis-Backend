"use strict";

var _soal = require("./libs/soal.js");

// console.log("abcdefghi");
var myArgs = process.argv.slice(2);
console.log("myArgs: " + myArgs);

switch (myArgs[0]) {
  case "insult":
    console.log(myArgs[1], "smelss quite badly");
    break;

  case "compliment":
    console.log(myArgs[1], "is really cool");
    break;

  default:
    console.log("sorry");
}
