import React from 'react';

const CopyIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill='none'
      height='24'
      viewBox='0 0 24 24'
      width='24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_287_5781)'>
        <path d='M8 7H19V21H8V7Z' fill='currentColor' opacity='0.3' />
        <path
          d='M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_287_5781'>
          <rect fill='white' height='24' width='24' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CopyIcon;
