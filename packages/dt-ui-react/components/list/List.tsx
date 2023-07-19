import { BaseProps } from '../../types';
import { ListStyleType } from '../../utils';
import { Typography } from '../typography';

import { CounterListItemStyled, ListStyled } from './List.styled';

export interface ListProps extends BaseProps {
  listStyleType?: ListStyleType;
  hasMarginLeft?: boolean;
  hasPaddingLeft?: boolean;
}

export const List = ({
  children,
  dataTestId,
  listStyleType,
  hasMarginLeft,
  hasPaddingLeft,
  style,
}: ListProps) => {
  const testId = dataTestId ?? 'list';

  return (
    <ListStyled
      data-testid={testId}
      listStyleType={listStyleType}
      hasMarginLeft={hasMarginLeft}
      hasPaddingLeft={hasPaddingLeft}
      style={style}
    >
      {children}
    </ListStyled>
  );
};

List.Title = ({ children }: BaseProps) => (
  <Typography
    element='h2'
    fontStyles='pSmall'
    style={{ marginTop: '16px', marginBottom: '16px', fontWeight: 700 }}
  >
    {children}
  </Typography>
);

List.CounterListItem = ({ children }: BaseProps) => (
  <CounterListItemStyled>{children}</CounterListItemStyled>
);
