import { RefObject, useEffect } from 'react';

interface UseClickOutsideProps {
  ref: RefObject<Element>;
  handler: () => void;
}

/**
 * Handles the click outside of a element. For example, when clicking outside of
 * dropdown, it should close.
 * @param {string} ref - Ref object of the element
 * @param {string} handler - Action to be performed when user click outside of element
 */
const useClickOutside = ({ ref, handler }: UseClickOutsideProps) => {
  useEffect(() => {
    const eventHandler = (event: MouseEvent) => {
      // Do nothing if user click inside of element
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handler();
    };

    if (ref.current) {
      document.addEventListener('mousedown', eventHandler);
    }

    return () => document.removeEventListener('mousedown', eventHandler);
  });
};

export default useClickOutside;
