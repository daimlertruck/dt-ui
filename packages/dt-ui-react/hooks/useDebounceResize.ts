import { useEffect } from 'react';

import { debounce } from '../utils';

export default function useDebounceResize(callback: () => void, delay = 500) {
  useEffect(() => {
    const debounceCallbackOnWindowResize = debounce(callback, delay);

    debounceCallbackOnWindowResize();
    window.addEventListener('resize', debounceCallbackOnWindowResize);
    return () =>
      window.removeEventListener('resize', debounceCallbackOnWindowResize);
  }, [callback, delay]);
}
