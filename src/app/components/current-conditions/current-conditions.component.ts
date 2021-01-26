import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { removeZipcode } from 'src/app/actions/zipcode.actions';
import { State } from 'src/app/reducers';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent implements OnInit {

  zipcodeList: string[];
  currentConditions: Map<string, any>;

  constructor(
    private router: Router,
    private store: Store<State>,
    public weatherService: WeatherService) {
    this.store
      .select(state => state.zipcode)
      .subscribe(zips => this.zipcodeList = zips.zipcodes);
    this.store
      .select(state => state.condition)
      .subscribe(conditions => {
        this.currentConditions = conditions.currentConditions
      });
  }

  ngOnInit(): void {
  }

  showForecast(zipcode: string) {
    this.router.navigate(['/forecast', zipcode]);
  }

  getConditions(zip: string) {
    return this.currentConditions.get(zip);
  }

  removeZip(zipcode: string) {
    this.store.dispatch(removeZipcode(zipcode));
  }

}
