import { createAction, union } from '@ngrx/store';

export const loadForecastsSuccess = createAction(
  '[Forecast] Load Forecasts Success',
  (zipcode: string, forcast: any) => ({ zipcode, forcast })
);

export const loadForecastsFailure = createAction(
  '[Forecast] Load Forecasts Failure',
  (zipcode: string, error: any) => ({ zipcode, error })
);

const actions = union({
  loadForecastsSuccess,
  loadForecastsFailure
});

export type ForecastUnion = typeof actions;
