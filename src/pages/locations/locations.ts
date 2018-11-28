import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
//import { GoogleMaps, GoogleMap } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
// from search
import { RestProvider } from '../../providers/rest/rest';
//import { ItemPage } from '../itemPage/itemPage';

declare var google: any;
var infoWindow = null;
var userPosition;

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
  geocoder: any
  //loading: any;
  // these are from search module
  searchTerm: string = '';
  public locations: any = [];
  // this is for marker windows
  infoWindow: any;
    
  constructor(public navCtrl: NavController, public geolocation: Geolocation, public zone: NgZone, public restProvider: RestProvider, public navParams: NavParams, public event: Events) {
    let elem = document.createElement("div");
    //this.GooglePlaces = new google.maps.places.PlacesService(elem);
    //this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    //this.autocomplete = { input: '' };
    //this.autocompleteItems = [];
    this.markers = [];
    this.geocoder = new google.maps.Geocoder;
    this.locations = [];
    this.infoWindow;
    // from search
    
  }
    
     ionViewDidLoad(){
       this.loadMap();
       //this.startNavigating();
     }
     
     loadMap(){
      
      this.geolocation.getCurrentPosition().then((position) => {
        
       userPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

       let mapOptions = {
         center: userPosition,
         zoom: 15,
         mapTypeId: google.maps.MapTypeId.ROADMAP
       }
    
       this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      }, (err) => {
          console.log(err);
      });
     }

     // these 2 methods are from search
     public async searchItems() {
      // clear locations while user types
      this.locations = [];
      // search connection with our REST provider
        if (this.searchTerm) {
          console.log("searchterm: " + this.searchTerm);
          this.restProvider.searchItems(this.searchTerm)
          .then(data => {
            this.locations = data;
            console.log("data: " , data);

          });
        
          console.log("items: " , this.locations);
        } 
      }

      public async getLocationInfo(i: any) {
        if (this.locations[i]) {
          console.log("location: " , this.locations[i]);
          this.locations = this.locations[i].locations;
        }
        console.log("adding markers to map");
        // for every stored location for a given item, add a marker to the map
        for(var j = 0; j < this.locations.length; j++) {
          console.log(this.locations[j]);
          this.addMarker(this.locations[j].latitude, this.locations[j].longitude, this.locations[j].name);
        }
      }
      /*

      addInfoWindowToMarker(marker) {
        var infoWindowContent = '<div id="content"><h1 id="firstHeading" class="firstHeading">' + marker.title + '</h1></div>';
        var infoWindow = new google.maps.InfoWindow({
          content: infoWindowContent
        });
        marker.addListener('click', () => {
          this.closeAllInfoWindows();
          infoWindow.open(this.map, marker);
        });
        this.infoWindow.push(infoWindow);
      }
      */
     addInfoWindow(marker, content){
 
      infoWindow = new google.maps.InfoWindow({
        content: content
      });

     
      google.maps.event.addListener(marker, 'click', () => {
        if (infoWindow) {
          infoWindow.close();
      }
        infoWindow.open(this.map, marker);
      });
     
    }

    // clears the markers from the map and then clears the marker array
    clearMarkers(){
      for (var i = 0; i < this.markers.length; i++) {
        console.log(this.markers[i])
        this.markers[i].setMap(null);
      }
      this.markers = [];
    }

    addMarkerCenter(){
      // if admin user wants to add locations (will be developed in iteration 3) for now just adds marker to center of map on screen
      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.map.getCenter(),
        draggable: true,
        //infoClick: function(a) {
          //this.startNavigating(marker);
       // }
      });
     
      let content = String(this.markers.length+1);
      this.markers.push(marker);       
      this.addInfoWindow(marker, content);
     
    }
    
     addMarker(lat, long, name){
      // clears old markers from map
      console.log("lat long: " + +lat + typeof(long));
      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        // this was +lat, +long WHY?
        position: new google.maps.LatLng(lat,long)
      });
     
      let content = name;         
     
      this.addInfoWindow(marker, content);
     
    }

    // future styling of map search feature, will drop pins in sequential order
    /*
    function drop() {
      for (var i =0; i < markerArray.length; i++) {
        setTimeout(function() {
          addMarkerMethod();
        }, i * 200);
      }
    }*/

    
    startNavigating(marker){
 
      let directionsService = new google.maps.DirectionsService;
      let directionsDisplay = new google.maps.DirectionsRenderer;

      directionsDisplay.setMap(this.map);
      directionsDisplay.setPanel(this.directionsPanel.nativeElement);

      let dest = new google.maps.LatLng(userPosition.coords.latitude, userPosition.coords.longitude);

      directionsService.route({
          origin: marker.getPosition(),
          destination: dest,
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