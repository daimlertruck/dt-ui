import { Typography } from '../../../dt-ui-react/components/typography';
import { BaseProps } from '../../../dt-ui-react/types';

import { EmptyStateStyled, EmptyStateContentStyled } from './EmptyState.styled';

export interface EmptyStateContentProps extends Omit<BaseProps, 'children'> {
  title: string;
  description: string;
}

export const EmptyState = ({ children, dataTestId, style }: BaseProps) => (
  <EmptyStateStyled data-testid={dataTestId ?? 'empty-state'} style={style}>
    {children}
  </EmptyStateStyled>
);

EmptyState.Content = ({
  dataTestId,
  style,
  title,
  description,
}: EmptyStateContentProps) => {
  return (
    <EmptyStateContentStyled
      data-testid={dataTestId ?? 'empty-state-content'}
      style={style}
    >
      <Typography color='textPrimary' element='h2' fontStyles='h4'>
        {title}
      </Typography>
      <Typography color='textSecondary' fontStyles='body1'>
        {description}
      </Typography>
    </EmptyStateContentStyled>
  );
};
