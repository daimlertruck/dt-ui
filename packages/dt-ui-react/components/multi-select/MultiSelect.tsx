import { BaseProps } from '../../types';
import { Provider } from '../Provider';

import {
  MultiSelectItem,
  MultiSelectOption,
  MultiSelectContainer,
} from './components';
import { MultiSelectContextProvider } from './context';
import { BaseMultiSelectStyled } from './MultiSelect.styled';
import { MultiSelectOptionValue } from './types';

export type MultiSelectProps = {
  defaultValue?: MultiSelectOptionValue[];
  name?: string;
} & BaseProps;

const MultiSelect = ({
  children,
  defaultValue,
  name,
  dataTestId = 'multi-select',
}: MultiSelectProps) => (
  <Provider>
    <MultiSelectContextProvider name={name} defaultValue={defaultValue}>
      <BaseMultiSelectStyled role='menu' data-testid={dataTestId}>
        {children}
      </BaseMultiSelectStyled>
    </MultiSelectContextProvider>
  </Provider>
);

MultiSelect.Container = MultiSelectContainer;
MultiSelect.Select = MultiSelectItem;
MultiSelect.Option = MultiSelectOption;

export default MultiSelect;
