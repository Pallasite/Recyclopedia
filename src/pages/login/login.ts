import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { RestProvider } from '../../providers/rest/rest';
import { GlobalService} from '../global/global.service';
// import { HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class FormsPage {
  constructor(
    public navCtrl: NavController,
    public restProvider: RestProvider,
    public global: GlobalService
    ) {

  }
  response = {
    token: '',
    user: {
      "email": String,
      "first_name": String, 
      "last_name": String, 
      "pk": Number, 
      "username": String
    }
  }
  
  login = {
    username: '',
    password: ''
  };

  public async logForm() {
    var password = this.login.password; 
    var username = this.login.username; 
    this.login = {'username': username, 'password': password};

    if (this.login) {
      this.restProvider.userLogin(this.login)
        .then(data => {
          var response = data;
          console.log("data: " , data);
          this.global.token = response.token;
           console.log("Token updated: " , this.global.token);
           var user = this.response.user;

           console.log("user: " , user);
           console.log("response: " , response);
        });
  }
 
  }
  registerUser() {
    this.navCtrl.push(RegisterPage);
  }
}
