import { Component, NgModule, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { GoogleMaps, GoogleMap } from '@ionic-native/google-maps';

declare var google: any;

@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html',
  providers: [GoogleMaps]
})

export class LocationsPage implements OnInit {
   map: GoogleMap;
 
  constructor(
    public navCtrl: NavController, 
    public platform: Platform,
    private _googleMaps: GoogleMaps
 ) {

   function ngOnInit() {
    console.log("on init");
    this.initMap();
  }

      var map;
      function initMap() {
        console.log("It's running...");
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
// ngAfterViewInit() {
//   const options: any = { ... } // put your config here
//   const map: GoogleMap = this.googleMaps.create('map', options);
// }
  // this._googleMaps.isAvailable().then(() =>





  }

}
