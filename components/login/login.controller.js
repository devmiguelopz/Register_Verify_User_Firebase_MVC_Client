import { LoginView } from './login.view.js';
import { LoginModel, UserModel } from './login.model.js';

import { NameSpace } from '../../nameSpace.js';


export class LoginController {
  constructor() {
    this.LoginModel = new LoginModel();
  }

  RequestView() {
    try {
      this.LoginView = new LoginView(this);
      this.LoginView.Create();
    } catch (error) {
      console.error("login.controller.js/RequestView =>", error)
    }
    return this.LoginView.Html;
  }

  RequestRegisterUser(objUserModel, notifyView) {
    try {
      this.LoginModel.User = { ...objUserModel }
      NameSpace.Instance.Firebase
        .auth()
        .createUserWithEmailAndPassword(this.LoginModel.User.Email, this.LoginModel.User.Password)
        .then((response) => {
          alert("the correct account was created");
          this.LoginModel.User = new UserModel();
          notifyView()
        })
        .catch((error) => {
          alert(error.message)
        });

    } catch (error) {
      console.error("login.controller.js/RequestRegisterUser =>", error)
    }
  }

  RequestAccessUser(objUserModel, notifyView) {
    debugger;
    try {
      this.LoginModel.User = { ...objUserModel }
      NameSpace.Instance.Firebase
        .auth()
        .signInWithEmailAndPassword(this.LoginModel.User.Email, this.LoginModel.User.Password)
        .then((response) => {
          alert("Access granted");
          this.LoginModel.User = new UserModel();
          notifyView();
        })
        .catch((error) => {
          alert(error.message)
        });
    } catch (error) {
      console.error("login.controller.js/RequestAccessUser =>", error)
    }
  }
}