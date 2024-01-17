import React from 'react';

const CheckCircleOutlineIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill='currentColor'
      height='20'
      width='20'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm4.59-12.42L8 12.17 5.41 9.59 4 11l4 4 8-8-1.41-1.42Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default CheckCircleOutlineIcon;
