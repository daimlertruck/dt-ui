import { Reducer } from 'react';

import { MultiSelectOptionValue, Actions } from '../types';

export interface ReducerActionProps {
  type: Actions;
  payload: MultiSelectOptionValue;
}

export const MultiSelectReducer: Reducer<
  MultiSelectOptionValue[],
  ReducerActionProps
> = (state: MultiSelectOptionValue[], action: ReducerActionProps) => {
  const { type } = action;
  switch (type) {
    case Actions.ADD:
      const isDuplicated = state.find(
        (stateValue) => stateValue.value === action.payload.value
      );

      if (isDuplicated) {
        return state.map((item) =>
          item.value === action.payload.value ? action.payload : item
        );
      }

      return [...state, action.payload];
    case Actions.REMOVE:
      return state.filter((opt) => opt.value !== action.payload.value);
    default:
      return state;
  }
};
