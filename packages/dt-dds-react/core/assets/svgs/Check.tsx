import React from 'react';

const Check = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill='none'
      viewBox='0 0 10 8'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M1 4.818 3.857 7 9 1'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </svg>
  );
};

export default Check;
