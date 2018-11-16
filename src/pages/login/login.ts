import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { RestProvider } from '../../providers/rest/rest'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class FormsPage {

  constructor(public loginHTTP : HTTP){}

  login = {}
  logForm() {

    console.log(this.login)
    var username = this.login[0];
    var pw = this.login[1];
    var params = {};
    var token = "Authentication: a";
    var headers = {"token":token};
    this.loginHTTP.get(RestProvider.apiUrl, {}, headers);
  }
}
