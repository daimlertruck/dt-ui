import React from 'react';

const ArrowDropUp = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill='none'
      height='5'
      viewBox='0 0 10 5'
      width='10'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M10 5L5 -4.37114e-07L0 5L10 5Z' fill='currentColor' />
    </svg>
  );
};

export default ArrowDropUp;
