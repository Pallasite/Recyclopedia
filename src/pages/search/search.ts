import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
// import { Data } from '../../providers/data/data';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  items: any;
  searchTerm: string = '';
  
  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    // search connection here with database
      //this.getItem();
      // this.restProvider.getItem("Bicycle");
      // console.log("working");
      
  }
 
    ionViewDidLoad() {
      console.log("ionViewDidLoad");
        this.setFilteredItems();
 
    }
 
    setFilteredItems() {
        if (this.searchTerm) {
        this.items = this.restProvider.getItems(this.searchTerm);
        console.log("THIS.ITEMS: " ,  this.items);
        }
    }

  // getItem() {
  //   console.log("getting items");
  //   this.restProvider.getItems().then(data => {
  //       this.items = data;
  //       console.log("this.items " , this.items);

  //     });
  // }

}
