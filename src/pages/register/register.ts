import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { HTTP } from '@ionic-native/http';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  constructor(
    public navCtrl: NavController,
    public restProvider: RestProvider
    ) {

  }
  login = {
    username: '',
    password1: '',
    password2: '',
    email: '',
  };

    public async logForm() {
        
    var password1 = this.login.password1; 
    var password2 = this.login.password2; 
    var username = this.login.username; 
    var email = this.login.email;

    this.login = {
        'password1': password1,
        'password2': password2, 
        'username': username,
        'email': email
    };
    console.log("login: " , this.login);
    
    if (this.login) {
        this.restProvider.registerUser(this.login)
          .then(data => {
              var response = data;
              console.log("response:" + response);
            // this.login = data;
            // console.log("data: " , data);
          });

    }
  }
 
}
