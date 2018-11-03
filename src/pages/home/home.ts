import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormsPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cards: any;
  category: string = 'gear';

  constructor(
    public navCtrl: NavController
    // public viewCtrl: ViewController

    ) {
         this.cards = new Array(5);
  }
  public openForm() {
    // push contact component on stack
    console.log("forms page");
    this.navCtrl.push(FormsPage);
  // this.navCtrl.push(FormsPage, obj->adminAuthAuth=true);
  }

}
