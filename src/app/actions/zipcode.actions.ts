import { createAction, union } from '@ngrx/store';

export const addZipcode = createAction(
  '[Zipcode] Add Zipcode',
  (zipcode: string) => ({ zipcode })
);

export const removeZipcode = createAction(
  '[Zipcode] Remove Zipcode',
  (zipcode: string) => ({ zipcode })
);

const actions = union({
  addZipcode,
  removeZipcode
});

export type ZipCodeUnion = typeof actions;