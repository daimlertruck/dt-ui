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
      dataTestId={dataTestId}
      hideDelay={hideDelay}
      style={style}
    >
      {children}
    </TooltipContainer>
  </TooltipContextProvider>
);

Tooltip.Content = TooltipContent;

export default Tooltip;
