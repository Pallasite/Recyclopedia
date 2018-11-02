import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ItemPage } from '../itemPage/itemPage';
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  items: any = [];
  searchTerm: string = '';
  
  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    // search connection here with database
      
  }
 
    ionViewDidLoad() {
      // console.log("ionViewDidLoad");
        this.setFilteredItems();
      }
 
    public async setFilteredItems() {
      this.items = [];
        if (this.searchTerm) {
          this.restProvider.searchItems(this.searchTerm)
          .then(data => {
            this.items = data;
            console.log("data: " , data);
            //console.log("0 ", data[0]);
          });
        
          console.log("items: " , this.items);
        
      
        } 
      }

      // public async showItemPage() {
      //   console.log("pushing item page");
      //   this.navCtrl.push(ItemPage);
      // }









  }
  

    
  // getItem() {
  //   console.log("getting items");
  //   this.restProvider.getItems().then(data => {
  //       this.items = data;
  //       console.log("this.items " , this.items);

  //     });
  // }


