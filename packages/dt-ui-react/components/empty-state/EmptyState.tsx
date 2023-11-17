import { BaseProps } from '../../types';
import { Typography } from '../typography';

import {
  EmptyStateStyled,
  EmptyStateDescriptionStyled,
  EmptyStateTitleStyled,
} from './EmptyState.styled';

export type EmptyStateProps = {
  title: string;
  description: string;
} & BaseProps;

export const EmptyState = ({
  children,
  dataTestId,
  title,
  description,
}: EmptyStateProps) => (
  <EmptyStateStyled data-testid={dataTestId ?? 'empty-state'}>
    <EmptyStateTitleStyled>
      <Typography element='h2' fontStyles='h4' color='textPrimary'>
        {title}
      </Typography>
    </EmptyStateTitleStyled>
    <EmptyStateDescriptionStyled>
      <Typography fontStyles='body1' color='textSecondary'>
        {description}
      </Typography>
    </EmptyStateDescriptionStyled>
    {children}
  </EmptyStateStyled>
);
