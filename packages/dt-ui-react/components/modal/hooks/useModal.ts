import { useEffect, useState } from 'react';

const useModal = (initialState = false) => {
  const [isModalOpen, setIsModalOpen] = useState(!!initialState);

  useEffect(() => {
    setIsModalOpen(initialState);
  }, [initialState]);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return {
    isModalOpen,
    toggleModal,
  };
};

export default useModal;
