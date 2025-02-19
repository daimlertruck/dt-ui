import { OTooltipDirection, TooltipDirection } from '../constants';
import { useTooltipContext } from '../context';

const PADDING = 4;
const ARROW_OFFSET = 8;
const OFFSET = PADDING + ARROW_OFFSET;
const DEFAULT_POSITION = { top: -1, left: -1 };

export const useTooltipPosition = (
  direction: TooltipDirection,
  tooltipRect: DOMRect
) => {
  const {
    containerRectProperties: { top, left, height, width },
  } = useTooltipContext();

  if (typeof window === 'undefined') return DEFAULT_POSITION;

  const scrollX = window.scrollX;
  const scrollY = window.scrollY;

  const positions = {
    [OTooltipDirection.Top]: (() => {
      const computedTop = top - OFFSET + scrollY;
      const computedLeft = left + width / 2 + scrollX;

      return {
        top: Math.max(computedTop, scrollY + tooltipRect.height),
        left: Math.min(
          scrollX + window.innerWidth - tooltipRect.width / 2,
          Math.max(scrollX + tooltipRect.width / 2, computedLeft)
        ),
      };
    })(),

    [OTooltipDirection.Bottom]: (() => {
      const computedTop = top + height + OFFSET + scrollY;
      const computedLeft = left + width / 2 + scrollX;

      return {
        top: Math.min(
          computedTop,
          scrollY + window.innerHeight - tooltipRect.height
        ),
        left: Math.min(
          scrollX + window.innerWidth - tooltipRect.width / 2,
          Math.max(scrollX + tooltipRect.width / 2, computedLeft)
        ),
      };
    })(),

    [OTooltipDirection.Left]: (() => {
      const computedTop = top + height / 2 + scrollY;
      const computedLeft = left - OFFSET + scrollX;

      return {
        top: Math.min(
          scrollY + window.innerHeight - tooltipRect.height / 2,
          Math.max(scrollY + tooltipRect.height / 2, computedTop)
        ),
        left: Math.max(computedLeft, scrollX + tooltipRect.width),
      };
    })(),

    [OTooltipDirection.Right]: (() => {
      const computedTop = top + height / 2 + scrollY;
      const computedLeft = left + width + OFFSET + scrollX;

      return {
        top: Math.min(
          scrollY + window.innerHeight - tooltipRect.height / 2,
          Math.max(scrollY + tooltipRect.height / 2, computedTop)
        ),
        left: Math.min(
          computedLeft,
          scrollX + window.innerWidth - tooltipRect.width
        ),
      };
    })(),
  };

  return positions[direction];
};
