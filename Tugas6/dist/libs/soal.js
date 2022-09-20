"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sapa = exports.filter = exports.convert = exports.checkscore = void 0;

var sapa = function sapa(nama) {
  return "Halo selamat pagi ".concat(nama);
};

exports.sapa = sapa;

var convert = function convert(nama, dmsl, umur) {
  return {
    nama: nama,
    domisili: dmsl,
    umur: umur
  };
};

exports.convert = convert;

var checkscore = function checkscore(nama) {
  return {
    nama: nama
  };
};

exports.checkscore = checkscore;
var data = [{
  name: "Ahmad",
  kelas: "adonis"
}, {
  name: "Regi",
  kelas: "laravel"
}, {
  name: "Bondra",
  kelas: "adonis"
}, {
  name: "Iqbal",
  kelas: "vuejs"
}, {
  name: "Putri",
  kelas: "Laravel"
}];

var filter = function filter(kelas) {
  for (var q = 0; q < data.length; i++) {
    return data.filter(function (el) {
      return el["kelas"].toLowerCase().includes(kelas(toLowerCase()));
    });
  }
};

exports.filter = filter;