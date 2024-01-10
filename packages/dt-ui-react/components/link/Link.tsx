import { forwardRef } from 'react';

import { BaseProps } from '../../types';
import { ButtonSize } from '../buttons/button/constants';

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
            variant='solid'
            size={textSize as ButtonSize}
            ref={ref}
            style={style}
            {...rest}
            color='primary'
          >
            {children}
          </ButtonLinkStyled>
        ) : (
          <LinkStyled
            textSize={textSize}
            ref={ref}
            data-testid={dataTestId ?? 'link'}
            onClick={onClick}
            disabled={isDisabled}
            isUnderline={isUnderline}
            style={style}
            {...rest}
          >
            {children}
          </LinkStyled>
        )}
      </>
    );
  }
);
