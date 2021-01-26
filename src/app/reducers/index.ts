import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { zipCodeReducer, ZipcodeState } from "./zip-codes.reducer";
import { conditionsReducer, ConditionState } from "./current-conditions.reducer";
import { forecastReducer, ForecastState } from "./forecast.reducer"
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

export interface State {
  zipcode: ZipcodeState;
  condition: ConditionState,
  forecast: ForecastState,
  router: RouterReducerState
}

export const reducers: ActionReducerMap<State> = {
  zipcode: zipCodeReducer,
  condition: conditionsReducer,
  forecast: forecastReducer,
  router: routerReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

/**
 * create such selectors when State becomes very complex
 */
export const selectZipcodeState = (state: State) => state.zipcode;

/**
 * createSelector() is a memoized function that will cache the results and improve the performance.
 */
export const selectZipcodeList = createSelector(selectZipcodeState, (state: ZipcodeState) => state.zipcodes);

export const selectForecastState = (state: State) => state.forecast;

export const selectForecast = createSelector(selectForecastState, (state: ForecastState) => state.forecast)