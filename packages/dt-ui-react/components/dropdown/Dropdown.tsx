import { BaseProps } from '../../types';

import {
  DropdownDetail,
  DropdownSelect,
  DropdownOption,
  DropdownContainer,
} from './components';
import { DropdownContextProvider } from './context';
import { BaseDropdownStyled } from './Dropdown.styled';
import { DropdownOptionValue } from './types';

export type DropdownProps = {
  defaultValue?: DropdownOptionValue;
  name?: string;
} & BaseProps;

const Dropdown = ({
  children,
  defaultValue,
  style,
  name,
  dataTestId = 'dropdown',
}: DropdownProps) => (
  <DropdownContextProvider name={name} defaultValue={defaultValue}>
    <BaseDropdownStyled role='menu' style={style} data-testid={dataTestId}>
      {children}
    </BaseDropdownStyled>
  </DropdownContextProvider>
);

Dropdown.Container = DropdownContainer;
Dropdown.Detail = DropdownDetail;
Dropdown.Select = DropdownSelect;
Dropdown.Option = DropdownOption;

export default Dropdown;
