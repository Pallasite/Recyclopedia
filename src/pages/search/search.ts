import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  items: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    // search connection here with database
      this.getItems();
  }

  // getItems() {
  //   this.restProvider.getItems()
  //     .then(data => {
  //       this.items = data;

  //     });
  // }

  getItems() {
    console.log("getting items");
    this.restProvider.getItems().then(data => {
        this.items = data;
        console.log("this.items " , this.items);

      });
  }

}
