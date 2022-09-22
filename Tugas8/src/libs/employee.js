class Employee {
  constructor(name, password, role) {
    (this._name = name),
      (this._password = password),
      (this._role = role),
      (this._isLogin = false);
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
  get password() {
    return this._password;
  }

  set password(newPassword) {
    this._password = newPassword;
  }

  get role() {
    return this._role;
  }

  set role(newRole) {
    this._role = newRole;
  }

  get isLogin() {
    return this._isLogin;
  }

  set isLogin(status) {
    this._isLogin = status;
  }
}

export default Employee;
