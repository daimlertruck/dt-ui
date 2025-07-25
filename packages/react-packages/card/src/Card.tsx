import { BaseProps } from '@dt-ui/react-core';
import { Typography } from '@dt-ui/react-typography';

import { CardStyled, CardTitleStyled, CardDetailStyled } from './Card.styled';

export const Card = ({ children, dataTestId }: BaseProps) => (
  <CardStyled data-testid={dataTestId ?? 'card'}>{children}</CardStyled>
);

Card.Title = ({ children }: BaseProps) => {
  return (
    <CardTitleStyled>
      <Typography element='h2' fontStyles='h4'>
        {children}
      </Typography>
    </CardTitleStyled>
  );
};

Card.Detail = ({ children }: BaseProps) => {
  return <CardDetailStyled>{children}</CardDetailStyled>;
};
