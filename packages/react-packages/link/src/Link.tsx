import { Code } from '@dt-ui/icons';
import { BaseProps } from '@dt-ui/react-core';
import { Icon } from '@dt-ui/react-icon';
import { forwardRef } from 'react';

import { LinkStyled } from './Link.styled';

import { LinkTextSize, LinkVariant } from '.';

export interface LinkProps
  extends BaseProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isDisabled?: boolean;
  onClick?: () => void;
  textSize?: LinkTextSize;
  variant?: LinkVariant;
  icon?: Code;
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
      icon,
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
        <span>{children}</span>
        {icon ? <Icon code={icon} color='inherit' size={textSize} /> : null}
      </LinkStyled>
    );
  }
);
