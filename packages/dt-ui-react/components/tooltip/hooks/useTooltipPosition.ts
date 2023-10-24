import { TooltipDirection } from '../constants';
import { useTooltipContext } from '../context';

const ARROW_OFFSET = 10;

export const useTooltipPosition = (direction: TooltipDirection) => {
  const {
    containerRectProperties: { top, left, height, width },
  } = useTooltipContext();

  return {
    [TooltipDirection.Bottom]: {
      top: top + height + ARROW_OFFSET + window.scrollY,
      left: left + width / 2 + window.scrollX,
    },
    [TooltipDirection.Top]: {
      top: top - ARROW_OFFSET + window.scrollY,
      left: left + width / 2 + window.scrollX,
    },
    [TooltipDirection.Left]: {
      top: top + height / 2 + window.scrollY,
      left: left - ARROW_OFFSET + window.scrollX,
    },
    [TooltipDirection.Right]: {
      top: top + height / 2 + window.scrollY,
      left: left + width + ARROW_OFFSET + window.scrollX,
    },
  }[direction];
};
