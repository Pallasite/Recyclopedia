import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';



@Component({
  selector: 'page-item',
  templateUrl: 'itemPage.html'

})
export class ItemPage {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public event: Events
       
        ) {
            // receives event emitted from Search module
            this.event.subscribe('item:clicked', (itemInfo) => {
                this.getItemInfo(itemInfo);
            });
      }

    public async ionViewDidLoad() {

        // this.getItemInfo();
        
    }

    public async getItemInfo(itemInfo: any) {

        if (itemInfo) {
            var name = await itemInfo[0];
            var methods = await itemInfo[1];
            console.log("Name and Methods: " + name + ": " + methods);

            // just trying to display name for now
            return await name;
        }
    }


    // To display on itemPage

    // public getName() {
    //     return name;
    // }
    // public getMethods() {
    //     return methods;
    // }
    



}


