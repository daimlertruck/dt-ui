import { createContext, ReactNode, useContext, useState } from 'react';

interface ContainerRectProperties {
  top: number;
  left: number;
  height: number;
  width: number;
}

interface TooltipContextState {
  containerRectProperties: ContainerRectProperties;
  isVisible: boolean;
  setContainerRectProperties: React.Dispatch<
    React.SetStateAction<ContainerRectProperties>
  >;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

interface TooltipContextProviderProps {
  children: ReactNode;
}

const DEFAULT_VALUE: TooltipContextState = {
  containerRectProperties: {
    top: -1,
    left: -1,
    height: -1,
    width: -1,
  },
  isVisible: false,
  setContainerRectProperties: () => null,
  setIsVisible: () => null,
};

export const TooltipContext = createContext<TooltipContextState>(DEFAULT_VALUE);

export const TooltipContextProvider = ({
  children,
}: TooltipContextProviderProps) => {
  const [containerRectProperties, setContainerRectProperties] = useState(
    DEFAULT_VALUE.containerRectProperties
  );
  const [isVisible, setIsVisible] = useState(DEFAULT_VALUE.isVisible);

  return (
    <TooltipContext.Provider
      value={{
        containerRectProperties,
        setContainerRectProperties,
        isVisible,
        setIsVisible,
      }}
    >
      {children}
    </TooltipContext.Provider>
  );
};

export const useTooltipContext = () => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error(
      'Tooltip compound components cannot be rendered outside the Tooltip component'
    );
  }
  return context;
};
