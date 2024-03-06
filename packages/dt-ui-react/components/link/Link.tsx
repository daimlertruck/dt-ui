import { ButtonSize } from '@dt-ui/react-button';
import { BaseProps } from '@dt-ui/react-core';
import { forwardRef } from 'react';

import { LinkTextSize } from './constants';
import { LinkType } from './constants/types';
import { ButtonLinkStyled, LinkStyled } from './Link.styled';

export interface LinkProps
  extends BaseProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isUnderline?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  textSize?: string;
  type?: LinkType;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      isDisabled,
      children,
      isUnderline = true,
      textSize = LinkTextSize.Medium,
      dataTestId,
      onClick,
      style,
      type = 'text',
      ...rest
    },
    ref
  ) => {
    return (
      <>
        {type === 'button' ? (
          <ButtonLinkStyled
            data-testid={dataTestId ?? 'link-button'}
            ref={ref}
            size={textSize as ButtonSize}
            style={style}
            variant='solid'
            {...rest}
            color='primary'
          >
            {children}
          </ButtonLinkStyled>
        ) : (
          <LinkStyled
            data-testid={dataTestId ?? 'link'}
            disabled={isDisabled}
            isUnderline={isUnderline}
            onClick={onClick}
            ref={ref}
            style={style}
            textSize={textSize}
            {...rest}
          >
            {children}
          </LinkStyled>
        )}
      </>
    );
  }
);
