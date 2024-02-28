import { BaseProps } from '@dt-ui/react-core';
import { Typography } from '@dt-ui/react-typography';

import { ListStyleType } from '../../utils';

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
      hasMarginLeft={hasMarginLeft}
      hasPaddingLeft={hasPaddingLeft}
      listStyleType={listStyleType}
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
