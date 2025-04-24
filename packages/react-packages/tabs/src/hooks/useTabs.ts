import { useState, useEffect } from 'react';

export const useTabs = (initialTab: number = 0) => {
  const [activeTab, setActiveTab] = useState<number>(initialTab);
  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const handleChange = (value: number) => {
    setActiveTab(value);
  };

  return {
    activeTab,
    handleChange,
  };
};
