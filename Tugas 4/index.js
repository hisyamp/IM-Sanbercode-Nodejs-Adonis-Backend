//tugas1
var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];
function datahandling(params) {
  params.forEach((element) => {
    console.log("Nomor ID: " + element[0]);
    console.log("Nama Lengkap: " + element[1]);
    console.log("TTL: " + element[2] + ", " + element[3]);
    console.log("Hobi:" + element[4]);
    console.log("\n");
  });
}
// datahandling(input);

//tugas2
function balikkata(params) {
  var a = "";
  for (var i = params.length - 1; i >= 0; i--) {
    a += params[i];
  }
  console.log(a);
}

// balikkata("azhar");
