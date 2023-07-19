import { BaseProps, Direction } from '../../../types';
import { Typography } from '../../typography';
import { PageType } from '../constants';

import {
  DescriptionStyled,
  PageHeaderStyled,
  SegmentStyled,
} from './PageHeader.styled';

export interface PageHeaderProps extends BaseProps {
  variant?: PageType;
  direction?: Direction;
}

export interface SegmentProps extends BaseProps {
  isAlignToRight?: boolean;
}

export const PageHeader = ({
  children,
  variant = PageType.None,
  direction = 'row',
  dataTestId,
}: PageHeaderProps) => {
  return (
    <PageHeaderStyled
      variant={variant}
      direction={direction}
      data-testid={`${dataTestId}-page-header`}
    >
      {children}
    </PageHeaderStyled>
  );
};

PageHeader.Segment = ({
  children,
  style,
  isAlignToRight = false,
}: SegmentProps) => {
  return (
    <SegmentStyled isAlignToRight={isAlignToRight} style={style}>
      {children}
    </SegmentStyled>
  );
};

PageHeader.Title = ({ children, variant = PageType.None }: PageHeaderProps) => {
  return (
    <Typography
      element='h1'
      style={{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}
      fontStyles={variant === PageType.Detail ? 'h4' : 'h2'}
    >
      {children}
    </Typography>
  );
};

PageHeader.TextDetail = ({ children }: BaseProps) => {
  return (
    <Typography
      element='span'
      fontStyles='pXSmall'
      color='gray_100'
      style={{ marginTop: '8px' }}
    >
      {children}
    </Typography>
  );
};
PageHeader.Description = ({ children }: BaseProps) => {
  return (
    <DescriptionStyled>
      <Typography color='gray_200' dataTestId='header-description'>
        {children}
      </Typography>
    </DescriptionStyled>
  );
};
