import React from 'react';

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='12'
      height='12'
      viewBox='2 2 8 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M9.5 3.205L8.795 2.5L6 5.295L3.205 2.5L2.5 3.205L5.295 6L2.5 8.795L3.205 9.5L6 6.705L8.795 9.5L9.5 8.795L6.705 6L9.5 3.205Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default CloseIcon;
