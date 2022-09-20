// console.log("abcdefghi");
import { convert, sapa } from "./libs/soal.js";

const myArgs = process.argv.slice(2);
console.log("myArgs: " + myArgs);

switch (myArgs[0]) {
  case "convert":
    console.log(convert(myArgs[1]));
    break;
  case "checkscore":
    console.log(checkscore({ name: "Ahmad", kelas: "Adonis", score: 89 }).data);
    break;
  case "sapa":
    console.log(sapa(myArgs[1]));
    break;
  case "filter":
    console.log(filter(myArgs[1]));
    break;
  default:
    console.log("sorry");
}
