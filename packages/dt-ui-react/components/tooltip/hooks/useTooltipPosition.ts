import { OTooltipDirection, TooltipDirection } from '../constants';
import { useTooltipContext } from '../context';

const PADDING = 4;
const ARROW_OFFSET = 8;
const OFFSET = PADDING + ARROW_OFFSET;
const DEFAULT_POSITION = { top: -1, left: -1 };

export const useTooltipPosition = (direction: TooltipDirection) => {
  const {
    containerRectProperties: { top, left, height, width },
  } = useTooltipContext();

  if (typeof window === 'undefined') return DEFAULT_POSITION;

  return {
    [OTooltipDirection.Bottom]: {
      top: top + height + OFFSET + window.scrollY,
      left: left + width / 2 + window.scrollX,
    },
    [OTooltipDirection.Top]: {
      top: top - OFFSET + window.scrollY,
      left: left + width / 2 + window.scrollX,
    },
    [OTooltipDirection.Left]: {
      top: top + height / 2 + window.scrollY,
      left: left - OFFSET + window.scrollX,
    },
    [OTooltipDirection.Right]: {
      top: top + height / 2 + window.scrollY,
      left: left + width + OFFSET + window.scrollX,
    },
  }[direction];
};
