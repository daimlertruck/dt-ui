import {
  TooltipContainerProps,
  TooltipContainer,
  TooltipContent,
} from './components';
import { TooltipContextProvider } from './context';

const Tooltip = ({
  children,
  style,
  dataTestId,
  hideDelay,
}: TooltipContainerProps) => (
  <TooltipContextProvider>
    <TooltipContainer
      hideDelay={hideDelay}
      style={style}
      dataTestId={dataTestId}
    >
      {children}
    </TooltipContainer>
  </TooltipContextProvider>
);

Tooltip.Content = TooltipContent;

export default Tooltip;
