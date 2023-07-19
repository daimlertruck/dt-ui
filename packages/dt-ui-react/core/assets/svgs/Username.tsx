import React from 'react';

const Username = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        opacity='0.3'
        d='M12 16C9.31 16 6.23 17.28 6 18H18C17.8 17.29 14.7 16 12 16Z'
        fill='currentColor'
      />
      <path
        opacity='0.3'
        d='M12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10Z'
        fill='currentColor'
      />
      <path
        d='M12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14ZM6 18C6.22 17.28 9.31 16 12 16C14.7 16 17.8 17.29 18 18H6ZM12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default Username;
