import { Component } from '@angular/core';
import { NavController, MenuToggle } from 'ionic-angular';
import { FormsPage } from '../login/login';
import { AdminView } from '../admin/admin';


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

    ) {
         this.cards = new Array(2);
  }
  public openForm() {
    console.log("forms page");
    this.navCtrl.push(FormsPage);
  }
  public openSideMenu() {
    this.navCtrl.push(FormsPage);
  }
  public openAdminForm() {
    this.navCtrl.push(AdminView);
  }

}
