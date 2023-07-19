import React from 'react';

const ArrowDropDown = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='10'
      height='5'
      viewBox='0 0 10 5'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M0 0L5 5L10 0H0Z' fill='currentColor' />
    </svg>
  );
};

export default ArrowDropDown;
