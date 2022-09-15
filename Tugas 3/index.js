//tugas1
//no1
function teriak() {
  return "Halo Sanbers";
}
// console.log(teriak());
//no2
function kalikan(a, b) {
  return a * b;
}
// console.log(kalikan(3, 8));
function introduce(nama, age, address, hobby) {
  return `Nama saya ${nama}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
}
// console.log(introduce("hisyam", 20, "malang", "futsal"));
//tugas2
//no 1

function loopWhile() {
  console.log("LOOPING PERTAMA");
  var a = 1;
  while (a <= 20) {
    if (a % 2 == 0) {
      console.log(a + " - " + "i love coding");
    }
    a++;
  }
  b = 20;
  console.log("LOOPING KEDUA");
  while (b >= 1) {
    if (b % 2 == 0) {
      console.log(b + " - " + "I will become a mobile developer");
    }
    b--;
  }
}
// loopWhile();
function loopingFor() {
  for (var i = 1; i <= 20; i++) {
    if (i % 2 == 1 && i % 3 == 0) {
      console.log(i + " - " + "I Love Coding");
    } else if (i % 2 != 0) {
      console.log(i + " - " + "Santai");
    }

    if (i % 2 == 0) {
      console.log(i + " - " + "Berkualitas");
    }
  }
}

// loopingFor();
//make rectangle
function makeRectangle(a, b) {
  var c = "";
  for (var n = 0; n < b; n++) {
    for (var v = 0; v < a; v++) {
      c += "#";
    }
    c += "\n";
  }
  console.log(c);
}

// makeRectangle(5, 6);

function makeLadder(a) {
  var c = "";
  for (var i = 0; i < a; i++) {
    for (var v = 0; v <= i; v++) {
      c += "#";
    }
    c += "\n";
  }
  console.log(c);
}
makeLadder(6);
