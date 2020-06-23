import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('searchBar') searchBar: ElementRef;

  location!: google.maps.LatLng;

  ngAfterViewInit() {
    setTimeout(() => {
      const input = this.searchBar.nativeElement;
      const autoComplete = new google.maps.places.Autocomplete(input, 
        {fields: ['geometry', 'name'], types: ['locality']});
      autoComplete.addListener('place_changed', () => {
        this.location = autoComplete.getPlace().geometry.location;
      });
    });
  }
}