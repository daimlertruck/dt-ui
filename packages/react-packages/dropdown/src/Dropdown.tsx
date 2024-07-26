import { BaseProps } from '@dt-ui/react-core';

import {
  DropdownContainer,
  DropdownDetail,
  DropdownMenu,
  DropdownOption,
  DropdownSelect,
} from './components';
import { DropdownStyled } from './Dropdown.styled';

import { DropdownOptionValue, DropdownContextProvider } from '.';

export interface DropdownProps extends BaseProps {
  defaultValue?: DropdownOptionValue;
  name?: string;
}

const Dropdown = ({
  children,
  defaultValue,
  style,
  name,
  dataTestId = 'dropdown',
}: DropdownProps) => (
  <DropdownContextProvider defaultValue={defaultValue} name={name}>
    <DropdownStyled data-testid={dataTestId} role='menu' style={style}>
      {children}
    </DropdownStyled>
  </DropdownContextProvider>
);

Dropdown.Container = DropdownContainer;
Dropdown.Detail = DropdownDetail;
Dropdown.Select = DropdownSelect;
Dropdown.Option = DropdownOption;
Dropdown.Menu = DropdownMenu;
export default Dropdown;
