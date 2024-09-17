import { getTextStyles, theme } from '@dt-ui/react';

export const fontFamily = {
  default:
    "Roboto, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Ubuntu, 'Helvetica Neue', sans-serif",
};

export const fontStyles = {
  ...theme.fontStyles,
  h3: getTextStyles(500, '2rem', '2.25rem'),
  h4: getTextStyles(500, '1.5rem', '1.75rem'),
  h5: getTextStyles(500, '1.25rem', '1.5rem'),
  h6: getTextStyles(500, '1rem', '1.5rem'),
  button1: getTextStyles(600, '1rem', '1.5rem'),
  button2: getTextStyles(600, '0.875rem', '1.25rem'),
  button3: getTextStyles(600, '0.625rem', '0.875rem'),
};
