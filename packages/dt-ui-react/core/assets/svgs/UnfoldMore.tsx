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
          d='M11.9999 5.83L15.1699 9L16.5799 7.59L11.9999 3L7.40991 7.59L8.82991 9L11.9999 5.83ZM11.9999 18.17L8.82991 15L7.41991 16.41L11.9999 21L16.5899 16.41L15.1699 15L11.9999 18.17Z'
          fill='currentColor'
          id='Vector'
        />
      </g>
    </svg>
  );
};

export default UnfoldMore;
