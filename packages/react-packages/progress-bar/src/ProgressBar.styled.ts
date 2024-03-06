import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

import { ProgressBarState, ProgressBarSize } from './types';

interface StyledProgressBarProps {
  size: ProgressBarSize;
  state: ProgressBarState;
  progress: number;
}

interface StyledProgressBarTextProps {
  state: ProgressBarState;
}

interface ProgressBarColor {
  background: string;
  helper: string;
  percentage: string;
}

const progressBarHeights: Record<ProgressBarSize, string> = {
  small: '4px',
  large: '8px',
};

const progressBarColors = (
  theme: Theme
): Record<ProgressBarState, ProgressBarColor> => ({
  active: {
    background: theme.palette.informative.default,
    helper: theme.palette.content.secondary,
    percentage: theme.palette.content.body,
  },
  success: {
    background: theme.palette.success.default,
    helper: theme.palette.content.secondary,
    percentage: theme.palette.content.body,
  },
  error: {
    background: theme.palette.error.default,
    helper: theme.palette.error.default,
    percentage: theme.palette.error.default,
  },
});

export const ProgressBarFieldStyled = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.spacing['5xs']};
    min-width: 48px;
  `}
`;

export const ProgressBarWrapperStyled = styled.div`
  ${({ theme }) => `
    display: grid;
    grid-template-columns: minmax(48px, 1fr) 28px 16px;
    align-items: center;
    gap: ${theme.spacing['5xs']};
    width: 100%;
    height: 16px;
  `}
`;

export const ProgressBarStyled = styled.div<StyledProgressBarProps>`
  ${({ theme, size, state, progress }) => `
    width: ${progress}%;
    height: ${progressBarHeights[size]};
    background-color: ${progressBarColors(theme)[state].background};
    transition: width 0.2s ease-in-out;
    border-radius: ${theme.radius.none} ${theme.shape.progressbar} ${
    theme.shape.progressbar
  } ${theme.radius.none}; 
  `};
`;

export const ProgressBarTrackStyled = styled.div`
  ${({ theme }) => `
    width: 100%;
    background-color: ${theme.palette.secondary.medium};
    border-radius: ${theme.shape.progressbar};
    overflow: hidden;
  `};
`;
export const ProgressBarHelperTextStyled = styled.p<StyledProgressBarTextProps>`
  ${({ theme, state }) => `
    ${theme.fontStyles.body3}
    color: ${progressBarColors(theme)[state].helper};
  `};
`;

export const ProgressBarPercentageTextStyled = styled.div<StyledProgressBarTextProps>`
  ${({ theme, state }) => `
    ${theme.fontStyles.body3}
    text-align: center;
    color: ${progressBarColors(theme)[state].percentage};
  `};
`;

export const ProgressBarIconStyled = styled.div`
  height: 16px;
  line-height: 16px;
`;
