import { useState, useEffect } from 'react';

export const useTabs = (initialTab: string) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const handleChange = (value: string) => {
    setActiveTab(value);
  };

  return {
    activeTab,
    handleChange,
  };
};
