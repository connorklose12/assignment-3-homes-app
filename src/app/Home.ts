import { Component, inject } from '@angular/core';
import { HousingLocation } from './Housing location';
import { HousingLocationInfo } from './Housinglocationinfo';
import { HousingService } from './Housing service';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  templateUrl: './Home.html',
  styleUrl: './Home.css',
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocationInfo[] = [];

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}