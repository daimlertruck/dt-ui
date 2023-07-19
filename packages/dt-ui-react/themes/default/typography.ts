export const fontFamily = {
  default:
    "Roboto, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Ubuntu, 'Helvetica Neue', sans-serif",
};

// Convert PX to REM
const rem = (size: string) => `${parseInt(size) / 16}rem`;

// Automate Font-styles assignment
const getTextStyles = (
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
  h1: getTextStyles(300, '72px', 1.23),
  h2: getTextStyles(700, '48px', 1.23),
  h3: getTextStyles(300, '42px', 1.23),
  h4: getTextStyles(400, '32px', 1.23),
  h5: getTextStyles(400, '24px', 1.23),
  h6: getTextStyles(700, '14px', 1.23),
  p: getTextStyles(400, '18px', 1.34),
  pSmall: getTextStyles(400, '16px', 1.34),
  pXSmall: getTextStyles(400, '14px', 1.34),
  pXXSmall: getTextStyles(400, '12px', 1.34),
  tag: getTextStyles(700, '10px', 1.34),
};
