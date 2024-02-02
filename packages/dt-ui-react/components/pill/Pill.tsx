import { BaseProps, AlphaColors } from '../../types';

import { PillStyled } from './Pill.styled';

export interface PillProps extends BaseProps {
  color?: AlphaColors;
}

export const Pill = ({
  children,
  color = 'success',
  dataTestId,
}: PillProps) => {
  return (
    <PillStyled color={color} data-testid={dataTestId ?? 'pill'}>
      {children}
    </PillStyled>
  );
};
