import React from 'react';

const RemoveCircleOutline = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill='none'
      height='20'
      viewBox='0 0 20 20'
      width='20'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M5 9H15V11H5V9ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default RemoveCircleOutline;
