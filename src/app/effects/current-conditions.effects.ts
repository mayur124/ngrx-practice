import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { addZipcode, ZipCodeUnion } from '../actions/zipcode.actions';
import {
  currentConditionsLoadFailure,
  currentConditionsLoadSuccess,
} from '../actions/current-condition.actions';
import { WeatherService } from '../services/weather/weather.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class CurrentConditionsEffects {
  @Effect()
  loadCurrentConditions$: Observable<any> = this.actions$.pipe(
    ofType(addZipcode.type),
    mergeMap((action) =>
      this.weatherService.loadCurrentConditions(action.zipcode).pipe(
        map((data) => currentConditionsLoadSuccess(action.zipcode, data)),
        catchError((error) =>
          of(currentConditionsLoadFailure(action.zipcode, error))
        )
      )
    )
  );

  constructor(private actions$: Actions<ZipCodeUnion>, private weatherService: WeatherService) { }
}
