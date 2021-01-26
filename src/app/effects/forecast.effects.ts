import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import {
  ForecastUnion,
  loadForecastsSuccess,
  loadForecastsFailure,
} from '../actions/forecast.actions';
import { WeatherService } from '../services/weather/weather.service';

@Injectable()
export class ForecastEffects {
  @Effect()
  loadForecast$: Observable<any> = this.actions$.pipe(
    ofType<RouterNavigationAction>(ROUTER_NAVIGATION),
    filter((action) => action.payload.event.url.startsWith('/forecast')),
    mergeMap((action) => {
      const zipcode = action.payload.event.url.split('/').pop();
      return this.weatherService.getForecast(zipcode).pipe(
        map((data) => loadForecastsSuccess(zipcode, data)),
        catchError((error) => of(loadForecastsFailure(zipcode, error)))
      );
    })
  );

  constructor(
    private actions$: Actions<ForecastUnion>,
    private weatherService: WeatherService
  ) { }
}
