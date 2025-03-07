import { Checkbox } from '@dt-ui/react-checkbox';
import { BaseProps } from '@dt-ui/react-core';
import { Radio } from '@dt-ui/react-radio';
import { Typography } from '@dt-ui/react-typography';
import { useState } from 'react';

import {
  CardStyled,
  CardContentStyled,
  CardMediaStyled,
  CardTitleStyled,
  CardDetailStyled,
  CardActionsStyled,
  SelectionWrapperStyled,
} from './Card.styled';

export interface CardProps extends BaseProps {
  isSelectable: boolean;
  variant: 'vertical' | 'horizontal';
  selectionType?: 'radio' | 'checkbox';
  image?: string;
  onClick?: () => void;
}

export const Card = ({
  children,
  dataTestId,
  isSelectable,
  variant,
  image,
  selectionType = 'checkbox',
  onClick,
}: CardProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <CardStyled
      data-testid={dataTestId ?? 'card'}
      onClick={onClick}
      selected={selected}
      variant={variant}
    >
      {isSelectable ? (
        <SelectionWrapperStyled>
          {selectionType === 'checkbox' ? (
            <Checkbox
              isChecked={selected}
              onChange={() => setSelected(!selected)}
            />
          ) : (
            <Radio label='' value='' />
          )}
        </SelectionWrapperStyled>
      ) : null}
      {image ? (
        <CardMediaStyled>
          <img
            alt='Card media'
            src={image}
            width={variant === 'vertical' ? '360' : '200'}
          />
        </CardMediaStyled>
      ) : null}

      <CardContentStyled variant={image ? variant : 'horizontal'}>
        {children}
      </CardContentStyled>
    </CardStyled>
  );
};

Card.Title = ({ children }: BaseProps) => (
  <CardTitleStyled>
    <Typography color='content.dark' element='h4' fontStyles='h4'>
      {children}
    </Typography>
  </CardTitleStyled>
);

Card.Detail = ({ children }: BaseProps) => (
  <CardDetailStyled>{children}</CardDetailStyled>
);

Card.Actions = ({ children }: BaseProps) => (
  <CardActionsStyled>{children}</CardActionsStyled>
);
