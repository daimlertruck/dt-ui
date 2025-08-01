import React from 'react';

const UnfoldMore = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill='none'
      height='24'
      viewBox='0 0 24 24'
      width='24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g>
        <path
          d='M7.40991 18.59L8.82991 20L11.9999 16.83L15.1699 20L16.5799 18.59L11.9999 14L7.40991 18.59ZM16.5899 5.41L15.1699 4L11.9999 7.17L8.82991 4L7.40991 5.41L11.9999 10L16.5899 5.41Z'
          fill='currentColor'
          id='Vector'
        />
      </g>
    </svg>
  );
};

export default UnfoldMore;
