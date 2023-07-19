import { forwardRef } from 'react';

import { BaseProps } from '../../types';

import {
  BreadcrumbStyled,
  ListStyled,
  ItemStyled,
  AnchorStyled,
} from './Breadcrumb.styled';

export interface BreadcrumbAnchorProps extends BaseProps {
  href?: string;
  onClick?: () => void;
}

export const Breadcrumb = ({ children }: BaseProps) => {
  return (
    <BreadcrumbStyled aria-label='Breadcrumb' data-testid='breadcrumb'>
      {children}
    </BreadcrumbStyled>
  );
};

Breadcrumb.List = ({ children }: BaseProps) => {
  return <ListStyled>{children}</ListStyled>;
};

Breadcrumb.Item = ({ children }: BaseProps) => {
  return <ItemStyled>{children}</ItemStyled>;
};

Breadcrumb.Anchor = forwardRef<HTMLAnchorElement, BreadcrumbAnchorProps>(
  ({ children, onClick, href }, ref) => {
    return (
      <AnchorStyled onClick={onClick} ref={ref} href={href}>
        {children}
      </AnchorStyled>
    );
  }
);
