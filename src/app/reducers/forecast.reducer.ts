import { Action, createReducer, on } from '@ngrx/store';
import { ForecastUnion, loadForecastsSuccess, loadForecastsFailure } from "../actions/forecast.actions";

export const forecastFeatureKey = 'forecast';

export interface ForecastState {
  forecast: any;
}

export const initialState: ForecastState = {
  forecast: {}
};

export function forecastReducer(state = initialState, action: ForecastUnion): ForecastState {
  switch (action.type) {
    case loadForecastsSuccess.type:
      return { ...state, forecast: action.forcast }
    default:
      return state;
  }
}

