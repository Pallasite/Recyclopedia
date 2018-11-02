import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LocationsPage } from '../pages/locations/locations';
import { SearchPage } from '../pages/search/search';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BarcodeScan } from '../pages/scan/scan';
import { Favorites } from '../pages/favorites/favorites';
import { Geolocation } from '@ionic-native/geolocation';
import { FormsPage } from '../pages/contact/contact';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps, GoogleMap } from '@ionic-native/google-maps';

// Django/Rest Imports
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';


@NgModule({
  declarations: [
    MyApp,
    LocationsPage,
    SearchPage,
    HomePage,
    TabsPage,
    BarcodeScan,
    Favorites,
    FormsPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
    
  ],
  bootstrap: [IonicApp],
    entryComponents: [
      MyApp,
      LocationsPage,
      SearchPage,
      HomePage,
      TabsPage,
      BarcodeScan,
      Favorites,
      FormsPage,
    ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    RestProvider
  ]
})
export class AppModule {}
