import React from 'react';

const Payments = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill='currentColor'
      height='24'
      viewBox='0 0 24 24'
      width='24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M23 8V18C23 19.1 22.1 20 21 20H5C4.45 20 4 19.55 4 19C4 18.45 4.45 18 5 18H21V8C21 7.45 21.45 7 22 7C22.55 7 23 7.45 23 8ZM4 16C2.34 16 1 14.66 1 13V7C1 5.34 2.34 4 4 4H16C17.66 4 19 5.34 19 7V14C19 15.1 18.1 16 17 16H4ZM7 10C7 11.66 8.34 13 10 13C11.66 13 13 11.66 13 10C13 8.34 11.66 7 10 7C8.34 7 7 8.34 7 10Z' />
    </svg>
  );
};

export default Payments;
