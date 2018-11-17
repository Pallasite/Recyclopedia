import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LocationsPage } from '../pages/locations/locations';
import { SearchPage } from '../pages/search/search';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UserProfile } from '../pages/profile/profile';
import { Favorites } from '../pages/favorites/favorites';
import { Geolocation } from '@ionic-native/geolocation';
import { FormsPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ItemPage } from '../pages/itemPage/itemPage';
import { RegisterPage } from '../pages/register/register';
import { AdminView } from '../pages/admin/admin';
import { GlobalService } from '../pages/global/global.service';

// Django/Rest Imports
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';


@NgModule({
  declarations: [
    MyApp,
    LocationsPage,
    SearchPage,
    HomePage,
    TabsPage,
    UserProfile,
    Favorites,
    FormsPage,
    ItemPage,
    RegisterPage,
    AdminView
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
      UserProfile,
      Favorites,
      FormsPage,
      ItemPage,
      RegisterPage,
      AdminView
    ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GlobalService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
