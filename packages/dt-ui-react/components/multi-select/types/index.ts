import { ReducerActionProps } from '../reducer';

export type MultiSelectOptionValue = {
  text?: string;
  value: string;
};

export interface MultiSelectContextState {
  state: MultiSelectOptionValue[];
  isOpen: boolean;
  name?: string;
  dispatch: React.Dispatch<ReducerActionProps>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export enum Actions {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}
