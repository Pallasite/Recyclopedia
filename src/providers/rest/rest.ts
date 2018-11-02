import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'http://172.16.4.87:8000';
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
    var result = this.getItems("Bicycle");
    console.log("result: " , result);
  }
  public async getItems(item: string) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/recycle_db/' + item).subscribe(data => {
        resolve(data); 
        console.log("data: " , data);
        // console.log("items: " , data.item);
      },
        err => {
          console.log("REST error: " , err);
          
      });
    });
  }
}
