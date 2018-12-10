import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { SearchPage } from '../pages/search/search';
import { LocationsPage } from '../pages/locations/locations';
import { HomePage } from '../pages/home/home';
import { UserProfile } from '../pages/profile/profile';
import { Favorites } from '../pages/favorites/favorites';


@Component({
templateUrl: 'app.html'
})
export class MyApp {
rootPage: any = TabsPage;

@ViewChild(Nav) nav;
SearchPage: any = SearchPage;
constructor(
platform: Platform,
statusBar: StatusBar, 
splashScreen: SplashScreen,

) {

platform.ready().then(() => {
// Okay, so the platform is ready and our plugins are available.
// Here we can do any higher level native things we might need
statusBar.styleDefault();
splashScreen.hide();
});
}

// NavCtrl can't be injected as this app file is the parent
// to all components. So we must use ViewChild to use nav.


openPage(page) {
if (page == 'SearchPage') {
this.nav.push(SearchPage);
}
else if (page == 'HomePage') {
this.nav.push(HomePage);
}
else if (page == 'LocationsPage') {
this.nav.push(LocationsPage);
}
else if (page == 'UserProfile') {
this.nav.push(UserProfile);
}
else if (page == 'Favorites') {
this.nav.push(Favorites);
}
}




}

