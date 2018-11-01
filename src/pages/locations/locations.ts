import { Component, NgModule, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { GoogleMaps, GoogleMap } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html',
  providers: [GoogleMaps]
})

export class LocationsPage {
  // map: GoogleMap;
   /*
    constructor(
    public navCtrl: NavController, 
    public platform: Platform,
    private _googleMaps: GoogleMaps
    ) {
       var map;
       function initMap() {
         map = new google.maps.Map(document.getElementById('map'), {
           center: {lat: -34.397, lng: 150.644},
           zoom: 8
         });
       }
       ngAfterViewInit() {
        const options: any = { ... } // put your config here
        const map: GoogleMap = this.googleMaps.create('map', options);
       }
       this._googleMaps.isAvailable().then(() =>
      }
      */
     @ViewChild('map') mapElement: ElementRef;
     map: any;
    
     constructor(public navCtrl: NavController, public geolocation: Geolocation) {
    
     }
    
     ionViewDidLoad(){
       this.loadMap();
     }
    
     loadMap(){
      
      this.geolocation.getCurrentPosition().then((position) => {
    
       let latLng = new google.maps.LatLng(-34.9290, 138.6010);
    
       let mapOptions = {
         center: latLng,
         zoom: 15,
         mapTypeId: google.maps.MapTypeId.ROADMAP
       }
    
       this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    
      }, (err) => {
          console.log(err);
      });
     }
}
