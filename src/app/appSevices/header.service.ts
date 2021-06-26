import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  selectedLang:any;
  constructor() { 
    this.selectedLang = new BehaviorSubject('en');
  }

  
}
