import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectForecast, State } from 'src/app/reducers';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-forecasts-list',
  templateUrl: './forecasts-list.component.html',
  styleUrls: ['./forecasts-list.component.css'],
})
export class ForecastsListComponent implements OnInit {
  forecast: any;
  constructor(
    private store: Store<State>,
    public weatherService: WeatherService
  ) {
    this.store
      .select(selectForecast)
      .subscribe((forecast) => (this.forecast = forecast));
  }

  ngOnInit(): void { }
}
