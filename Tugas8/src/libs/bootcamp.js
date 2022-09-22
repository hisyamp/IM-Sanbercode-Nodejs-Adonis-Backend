import Employee from "./employee";
import "core-js/stable";
import fs from "fs";
const path = "data.json";
import fsPromises from "fs/promises";

class Bootcamp {
  static register(input) {
    let [name, password, role] = input.split(",");
    fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err);
      }

      let existingData = JSON.parse(data);
      let employee = new Employee(name, password, role);
      existingData.push(employee);
      fs.writeFile(path, JSON.stringify(existingData), (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Berhasil Register!");
        }
      });
    });
  }
  static login(input) {
    let [name, password] = input.split(",");

    fsPromises
      .readFile(path)
      .then((data) => {
        let employees = JSON.parse(data);

        let indexEmp = employees.findIndex((emp) => emp._name == name);
        if (indexEmp == -1) {
          console.log("Data tidak ditemukan");
        } else {
          let employee = employees[indexEmp];
          if (employee._password == password) {
            employee._isLogin = true;

            employees.slice(indexEmp, 1, employee);
            return fsPromises.writeFile(path, JSON.stringify(employee));
          } else {
            console.log("password salah");
          }
        }
      })
      .then(() => {
        console.log("berhasil login");
      })
      .catch((err) => {
        console.log("error");
      });
  }
}

export default Bootcamp;
