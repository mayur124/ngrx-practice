import { Action, createReducer, on } from '@ngrx/store';
import { currentConditionsLoadSuccess, CurrentConditionUnion } from '../actions/current-condition.actions';

export const currentConditionsFeatureKey = 'currentConditions';

export interface ConditionState {
  currentConditions: Map<string, any>;
}

export const initialState: ConditionState = {
  currentConditions: new Map(),
};

export function conditionsReducer(state = initialState, action: CurrentConditionUnion): ConditionState {
  switch (action.type) {
    case currentConditionsLoadSuccess.type:
      const newCondnMap = new Map(state.currentConditions);
      newCondnMap.set(action.zipcode, action.conditions)
      return { ...state, currentConditions: newCondnMap };
    default:
      return state
  }
}