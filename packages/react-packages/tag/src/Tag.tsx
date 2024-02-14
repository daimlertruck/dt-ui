import { BaseProps } from '@dt-ui/react-core';
import { forwardRef } from 'react';

import { CloseIcon } from '../../../dt-ui-react/core/assets';

import { TagBorder, TagColor, TagSize, TagVariant } from './constants';
import { TagStyled, TagButtonCloseStyled } from './Tag.styled';

export type TagProps = {
  variant?: TagVariant;
  color?: TagColor;
  border?: TagBorder;
  size?: TagSize;
  isDisabled?: boolean;
  isClickable?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & BaseProps;

export const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    {
      style,
      children,
      dataTestId,
      variant = 'solid',
      color = 'primary',
      border = 'squared',
      size = 'small',
      isClickable = false,
      isDisabled = false,
      onClick,
      onClose,
    },
    ref
  ) => {
    const dataTestIdName = dataTestId ?? 'tag';
    const isDismissible = !!onClose;
    const hasHoverStyle =
      !isDisabled && (!!onClick || isClickable || isDismissible);
    const hasClickableStyle = !isDismissible && hasHoverStyle;

    const handleClickTag = (event: React.MouseEvent<HTMLDivElement>) => {
      if (isDisabled || isDismissible) {
        return;
      }

      onClick?.(event);
    };

    return (
      <TagStyled
        aria-disabled={isDisabled}
        border={border}
        color={color}
        data-testid={dataTestIdName}
        hasHover={hasHoverStyle}
        isClickable={hasClickableStyle}
        isDisabled={isDisabled}
        isDismissible={isDismissible}
        onClick={handleClickTag}
        ref={ref}
        size={size}
        style={style}
        variant={variant}
      >
        {children}

        {isDismissible ? (
          <TagButtonCloseStyled
            aria-disabled={isDisabled}
            color={color}
            data-testid={`${dataTestIdName}-close-button`}
            disabled={isDisabled}
            hasHover={hasHoverStyle}
            onClick={onClose}
            variant={variant}
          >
            <CloseIcon height={12} width={12} />
          </TagButtonCloseStyled>
        ) : null}
      </TagStyled>
    );
  }
);
