export const sapa = (nama) => {
  return `Halo selamat pagi ${nama}`;
};

export const convert = (nama, dmsl, umur) => {
  return {
    nama: nama,
    domisili: dmsl,
    umur: umur,
  };
};

export const checkscore = (data) => {
  return {
    data,
  };
};

const data = [
  { name: "Ahmad", kelas: "adonis" },
  { name: "Regi", kelas: "laravel" },
  { name: "Bondra", kelas: "adonis" },
  { name: "Iqbal", kelas: "vuejs" },
  { name: "Putri", kelas: "Laravel" },
];

export const filter = (kelas) => {
  for (var q = 0; q < data.length; i++) {
    return data.filter((el) =>
      el["kelas"].toLowerCase().includes(kelas(toLowerCase()))
    );
  }
};
