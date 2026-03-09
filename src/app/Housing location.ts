import { Component, input } from '@angular/core';
import { HousingLocationInfo } from './Housinglocationinfo';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterLink],
  templateUrl: './Housing location.html',
  styleUrl: './Housing location.css',
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}