import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { GoogleMaps, GoogleMap } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

declare var google: any;

@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html',
  //providers: [GoogleMaps]
})

export class LocationsPage {
 
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('directionsPanel') directionsPanel: ElementRef;
  map: any;

  markers: any;
  autocomplete: any;
  GoogleAutocomplete: any;
  GooglePlaces: any;
  geocoder: any
  autocompleteItems: any;
  //loading: any;
    
  constructor(public navCtrl: NavController, public geolocation: Geolocation, public zone: NgZone) {
    let elem = document.createElement("div");
    this.GooglePlaces = new google.maps.places.PlacesService(elem);
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
    this.markers = [];
    this.geocoder = new google.maps.Geocoder;
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

     updateSearchResults(){
      if (this.autocomplete.input == '') {
        this.autocompleteItems = [];
        return;
      }
      this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
        (predictions, status) => {
          this.autocompleteItems = [];
          if(predictions){
            this.zone.run(() => {
              predictions.forEach((prediction) => {
                this.autocompleteItems.push(prediction);
              });
            });
          }
      });
    }

    selectSearchResult(item){
      this.clearMarkers();
      this.autocompleteItems = [];
  
      this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
        if(status === 'OK' && results[0]){
          // let position = {
          //     lat: results[0].geometry.location.lat,
          //     lng: results[0].geometry.location.lng
          // };
          let marker = new google.maps.Marker({
            position: results[0].geometry.location,
            map: this.map
          });
          this.markers.push(marker);
          this.map.setCenter(results[0].geometry.location);
        }
      })
    }

    clearMarkers(){
      for (var i = 0; i < this.markers.length; i++) {
        console.log(this.markers[i])
        this.markers[i].setMap(null);
      }
      this.markers = [];
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

// export class LocationsPage implements OnInit {
//    map: GoogleMap;
 
//   constructor(
//     public navCtrl: NavController, 
//     public platform: Platform,
//     private _googleMaps: GoogleMaps
//  ) {
  //  map: GoogleMap;
 
//   constructor(
//     public navCtrl: NavController, 
//     public platform: Platform,
//     private _googleMaps: GoogleMaps
//  ) {

  //  function ngOnInit() {
  //   console.log("on init");
  //   this.initMap();
  // }

      // var map;
      // function initMap() {
      //   console.log("It's running...");
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