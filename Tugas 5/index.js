//tugas1

function arrayToObject(arr) {
  console.log(arr);
  if (arr.length == 0) {
    console.log("-");
  }
  var obj = {};
  var counter = 0;
  arr.forEach((element) => {
    var fname = element[0] + " " + element[1];
    obj.firstname = element[0];
    obj.lastname = element[1];
    obj.gender = element[2];
    obj.age = element[3];
    counter++;
    console.log(counter + ". " + fname + ":" + obj);
  });
}

// Driver Code
var people = [
  ["Bruce", "Banner", "male", 1975],
  ["Natasha", "Romanoff", "female"],
];
// arrayToObject(people);
/*
    1. Bruce Banner: { 
        firstName: "Bruce",
        lastName: "Banner",
        gender: "male",
        age: 45
    }
    2. Natasha Romanoff: { 
        firstName: "Natasha",
        lastName: "Romanoff",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/

var people2 = [
  ["Tony", "Stark", "male", 1980],
  ["Pepper", "Pots", "female", 2023],
];
// arrayToObject(people2);
/*
    1. Tony Stark: { 
        firstName: "Tony",
        lastName: "Stark",
        gender: "male",
        age: 40
    }
    2. Pepper Pots: { 
        firstName: "Pepper",
        lastName: "Pots",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/

// Error case
// arrayToObject([]); // ""

//tugas2;
function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  var obj = {};
  arrPenumpang.forEach((e) => {
    // console.log(rute.indexOf(e[1]));
    var jrk = rute.indexOf(e[2]) - rute.indexOf(e[1]);
    byr = jrk * 2000;
    obj.penumpang = e[0];
    obj.naikDari = e[1];
    obj.tujuan = e[2];
    obj.bayar = byr;
  });
}
//TEST CASE
// console.log(
//   naikAngkot([
//     ["Dimitri", "B", "F"],
//     ["Icha", "A", "B"],
//   ])
// );
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

// console.log(naikAngkot([])); //[]

//tugas3
function nilaiTertinggi(siswa) {
  var arrClass = [];
  var arrHighest = [];
  siswa.forEach((e) => {
    if (arrClass.includes(e["class"]) == false) {
      arrClass.push(e["class"]);
    }
  });

  var arrTemp = {};
  arrClass.forEach((e) => {
    var counter = 0;
    console.log(e);
    siswa.forEach((a) => {
      console.log(e + " ---- " + a["class"]);
      if (e == a["class"]) {
      }
      counter += 1;
      console.log(counter);
    });
    console.log(arrTemp);
  });
}

// TEST CASE
nilaiTertinggi([
  {
    name: "Asep",
    score: 90,
    class: "adonis",
  },
  {
    name: "Ahmad",
    score: 85,
    class: "vuejs",
  },
  {
    name: "Regi",
    score: 74,
    class: "adonis",
  },
  {
    name: "Afrida",
    score: 78,
    class: "reactjs",
  },
  {
    name: "Afrida",
    score: 78,
    class: "reactjs",
  },
]);

// OUTPUT:

// {
//   adonis: { name: 'Asep', score: 90 },
//   vuejs: { name: 'Ahmad', score: 85 },
//   reactjs: { name: 'Afrida', score: 78}
// }

// console.log(
//   nilaiTertinggi([
//     {
//       name: "Bondra",
//       score: 100,
//       class: "adonis",
//     },
//     {
//       name: "Putri",
//       score: 76,
//       class: "laravel",
//     },
//     {
//       name: "Iqbal",
//       score: 92,
//       class: "adonis",
//     },
//     {
//       name: "Tyar",
//       score: 71,
//       class: "laravel",
//     },
//     {
//       name: "Hilmy",
//       score: 80,
//       class: "vuejs",
//     },
//   ])
// );

// {
//   adonis: { name: 'Bondra', score: 100 },
//   laravel: { name: 'Putri', score: 76 },
//   vuejs: { name: 'Hilmy', score: 80 }
// }
