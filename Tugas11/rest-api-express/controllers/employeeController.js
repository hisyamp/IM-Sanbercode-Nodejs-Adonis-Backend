const fs = require("fs");
const fsPromises = require("fs/promises");
const path = "data.json";

class EmployeeController {
  static register(req, res) {
    fs.readFile(path, (err, data) => {
      if (err) {
        res.status(400).json({ error: "error dalam pembacaan data" });
      } else {
        let existing = JSON.parse(data);
        let { users } = existing;
        let { name, role, password } = req.body;
        let newEmployee = { name, role, password, isLogin: false };
        users.push(newEmployee);
        let newData = { ...existing, users };
        fs.writeFile(path, JSON.stringify(newData), (err) => {
          if (err) {
            res.status(400).json({ error: "error menyimpan data" });
          } else {
            res.status(201).json({ message: "berhasil register" });
          }
        });
      }
    });
  }
  static findAll(req, res) {
    fs.readFile(path, (err, data) => {
      if (err) {
        res.status(400).json({ error: "error dalam pembacaan data" });
      } else {
        let realData = JSON.parse(data);
        res.status(200).json({
          message: "Berhasil get karyawan",
          data: realData.users,
        });
      }
    });
  }
  static login(req, res) {
    fsPromises
      .readFile(path)
      .then((data) => {
        let employees = JSON.parse(data);
        let { users } = employees;
        let { name, password } = req.body;
        let indexEmp = users.findIndex((user) => user.name == name);
        console.log(indexEmp);
        if ((indexEmp = -1)) {
          res.status(404).json({ error: "data tidak ditemukan" });
        } else {
          let employee = users[indexEmp];
          if (employee.password == password) {
            employee.isLogin = true;
            users.splice(indexEmp, 1, employee);
            return fsPromises.writeFile(path, JSON.stringify(employees));
          } else {
            res.status(400).json({ error: "password salah" });
          }
        }
      })
      .then(() => {});
  }
}

module.exports = EmployeeController;
