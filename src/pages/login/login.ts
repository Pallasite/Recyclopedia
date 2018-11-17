import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { HTTP } from '@ionic-native/http';
import { RegisterPage } from '../register/register';
import { RestProvider } from '../../providers/rest/rest';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class FormsPage {
  constructor(
    public navCtrl: NavController,
    public restProvider: RestProvider
    ) {

  }
  login = {
    username: '',
    password: ''
  };

  logForm() {
    // console.log("this.login: " , this.login);
    // console.log("this.login.username: " , this.login.username);
    // console.log("this.login.password: " , this.login.password);
    var password = this.login.password; 
    var username = this.login.username; 
    this.login = {'username': username, 'password': password};

    if (this.login) {
      this.restProvider.userLogin(this.login)
        .then(data => {
           var response = data;
           console.log("response: " , response);
        });
  }
 
  }
  registerUser() {
    this.navCtrl.push(RegisterPage);
  }
}
