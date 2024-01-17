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

export default Dropdown;
