import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ItemPage } from '../itemPage/itemPage';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  public items: any = [];
  searchTerm: string = '';
  
  constructor(
    public navCtrl: NavController,
    public restProvider: RestProvider,
    public navParams: NavParams
    ) {
      // let search = new SearchPage(this.items, this.items, this.items);
      // search.items = 'items';
      // console.log("items: beep: " , search.items);
  }
 
    ionViewDidLoad() {
      // console.log("ionViewDidLoad");
        this.setFilteredItems();
      }
 
    public async setFilteredItems() {
      // clear items while user types
      this.items = [];

      // search connection with our REST provider
        if (this.searchTerm) {
          this.restProvider.searchItems(this.searchTerm)
          .then(data => {
            this.items = data;
            console.log("data: " , data);

          });
        
          console.log("items: " , this.items);
        } 
      }

      public showItemPage() {
        console.log("pushing item page");
        this.navCtrl.push(ItemPage);
      }


      // not ready for itr 1
      public async getItemName() {
        console.log("sending items");
        return await this.items;
      }









  }
  


