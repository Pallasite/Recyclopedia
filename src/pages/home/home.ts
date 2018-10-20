import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormsPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController
    // public viewCtrl: ViewController
    
    ) {

  }
  public openForm() {
    // push contact component on
    console.log("forms page");
    this.navCtrl.push(FormsPage);
    // this.navCtrl.push(FormsPage, obj->userAuth=true);
  }

}
