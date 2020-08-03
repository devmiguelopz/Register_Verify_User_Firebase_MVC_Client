import { Config } from './config.js';
import { NameSpace } from './nameSpace.js';

import { LoginController } from './components/login/login.controller.js';
import {UserModel } from './components/login/login.model.js';

// #region Config App
NameSpace.Instance.SetDependencyInjection({
  firebase
})
NameSpace.Instance.Firebase.initializeApp(Config.Firebase);
// #endregion

// #region Init App
const rootApp = document.getElementById("rootApp")
const loginController = new LoginController();
rootApp.appendChild(loginController.RequestView()[0])
// #endregion



