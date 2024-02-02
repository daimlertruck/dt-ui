import { getTextStyles } from '../../../utils/typography';

export const fontFamily = {
  default:
    "Roboto, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Ubuntu, 'Helvetica Neue', sans-serif",
};

// Convert PX to REM
const rem = (size: string) => `${parseInt(size) / 16}rem`;

// Automate Font-styles assignment
const getTextStylesLegacy = (
  fontWeight: number,
  fontSize: string,
  lineHeight: number
) => `
  font-weight: ${fontWeight};
  font-size: ${rem(fontSize)};
  line-height: ${lineHeight};
  margin: 0;
`;

export const fontStyles = {
  h1: getTextStylesLegacy(300, '72px', 1.23),
  h2: getTextStylesLegacy(700, '48px', 1.23),
  h3: getTextStylesLegacy(300, '42px', 1.23),
  h4: getTextStylesLegacy(400, '32px', 1.23),
  h5: getTextStylesLegacy(400, '24px', 1.23),
  h6: getTextStylesLegacy(700, '14px', 1.23),
  body1: getTextStyles(400, '1rem', '1.5rem'),
  p: getTextStylesLegacy(400, '18px', 1.34),
  pSmall: getTextStylesLegacy(400, '16px', 1.34),
  pXSmall: getTextStylesLegacy(400, '14px', 1.34),
  pXXSmall: getTextStylesLegacy(400, '12px', 1.34),
  tag: getTextStylesLegacy(700, '10px', 1.34),
};
