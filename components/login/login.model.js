export class UserModel {
  constructor() {
    this.Id = "";
    this.Email = ""
    this.Password = ""
  }
}
export class LoginModel {
  constructor() {
    this.User = new UserModel();
  }
}