import React from 'react';

const DeleteIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_287_3834)'>
        <path opacity='0.3' d='M8 9H16V19H8V9Z' fill='currentColor' />
        <path
          d='M15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5ZM6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_287_3834'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DeleteIcon;
