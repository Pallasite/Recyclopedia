import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

 
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'http://10.140.145.247:8000';
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  // search item
  public async searchItems(item: string) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/recycle_db/search/' + item).subscribe(data => {
        resolve(data); 
      },
        err => {
          console.log("REST error: " , err);
          
      });
    });
  }

  // user registration
  public async registerUser(info: any) {
    console.log("Registering user...");
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/rest-auth/registration/', info).subscribe(data => {
      resolve(data);
      })
    })
  }

  // user login
  public async userLogin(info: any) {
    console.log("Logging in...");
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/rest-auth/login/', info).subscribe(data => {
      resolve(data);
      })
    })
  }
}
