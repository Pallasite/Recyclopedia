import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'http://127.0.0.1:8000/'; //'http://10.141.23.242:8000';
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
  public async searchItems(item: string) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/recycle_db/search/' + item).subscribe(data => {
        resolve(data); 
        // this.http.get(this.apiUrl + '/recycle_db/search/' + item).map(res => res.json()).subscribe(data => {
        //   resolve(data);
        // console.log(typeof(data));
        // console.log("data: " , data);
        // console.log("data[0]: " , data[0]);
        // console.log("data[0].item: " , data[0].item);

        // console.log("items: " , data.item);
      },
        err => {
          console.log("REST error: " , err);
          
      });
    });
  }
}
