import React from 'react';

const MenuCompact = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...props}
    >
      <path d='M21 18H8V16H21V18ZM21 13H11V11H21V13ZM21 6V8H8V6H21ZM3 15.59L6.58 12L3 8.41L4.41 7L9.41 12L4.41 17L3 15.59Z' />
    </svg>
  );
};
export default MenuCompact;
