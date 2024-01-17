import { BaseProps } from '../../types';
import { Typography } from '../typography';

import { EmptyStateStyled, EmptyStateContentStyled } from './EmptyState.styled';

export interface EmptyStateContentProps extends BaseProps {
  title: string;
  description: string;
}

export const EmptyState = ({ children, dataTestId }: BaseProps) => (
  <EmptyStateStyled data-testid={dataTestId ?? 'empty-state'}>
    {children}
  </EmptyStateStyled>
);

EmptyState.Content = ({ title, description }: EmptyStateContentProps) => {
  return (
    <EmptyStateContentStyled>
      <Typography color='textPrimary' element='h2' fontStyles='h4'>
        {title}
      </Typography>
      <Typography color='textSecondary' fontStyles='body1'>
        {description}
      </Typography>
    </EmptyStateContentStyled>
  );
};
