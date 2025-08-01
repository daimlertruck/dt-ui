import { Code } from '@dt-dds/icons';
import { BaseProps } from '@dt-dds/react-core';
import { Icon } from '@dt-dds/react-icon';
import { forwardRef } from 'react';

import { LinkStyled } from './Link.styled';

import { iconSize, LinkSize, LinkVariant } from '.';

export interface LinkProps
  extends BaseProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isDisabled?: boolean;
  onClick?: () => void;
  size?: LinkSize;
  variant?: LinkVariant;
  icon?: Code;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      isDisabled,
      children,
      size = 'medium',
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
        size={size}
        style={style}
        variant={variant}
        {...(!isDisabled && { href, onClick })}
        {...rest}
      >
        <span>{children}</span>
        {icon ? (
          <Icon code={icon} color='inherit' size={iconSize[size]} />
        ) : null}
      </LinkStyled>
    );
  }
);
