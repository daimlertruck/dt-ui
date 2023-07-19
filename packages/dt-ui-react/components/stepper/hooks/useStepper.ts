import { useCallback, useState } from 'react';

export const useStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((activeStep) => activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep((activeStep) => activeStep - 1);
  };

  const handleChangeStep = useCallback((step: number) => {
    setActiveStep(step);
  }, []);

  return {
    activeStep,
    handleChangeStep,
    handleNext,
    handleBack,
  };
};
