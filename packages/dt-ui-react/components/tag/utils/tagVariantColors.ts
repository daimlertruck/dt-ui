import { CustomTheme as Theme } from '../../../types';
import { TagColor, TagVariant } from '../constants';

interface TagVariantColors {
  border: string | number;
  color: string;
  borderColor?: string;
  backgroundColor: string;
  '&:hover'?: {
    borderColor?: string;
    backgroundColor: string;
    color: string;
  };
}

interface TagVariantColorsProps {
  theme: Theme;
  color: TagColor;
  variant: TagVariant;
  hasHover: boolean;
  isDisabled: boolean;
}

const getColorWithShade = ({
  theme,
  color,
  shade,
}: Pick<TagVariantColorsProps, 'color'> & {
  shade: '90' | '60' | '30' | '10';
  theme: Theme;
}) => {
  const { colors, palette } = theme;

  if (color === 'primary') {
    return {
      '90': palette.primaryDark_500,
      '60': palette.primaryDark_200,
      '30': palette.primaryLight_100,
      '10': palette.primaryLight_400,
    }[shade];
  }

  const colorWithShade: keyof Theme['colors'] = `${color}_${shade}`;

  return colors[colorWithShade];
};

export const tagVariantColors = ({
  theme,
  color,
  variant,
  hasHover,
  isDisabled,
}: TagVariantColorsProps): TagVariantColors => {
  const colorShade90 = getColorWithShade({
    theme,
    color,
    shade: '90',
  });
  const colorShade60 = getColorWithShade({
    theme,
    color,
    shade: '60',
  });
  const colorShade30 = getColorWithShade({
    theme,
    color,
    shade: '30',
  });
  const colorShade10 = getColorWithShade({
    theme,
    color,
    shade: '10',
  });

  const colorWithDisabled = isDisabled ? colorShade30 : colorShade60;

  return {
    solid: {
      border: theme.spacing.none,
      color: theme.colors.white,
      backgroundColor: colorWithDisabled,
      ...(hasHover && {
        '&:hover': {
          backgroundColor: colorShade90,
          color: theme.colors.white,
        },
      }),
    },
    outlined: {
      border: `1px solid ${colorShade60}`,
      color: colorWithDisabled,
      backgroundColor: colorShade10,
      borderColor: colorWithDisabled,
      ...(hasHover && {
        '&:hover': {
          borderColor: colorShade90,
          backgroundColor: colorShade10,
          color: colorShade90,
        },
      }),
    },
  }[variant];
};
