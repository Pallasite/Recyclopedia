import { Component } from '@angular/core';
import { LocationsPage } from '../locations/locations';
import { SearchPage } from '../search/search';
import { HomePage } from '../home/home';
import { UserProfile } from '../profile/profile';
import { Favorites } from '../favorites/favorites';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1 = SearchPage;
  tab2 = LocationsPage;
  tab3 = HomePage;
  tab4 = UserProfile;  // add these in like above components
  tab5 = Favorites;

  constructor() {
   
  }
}
