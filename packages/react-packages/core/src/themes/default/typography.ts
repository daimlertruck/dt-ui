import { Breakpoints } from '../../types';
import { getTextStyles } from '../../utils';

import { breakpoints } from './breakpoints';

export const fontFamily = {
  default:
    "DaimlerCSPro, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Ubuntu, 'Helvetica Neue', sans-serif",
};

interface responsiveStyle {
  minBound?: Breakpoints;
  maxBound?: Breakpoints;
  fontSize: string;
  lineHeight: string;
}

export const fontStyles = {
  h1: getTextStyles(700, '2.5rem', '3rem'),
  h2: getTextStyles(700, '2rem', '2.5rem'),
  h3: getTextStyles(700, '1.5rem', '1.75rem'),
  h4: getTextStyles(700, '1.25rem', '1.5rem'),
  h5: getTextStyles(700, '1rem', '1.5rem'),
  h6: getTextStyles(700, '1rem', '1.5rem'),
  body1Bold: getTextStyles(700, '1rem', '1.25rem'),
  body1: getTextStyles(400, '1rem', '1.25rem'),
  body2Bold: getTextStyles(700, '0.875rem', '1rem'),
  body2: getTextStyles(400, '0.875rem', '1rem'),
  body3Bold: getTextStyles(700, '0.75rem', '1rem'),
  body3: getTextStyles(400, '0.75rem', '1rem'),
  body4Bold: getTextStyles(700, '0.625rem', '0.875rem'),
  body4: getTextStyles(400, '0.625rem', '0.875rem'),
  link1Bold: getTextStyles(700, '1rem', '1.5rem'),
  link1: getTextStyles(400, '1rem', '1.5rem'),
  link2Bold: getTextStyles(700, '0.875rem', '1.25rem'),
  link2: getTextStyles(400, '0.875rem', '1.25rem'),
  link3Bold: getTextStyles(700, '0.75rem', '1rem'),
  link3: getTextStyles(400, '0.75rem', '1rem'),
  button1: getTextStyles(700, '1rem', '1.5rem'),
  button2: getTextStyles(700, '0.875rem', '1.25rem'),
  button3: getTextStyles(700, '0.75rem', '1rem'),
  // Legacy
  p: getTextStyles(400, '18px', '24.12px'),
  pSmall: getTextStyles(400, '16px', '21.44px'),
  pXSmall: getTextStyles(400, '14px', '18.76px'),
  pXXSmall: getTextStyles(400, '12px', '16.08px'),
  tag: getTextStyles(700, '10px', '13.4px'),
};

const getTextResponsiveStyle = (styles: responsiveStyle[]) => {
  return styles
    .map((style) => {
      const minBoundStyle = style.minBound
        ? ` and (min-width:${breakpoints[style.minBound]}px)`
        : '';
      const maxBoundStyle = style.maxBound
        ? ` and (max-width:${breakpoints[style.maxBound]}px)`
        : '';
      return `
      @media only screen${minBoundStyle} ${maxBoundStyle} {
          font-size: ${style.fontSize};
          line-height: ${style.lineHeight};
      }`;
    })
    .join('');
};

export const responsiveFontStyles = {
  h1: getTextResponsiveStyle([
    { minBound: 'mq4', fontSize: '3rem', lineHeight: '3.25rem' },
  ]),
  h2: getTextResponsiveStyle([
    { minBound: 'mq4', fontSize: '2.5rem', lineHeight: '2.75rem' },
  ]),
  h3: getTextResponsiveStyle([
    { minBound: 'mq4', fontSize: '2rem', lineHeight: '2.25rem' },
  ]),
  h4: getTextResponsiveStyle([
    { minBound: 'mq4', fontSize: '1.5rem', lineHeight: '1.75rem' },
  ]),
  h5: getTextResponsiveStyle([
    { minBound: 'mq4', fontSize: '1.25rem', lineHeight: '1.5rem' },
  ]),
};
