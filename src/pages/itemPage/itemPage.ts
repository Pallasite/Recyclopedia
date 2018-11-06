import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { SearchPage } from '../search/search';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-item',
  templateUrl: 'itemPage.html'
//   providers: [SearchPage, RestProvider]
})
export class ItemPage {
    // public search: SearchPage;
    // public navCtrl: NavController;
    
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        // public search: SearchPage,
        // public restProvider : RestProvider
        ) {

            // var things = this.navParams.get('items');
            // console.log("ITEMS PAGE items: , " , things);
      }

    public async ionViewDidLoad() {

        //var item = await this.search.getItemName();
        // console.log("item: " , item);
    }

}


