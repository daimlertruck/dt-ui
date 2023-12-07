import { CloseIcon } from '../../core/assets';
import { BaseProps } from '../../types';

import { TagBorder, TagColor, TagSize, TagVariant } from './constants';
import { TagStyled, TagGroupStyled, TagButtonCloseStyled } from './Tag.styled';

type TagConditionalProps =
  | {
      onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
      onClose?: never;
    }
  | {
      onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
      onClick?: never;
    };

export type TagProps = {
  variant?: TagVariant;
  color?: TagColor;
  border?: TagBorder;
  size?: TagSize;
  isDisabled?: boolean;
  isClickable?: boolean;
} & TagConditionalProps &
  BaseProps;

export const Tag = ({
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
}: TagProps) => {
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
      style={style}
      variant={variant}
      color={color}
      border={border}
      size={size}
      hasHover={hasHoverStyle}
      isClickable={hasClickableStyle}
      isDismissible={isDismissible}
      isDisabled={isDisabled}
      onClick={handleClickTag}
      data-testid={dataTestIdName}
      aria-disabled={isDisabled}
    >
      {children}

      {isDismissible && (
        <TagButtonCloseStyled
          variant={variant}
          color={color}
          hasHover={hasHoverStyle}
          disabled={isDisabled}
          onClick={onClose}
          data-testid={`${dataTestIdName}-close-button`}
          aria-disabled={isDisabled}
        >
          <CloseIcon width='8px' height='8px' />
        </TagButtonCloseStyled>
      )}
    </TagStyled>
  );
};

export const TagGroup = ({ children, style }: BaseProps) => {
  return <TagGroupStyled style={style}>{children}</TagGroupStyled>;
};
