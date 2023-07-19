import React from 'react';

const Email = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        opacity='0.3'
        d='M20.0015 8L12.0015 13L4.00146 8V18H20.0015V8ZM20.0015 6H4.00146L12.0015 10.99L20.0015 6Z'
        fill='currentColor'
      />
      <path
        d='M4.00146 20H20.0015C21.1015 20 22.0015 19.1 22.0015 18V6C22.0015 4.9 21.1015 4 20.0015 4H4.00146C2.90146 4 2.00146 4.9 2.00146 6V18C2.00146 19.1 2.90146 20 4.00146 20ZM20.0015 6L12.0015 10.99L4.00146 6H20.0015ZM4.00146 8L12.0015 13L20.0015 8V18H4.00146V8Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default Email;
