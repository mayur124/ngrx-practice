import { createAction, union } from '@ngrx/store';

export const currentConditionsLoadSuccess = createAction(
  '[CurrentConditionAction] Load CurrentConditionActions Success',
  (zipcode: string, conditions: any) => ({ zipcode, conditions })
);

export const currentConditionsLoadFailure = createAction(
  '[CurrentConditionAction] Load CurrentConditionActions Failure',
  (zipcode: string, error: any) => ({ zipcode, error })
);

const action = union({
  currentConditionsLoadSuccess,
  currentConditionsLoadFailure,
});

export type CurrentConditionUnion = typeof action;