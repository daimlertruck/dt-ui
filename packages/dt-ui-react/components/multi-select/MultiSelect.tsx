import { BaseProps } from '../../types';

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
  <MultiSelectContextProvider name={name} defaultValue={defaultValue}>
    <BaseMultiSelectStyled role='menu' data-testid={dataTestId}>
      {children}
    </BaseMultiSelectStyled>
  </MultiSelectContextProvider>
);

MultiSelect.Container = MultiSelectContainer;
MultiSelect.Select = MultiSelectItem;
MultiSelect.Option = MultiSelectOption;

export default MultiSelect;
