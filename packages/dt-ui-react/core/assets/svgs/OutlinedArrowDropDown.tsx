import React from 'react';

const OutlinedArrowDropDown = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='12'
      height='8'
      viewBox='0 0 12 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M1.41 0.0898438L6 4.66984L10.59 0.0898438L12 1.49984L6 7.49984L0 1.49984L1.41 0.0898438Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default OutlinedArrowDropDown;
