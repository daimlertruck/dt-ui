import { BaseProps } from '@dt-ui/react-core';
import { forwardRef } from 'react';

import { LinkStyled } from './Link.styled';

import { LinkTextSize, LinkVariant } from '.';

export interface LinkProps
  extends BaseProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isDisabled?: boolean;
  onClick?: () => void;
  textSize?: string;
  variant?: LinkVariant;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      isDisabled,
      children,
      textSize = LinkTextSize.Medium,
      dataTestId,
      onClick,
      variant,
      href,
      style,
      ...rest
    },
    ref
  ) => {
    return (
      <LinkStyled
        data-testid={dataTestId ?? 'link'}
        disabled={isDisabled}
        ref={ref}
        style={style}
        textSize={textSize}
        variant={variant}
        {...(!isDisabled && { href, onClick })}
        {...rest}
      >
        {children}
      </LinkStyled>
    );
  }
);
