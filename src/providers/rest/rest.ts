import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'http://recycle-test.3p3a26xy7t.us-west-2.elasticbeanstalk.com/';
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
    this.getItems();
  }
  getItems() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/recycle_db/').subscribe(data => {
        resolve(data); 
        console.log("data: " , data);
        console.log("items: " , data.item);
      },
        err => {
          console.log("error: " + err);
          
      });
    });
  }
}
