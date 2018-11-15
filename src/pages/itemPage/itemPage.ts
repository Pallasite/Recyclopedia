import { Component } from '@angular/core';
import { NavController, NavParams, Events, Item } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';



@Component({
  selector: 'page-item',
  templateUrl: 'itemPage.html'

})
export class ItemPage {
   public itemInfo: any;
   public name: string;
   public methods: string;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public event: Events,
        public restProvider: RestProvider,
        ) {
            // receives parameters from Search module
            this.name = navParams.get('name');
            this.methods = navParams.get('methods');
            
      }



}


