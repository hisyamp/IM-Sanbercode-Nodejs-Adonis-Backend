//Soal no 1
var word = "JavaScript";
var second = "is";
var third = "awesome";
var fourth = "and";
var fifth = "I";
var sixth = "love";
var seventh = "it!";

var gabung =
  word + " " + second + " " + third + " " + fourth + fifth + sixth + seventh;
console.log(gabung);

//Soal no 2
var sentence = "I am going to be React Native Developer";
var one = sentence[0];
var two = sentence[2] + sentence[3];
var three = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9];
var four = sentence[11] + sentence[12];
var five = sentence[14] + sentence[15];
var six =
  sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21];

var seven =
  sentence[23] +
  sentence[24] +
  sentence[25] +
  sentence[26] +
  sentence[27] +
  sentence[28];
var eight =
  sentence[30] +
  sentence[31] +
  sentence[32] +
  sentence[33] +
  sentence[34] +
  sentence[35] +
  sentence[36] +
  sentence[37] +
  sentence[38];

console.log("First Word: " + one);
console.log("Second Word: " + two);
console.log("Third Word: " + three);
console.log("Fourth Word: " + four);
console.log("Fifth Word: " + five);
console.log("Sixth Word: " + six);
console.log("Seventh Word: " + seven);
console.log("Eighth Word: " + eight);

//tugas 3
var sentence2 = "wow JavaScript is so cool";

var exampleFirstWord2 = sentence2.substring(0, 3);
var secondWord2 = sentence2.substring(4, 14);
var thirdWord2 = sentence2.substring(15, 17);
var fourthWord2 = sentence2.substring(18, 20);
var fifthWord2 = sentence2.substring(21, 25);

console.log("First Word: " + exampleFirstWord2);
console.log("Second Word: " + secondWord2);
console.log("Third Word: " + thirdWord2);
console.log("Fourth Word: " + fourthWord2);
console.log("Fifth Word: " + fifthWord2);

//tugas 4
var sentence3 = "wow JavaScript is so cool";

var exampleFirstWord3 = sentence3.substring(0, 3);
var secondWord3 = sentence3.substring(4, 14);
var thirdWord3 = sentence3.substring(15, 17);
var fourthWord3 = sentence3.substring(18, 20);
var fifthWord3 = sentence3.substring(21, 25);

var wordlength1 = exampleFirstWord3.length;
var wordlength2 = secondWord3.length;
var wordlength3 = thirdWord3.length;
var wordlength4 = fourthWord3.length;
var wordlength5 = fifthWord3.length;

// console.log(
//   "First Word: " + exampleFirstWord3 + ", with length: " + wordlength1
// );
// console.log("Second Word: " + secondWord3 + ", with length: " + wordlength2);
// console.log("Third Word: " + thirdWord3 + ", with length: " + wordlength3);
// console.log("Fourth Word: " + fourthWord3 + ", with length: " + wordlength4);
// console.log("Fifth Word: " + fifthWord3 + ", with length: " + wordlength5);

//tugas conditional
function wereWolf(nama, peran) {
  if (nama == "" && peran == "") {
    console.log("Nama harus diisi!");
  } else if (nama == "John" && peran == "") {
    ("Halo John, Pilih peranmu untuk memulai game!");
  } else if (nama == "Jane" && peran == "Penyihir") {
    ("Selamat datang di Dunia Werewolf, Jane");
    ("Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf!");
  } else if (nama == "Jenita" && peran == "Guard") {
    ("Selamat datang di Dunia Werewolf, Jenita");
    ("Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf.");
  } else if ((nama = "Junaedi" && peran == "Werewolf")) {
    ("Selamat datang di Dunia Werewolf, Junaedi");
    ("Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!");
  }
}

function formatTgl(tgl, bln, thn) {
  console.log("---------------------------------");
  var a;
  var b;
  var c;
  if (tgl >= 1 && tgl <= 31) {
    a = true;
  } else {
    console.log("format tgl salah");
    return false;
  }
  if (bln >= 1 && bln <= 12) {
    b = true;
  } else {
    console.log("format tgl salah");
    return false;
  }
  if (thn >= 1900 && thn <= 2200) {
    console.log("aa");
    c = true;
  } else {
    console.log("format tgl salah");
    return false;
  }
  switch (a === true && b === true && c === true) {
    case bln == 1:
      console.log(tgl + " Januari " + thn);
      break;

    case bln == 2:
      console.log(tgl + " Februari " + thn);
      break;

    case bln == 3:
      console.log(tgl + " Maret " + thn);
      break;

    case bln == 4:
      console.log(tgl + " April " + thn);
      break;

    case bln == 5:
      console.log(tgl + " Mei " + thn);
      break;

    case bln == 6:
      console.log(tgl + " Juni " + thn);
      break;

    case bln == 7:
      console.log(tgl + " Juli " + thn);
      break;

    case bln == 8:
      console.log(tgl + " Agustus " + thn);
      break;

    case bln == 9:
      console.log(tgl + " September " + thn);
      break;

    case bln == 10:
      console.log(tgl + " Oktober " + thn);
      break;

    case bln == 11:
      console.log(tgl + " November " + thn);
      break;

    case bln == 12:
      console.log(tgl + " Desember " + thn);
      break;

    default:
      console.log("format tanggal salah");
      break;
  }
}

// formatTgl(11, 2, 19918);
