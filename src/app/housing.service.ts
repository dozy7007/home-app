import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  ngFor="let housingLocation of housingLocationList";

  
  

  constructor() { }
}
