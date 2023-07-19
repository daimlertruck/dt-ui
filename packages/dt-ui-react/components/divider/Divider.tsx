import { BaseProps } from '../../types';

import { DividerStyled } from './Divider.styled';

export const Divider = ({ style }: BaseProps) => {
  return <DividerStyled style={style} />;
};
