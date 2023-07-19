import React from 'react';

const Check = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 10 8'
      {...props}
    >
      <path
        d='M1 4.818 3.857 7 9 1'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Check;
