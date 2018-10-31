import { Component, NgModule } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { GoogleMaps, GoogleMap } from '@ionic-native/google-maps';

@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html',
  providers: [GoogleMaps]
})

export class LocationsPage {
   map: GoogleMap;
   
  constructor(
    public navCtrl: NavController, 
    public platform: Platform,
    private _googleMaps: GoogleMaps
 ) {
      // var map;
      // function initMap() {
      //   map = new google.maps.Map(document.getElementById('map'), {
      //     center: {lat: -34.397, lng: 150.644},
      //     zoom: 8
      //   });
      // }
// ngAfterViewInit() {
//   const options: any = { ... } // put your config here
//   const map: GoogleMap = this.googleMaps.create('map', options);
// }
  // this._googleMaps.isAvailable().then(() =>





  }

}
