import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ItemPage } from '../itemPage/itemPage';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  providers: [ItemPage]
})
export class SearchPage {
  public items: any = [];
  searchTerm: string = '';
  public itemInfo: any;
  constructor(
    public navCtrl: NavController,
    public restProvider: RestProvider,
    public navParams: NavParams,
    public event: Events,
    public itemPage: ItemPage
    ) {
      
  }
 
    ionViewDidLoad() {
        this.searchItems();
      }
 
    public async searchItems() {
      // clear items while user types
      this.items = [];

      // search connection with our REST provider
        if (this.searchTerm) {
          this.restProvider.searchItems(this.searchTerm)
          .then(data => {
            this.items = data;
            // console.log("data: " , data);
          });
        
          console.log("items: " , this.items);
        } 
      }

      public showItemPage() {
        console.log("pushing item page");
        this.navCtrl.push(ItemPage, {'name': this.itemInfo[0], 'methods': this.itemInfo[1]});
      }


      // sends itemInfo (item name and item methods)
      // to ItemPage module
      public async getItemInfo(i: any) {
        
        if (this.items[i]) {
          var name = this.items[i].item;
          // console.log("Item name: " + name);

          var methods = this.items[i].methods;
          // console.log("Item methods :" + methods);

          var itemInfo = [];
          itemInfo.push(name);
          itemInfo.push(methods);
          // console.log("itemInfo: " , itemInfo);

          // to send itemInfo to itemPage
          //this.event.publish('item:clicked', itemInfo);

          this.itemInfo = itemInfo;
          
        }
      }
     



  }
  


