import { Component } from '@angular/core';
import { LocationsPage } from '../locations/locations';
import { SearchPage } from '../search/search';
import { HomePage } from '../home/home';
import { BarcodeScan } from '../scan/scan';
import { Favorites } from '../favorites/favorites';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1 = SearchPage;
  tab2 = LocationsPage;
  tab3 = HomePage;
  tab4 = BarcodeScan;  // add these in like above components
  tab5 = Favorites;

  constructor() {
   
  }
}
