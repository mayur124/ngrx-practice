import { addZipcode, removeZipcode, ZipCodeUnion } from '../actions/zipcode.actions';

export const zipCodesFeatureKey = 'zipCodes';

export interface ZipcodeState {
  zipcodes: string[];
}

export const initialState: ZipcodeState = {
  zipcodes: [],
};

export function zipCodeReducer(state = initialState, action: ZipCodeUnion): ZipcodeState {
  switch (action.type) {
    case addZipcode.type:
      return {
        ...state,
        zipcodes: [...state.zipcodes, action.zipcode]
      };
    case removeZipcode.type:
      return {
        ...state,
        zipcodes: state.zipcodes.filter((zip) => zip != action.zipcode)
      }
    default:
      return state;
  }
}