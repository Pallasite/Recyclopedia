import { Component } from '@angular/core';
import { NavController, MenuToggle } from 'ionic-angular';
import { FormsPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MenuToggle]
})
export class HomePage {
  cards: any;
  category: string = 'gear';

  constructor(
    public navCtrl: NavController,
    public menuToggle: MenuToggle
    // public viewCtrl: ViewController

    ) {
         this.cards = new Array(2);
  }
  public openForm() {
    // push contact component on stack
    console.log("forms page");
    this.navCtrl.push(FormsPage);
  // this.navCtrl.push(FormsPage, obj->adminAuthAuth=true);
  }
  public openSideMenu() {
    this.navCtrl.push(FormsPage);
  }

}
