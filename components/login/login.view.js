import { UserModel } from './login.model.js';

export class LoginView {
  constructor(loginController) {
    this.LoginController = loginController;
  }
  
  Create() {
    this.LoadDesign();
    this.LoadEventHandler();
  }

  LoadDesign() {
    this.Html = $(/*html*/ `
        <div class="row">
          <div class="col-md-12">
            <h4 class="text-center">User</h4>
            <div class="form-row">
              <div class="form-group col-md-12">
                <label>Email address</label>
                <input type="email" name="LoginView_Email" class="form-control" placeholder="Enter email">
              </div>
              <div class="form-group col-md-12">
                <label>Password</label>
                <input type="password" name="LoginView_Password" class="form-control"  placeholder="Enter password">
              </div>
            </div>
            <button name="LoginView_Register" class="btn btn-primary">Register</button>
            <button name="LoginView_Verify" class="btn btn-primary">Verify</button>
          </div>
        </div>
    `)
  }

  LoadEventHandler() {
    this.Html.find("button[name='LoginView_Register']").on("click", () => {
      this.LoginController.RequestRegisterUser(this.GetModelByView(),()=> this.UpdateView())
    });
    this.Html.find("button[name='LoginView_Verify']").on("click", () => {
      this.LoginController.RequestAccessUser(this.GetModelByView(),()=> this.UpdateView())
    });
  }
  
  GetModelByView() {
    const objUserModel = new UserModel();
    objUserModel.Email = this.Html.find("input[name='LoginView_Email']").val();
    objUserModel.Password = this.Html.find("input[name='LoginView_Password']").val();
    return objUserModel;
  }

  UpdateView() {
    this.Html.find("input[name='LoginView_Email']").val(this.LoginController.LoginModel.User.Email);
    this.Html.find("input[name='LoginView_Password']").val(this.LoginController.LoginModel.User.Password);
  }
}