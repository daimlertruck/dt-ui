import { useCallback, useState } from 'react';

export const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleUserInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const validCodes = ['Enter', 'Backspace', 'Tab'];

    if (!/Digit\d/.test(e.code) && !validCodes.includes(e.code)) {
      e.preventDefault();
    }
  };

  const handleChange = useCallback((value: number) => {
    setCurrentPage(value);
  }, []);

  return {
    currentPage,
    handleChange,
    handleUserInput,
  };
};
