import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { GlobalService } from '../global/global.service';


@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html'
})
export class AdminView {

  constructor(
      public navCtrl: NavController,
      public restProvider: RestProvider,
      public global: GlobalService

      ) {


  }
//   response = {
//     token: '',
//     user: {
//       "email": String,
//       "first_name": String, 
//       "last_name": String, 
//       "pk": Number, 
//       "username": String
//     }
//   }

  itemInfo = {
      item: '',
      methods: ''
  };

  public async formSubmitted() {
      // submit to db 
    var item = this.itemInfo.item; 
    var methods = this.itemInfo.methods;
    this.itemInfo = {'item': item, 'methods': methods};

    if (this.itemInfo) {
        this.restProvider.adminSubmission(this.itemInfo)
          .then(data => {
              var response = data;
                console.log("Response from form submission: " , response);
          });

    }
      alert("Form submitted.");
      this.navCtrl.pop();
  }


}
