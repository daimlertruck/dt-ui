import React from 'react';

const DeleteIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill='none'
      height='24'
      viewBox='0 0 24 24'
      width='24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_287_3834)'>
        <path d='M8 9H16V19H8V9Z' fill='currentColor' opacity='0.3' />
        <path
          d='M15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5ZM6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_287_3834'>
          <rect fill='white' height='24' width='24' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DeleteIcon;
