import { Component, NgModule, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { GoogleMaps, GoogleMap } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html',
  //providers: [GoogleMaps]
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
     @ViewChild('directionsPanel') directionsPanel: ElementRef;
     map: any;
    
     constructor(public navCtrl: NavController, public geolocation: Geolocation) {
    
     }
    
     ionViewDidLoad(){
       this.loadMap();
       this.startNavigating();
     }
    
     loadMap(){
      
      this.geolocation.getCurrentPosition().then((position) => {
    
       let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    
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

     addInfoWindow(marker, content){
 
      let infoWindow = new google.maps.InfoWindow({
        content: content
      });
     
      google.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(this.map, marker);
      });
     
    }

     addMarker(){
 
      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.map.getCenter()
      });
     
      let content = "<h4>Information!</h4>";         
     
      this.addInfoWindow(marker, content);
     
    }

    startNavigating(){
 
      let directionsService = new google.maps.DirectionsService;
      let directionsDisplay = new google.maps.DirectionsRenderer;

      directionsDisplay.setMap(this.map);
      directionsDisplay.setPanel(this.directionsPanel.nativeElement);

      directionsService.route({
          origin: 'adelaide',
          destination: 'adelaide oval',
          travelMode: google.maps.TravelMode['DRIVING']
      }, (res, status) => {

          if(status == google.maps.DirectionsStatus.OK){
              directionsDisplay.setDirections(res);
          } else {
              console.warn(status);
          }

      });

  }
}
