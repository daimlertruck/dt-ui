import { BaseProps } from '../../types';

import {
  DropdownContainer,
  DropdownDetail,
  DropdownMenu,
  DropdownOption,
  DropdownSelect,
} from './components';
import { DropdownContextProvider } from './context';
import { BaseDropdownStyled } from './Dropdown.styled';
import { DropdownOptionValue } from './types';

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
    <BaseDropdownStyled data-testid={dataTestId} role='menu' style={style}>
      {children}
    </BaseDropdownStyled>
  </DropdownContextProvider>
);

Dropdown.Container = DropdownContainer;
Dropdown.Detail = DropdownDetail;
Dropdown.Select = DropdownSelect;
Dropdown.Option = DropdownOption;
Dropdown.Menu = DropdownMenu;
export default Dropdown;
