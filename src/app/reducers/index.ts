import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { zipCodeReducer, ZipcodeState } from "./zip-codes.reducer";
import { conditionsReducer, ConditionState } from "./current-conditions.reducer";

export interface State {
  zipcode: ZipcodeState;
  condition: ConditionState
}

export const reducers: ActionReducerMap<State> = {
  zipcode: zipCodeReducer,
  condition: conditionsReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
