import React from 'react';

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='12'
      height='12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='m6.94 6 4.2-4.193a.67.67 0 0 0-.947-.947l-4.194 4.2L1.806.86a.67.67 0 1 0-.947.947L5.06 6l-4.2 4.194a.666.666 0 0 0 0 .946.667.667 0 0 0 .947 0l4.193-4.2 4.194 4.2a.668.668 0 1 0 .946-.947L6.94 6Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default CloseIcon;
