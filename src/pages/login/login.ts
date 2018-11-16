import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class FormsPage {
  login = {}
  logForm() {
    console.log(this.login)
    var username = this.login[0];
    var pw = this.login[1];

    
  }
}
