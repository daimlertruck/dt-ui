import { useState } from 'react';

const useModal = (initialState = false) => {
  const [isModalOpen, setIsModalOpen] = useState(!!initialState);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return {
    isModalOpen,
    toggleModal,
  };
};

export default useModal;
