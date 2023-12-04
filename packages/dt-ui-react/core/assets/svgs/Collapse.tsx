import React from 'react';

const Collapse = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='8'
      height='6'
      viewBox='0 0 8 6'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M4 0.833496L0 4.8335L0.94 5.7735L4 2.72016L7.06 5.7735L8 4.8335L4 0.833496Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default Collapse;
